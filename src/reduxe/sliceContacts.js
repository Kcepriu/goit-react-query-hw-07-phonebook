import { nanoid } from 'nanoid';
import { loadDataFromStorage, saveDataToStarage } from 'services/localStorage';

const { createSlice } = require('@reduxjs/toolkit');

//const contactsInitialState =    [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: loadDataFromStorage([]),
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
        saveDataToStarage(state);
      },
      prepare(newContact) {
        return {
          payload: { ...newContact, id: nanoid(), edit: false },
        };
      },
    },

    deleteContact(state, action) {
      const newState = state.filter(contact => contact.id !== action.payload);
      saveDataToStarage(newState);
      return newState;
    },

    editContact(state, action) {
      for (const contact of state) {
        if (contact.id === action.payload) {
          contact.edit = !contact.edit;
          break;
        }
      }
    },

    saveContact(state, action) {
      for (const contact of state) {
        if (contact.id === action.payload.id) {
          contact.name = action.payload.name;
          contact.number = action.payload.number;
          contact.edit = !contact.edit;
          break;
        }
      }
      saveDataToStarage(state);
    },
  },
});

export const { addContact, deleteContact, editContact, saveContact } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
