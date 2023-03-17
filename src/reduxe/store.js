import { configureStore } from '@reduxjs/toolkit';

import { filterReducer } from './sliceFilter';
import { setupListeners } from '@reduxjs/toolkit/query';
import { contactsApi } from './sliceContacts';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});

setupListeners(store.dispatch);
