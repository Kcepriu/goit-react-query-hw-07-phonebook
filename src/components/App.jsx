import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import Phonebook from './Phonebook';
import ListContacts from './ListContacts';
import Filter from './Filter';

import { TitlePhonebook, TitleContacts, Container } from './App.style';

const NAME_STORAGE = 'Contacts_Phonebook';

function useLocalStorage(naneStorage) {
  const [value, setValue] = useState(loadData); // Читаю збережені дані при першому рендері!!!!!!! Треба передати саме посилання на функцію, або зробити анонамну функцію,
  // const [contacts, setContacts] = useState(loadData()); // НЕПРАВИЛЬНО!!! бо кожден рендер буде дборгати її

  function loadData() {
    let restoredSession = [];
    try {
      restoredSession = JSON.parse(localStorage.getItem(naneStorage));
    } catch {
      console.log('Error local');
      restoredSession = [];
    }

    return restoredSession || [];
  }

  // * useEffect
  // * Save contacts to LocalStorage
  useEffect(() => {
    function saveData(data) {
      try {
        const serializedState = JSON.stringify(data);
        localStorage.setItem(naneStorage, serializedState);
      } catch (error) {
        console.error('Set state error: ', error.message);
      }
    }

    saveData(value);
  }, [value, naneStorage]);

  return [value, setValue];
}

const App = () => {
  const [contacts, setContacts] = useLocalStorage(NAME_STORAGE);
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

  // ! Я розумію що для моого списку контактів це зайве, али використаю, бо забудуся що є така функція.
  // ! не треба бо тмоємо тільки два значення  filter і contacts які перередрюють компонент
  // const visibleContacts = useMemo(() => {
  //   return contacts.filter(element =>
  //     element.userName.toUpperCase().includes(filter.toUpperCase())
  //   );
  // }, [filter, contacts]);

  const visibleContacts = contacts.filter(element =>
    element.userName.toUpperCase().includes(filter.toUpperCase())
  );

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
