import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAllContacts,
  deleteContacts,
  addContacts,
  changeContacts,
} from './operation';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    editContact(state, action) {
      for (const contact of state.items) {
        if (contact.id === action.payload) {
          contact.edit = !contact.edit;
          break;
        }
      }
    },
  },
  extraReducers: {
    // * Fetch contacts
    [fetchAllContacts.pending]: handlePending,
    [fetchAllContacts.rejected]: handleRejected,
    [fetchAllContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    // * Delete Contact
    [deleteContacts.pending]: handlePending,
    [deleteContacts.rejected]: handleRejected,
    [deleteContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.filter(
        contact => contact.id !== action.payload.id
      );
    },
    // * ADD contact
    [addContacts.pending]: handlePending,
    [addContacts.rejected]: handleRejected,
    [addContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    // * changeContact
    [changeContacts.pending]: handlePending,
    [changeContacts.rejected]: handleRejected,
    [changeContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;

      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1, action.payload);
    },
  },
});

export const { editContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
