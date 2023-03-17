import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  useGetContactsQuery,
  useGetContactByIdQuery,
  useEditContactsMutation,
} from 'reduxe/sliceContacts';

import { Form, Label } from './EditContact.styled';

const findContactByNameAndId = (contacts, userName, id) => {
  const textFilter = userName.toUpperCase();
  return contacts.find(
    element => element.name.toUpperCase() === textFilter && element.id !== id
  );
};

const EditContact = ({ contact, handlerEditionContact }) => {
  const { data: contacts } = useGetContactsQuery();
  //Отут тяну через фетч суто для практики. Зрозуміло що можна було взяти все із пропса contact
  const { data: currentContact } = useGetContactByIdQuery(contact.id);
  const [updateContact, result] = useEditContactsMutation();

  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  useEffect(() => {
    if (currentContact) {
      setNewName(currentContact.name);
      setNewNumber(currentContact.phone);
    }
  }, [currentContact]);

  const handlerUpdateContact = async event => {
    event.preventDefault();

    if (findContactByNameAndId(contacts, newName, contact.id)) {
      alert(`${newName} is already in contacts`);
      return;
    }
    await updateContact({
      id: contact.id,
      name: newName,
      phone: newNumber,
    });

    handlerEditionContact(false);
  };

  const onChangeName = event => {
    setNewName(event.target.value);
  };

  const onChangeNumber = event => {
    setNewNumber(event.target.value);
  };

  return (
    <>
      {currentContact && (
        <Form onSubmit={handlerUpdateContact} disabled={result.isLoading}>
          <Label htmlFor="userName">
            New name:
            <input
              type="text"
              placeholder="Enter user name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              required
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              name="name"
              value={newName}
              onChange={onChangeName}
            />
          </Label>

          <Label htmlFor="numberPhone">
            New number:
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={newNumber}
              onChange={onChangeNumber}
            />
          </Label>
          <button type="submit" disabled={result.isLoading}>
            Save
          </button>
          <button
            type="button"
            onClick={() => handlerEditionContact(false)}
            disabled={result.isLoading}
          >
            Cancel
          </button>
        </Form>
      )}
    </>
  );
};

EditContact.propType = {
  contact: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    edit: PropTypes.bool,
  }).isRequired,
  handlerEditionContact: PropTypes.func.isRequired,
};

export default EditContact;
