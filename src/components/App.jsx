import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import Phonebook from './Phonebook';
import ListContacts from './ListContacts';
import Filter from './Filter';

import { TitlePhonebook, TitleContacts, Container } from './App.style';
import { saveData, loadData } from './services';

const App = () => {
  const [contacts, setContacts] = useState(loadData()); // Читаю збережені дані при першому рендері!!!!!!!
  const [visibleContacts, setVisibleContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const findContactByName = userName => {
    const textFilter = userName.toUpperCase();

    return contacts.find(
      element => element.userName.toUpperCase() === textFilter
    );
  };

  // * Handlers
  const handlerSubmitPhonebook = ([userName, number]) => {
    if (findContactByName(userName)) {
      alert(`${userName} is already in contacts`);
      return;
    }

    setContacts(prevState => [
      ...prevState,
      { userName, number, id: nanoid() },
    ]);

    return true;
  };

  const handlerOnChangeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const handlerDeleteContact = event => {
    const id = event.currentTarget.name;
    const newContacts = contacts.filter(element => element.id !== id);

    setContacts(newContacts);
  };

  // * useEffect
  // * Save contacts to LocalStorage
  useEffect(() => {
    saveData(contacts);
  }, [contacts]);

  //TODO Микита, Глянь на оцей кусок коду.
  //! Чи доцільно було visibleContacts пхати в стейти ?
  //! Чи можна було б запхати в якусь локальну змінну типу
  //! const visibleContacts = contacts.filter(element => element.userName.toUpperCase().includes(filter.toUpperCase()) );
  //! як правильніше, бо робить і так і так.
  // -
  // * Update VisibleContacts
  useEffect(() => {
    const textFilter = filter.toUpperCase();

    setVisibleContacts(
      contacts.filter(element =>
        element.userName.toUpperCase().includes(textFilter)
      )
    );
  }, [filter, contacts]);

  return (
    <Container className="App">
      <TitlePhonebook>Phonebook</TitlePhonebook>
      <Phonebook onSubmit={handlerSubmitPhonebook} />

      {contacts.length > 0 && (
        <>
          <Filter onChange={handlerOnChangeFilter} value={filter} />
          <TitleContacts>Contacts</TitleContacts>
          <ListContacts
            contacts={visibleContacts}
            onDelete={handlerDeleteContact}
          />
        </>
      )}
    </Container>
  );
};

export default App;
