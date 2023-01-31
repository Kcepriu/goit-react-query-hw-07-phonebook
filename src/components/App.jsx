import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import Phonebook from './Phonebook';
import ListContacts from './ListContacts';
import Filter from './Filter';

import { TitlePhonebook, TitleContacts, Container } from './App.style';
class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', userName: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', userName: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', userName: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', userName: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  findContactByName = userName => {
    const { contacts } = this.state;
    const textFilter = userName.toUpperCase();

    return contacts.find(
      element => element.userName.toUpperCase() === textFilter
    );
  };

  handlerSubmitPhonebook = ({ userName, number }) => {
    if (this.findContactByName(userName)) {
      alert(`${userName} is already in contacts`);
      return;
    }

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, { userName, number, id: nanoid() }],
      };
    });
    return true;
  };

  handlerOnChangeFilter = event => {
    this.setState({
      filter: event.currentTarget.value,
    });
  };

  handlerDeleteContact = event => {
    const { contacts } = this.state;
    const id = event.currentTarget.name;
    const newContacts = contacts.filter(element => element.id !== id);

    this.setState({
      contacts: [...newContacts],
    });
  };

  render() {
    const { contacts, filter } = this.state;
    const textFilter = filter.toUpperCase();
    const visibleContacts = contacts.filter(element =>
      element.userName.toUpperCase().includes(textFilter)
    );

    return (
      <Container className="App">
        <TitlePhonebook>Phonebook</TitlePhonebook>
        <Phonebook onSubmit={this.handlerSubmitPhonebook} />

        {contacts.length > 0 && (
          <>
            <Filter onChange={this.handlerOnChangeFilter} value={filter} />
            <TitleContacts>Contacts</TitleContacts>
            <ListContacts
              contacts={visibleContacts}
              onDelete={this.handlerDeleteContact}
            />
          </>
        )}
      </Container>
    );
  }
}

export default App;
