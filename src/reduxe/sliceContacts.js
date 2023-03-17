import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://64130b41b1ea74430320cd5f.mockapi.io/avi/v2/',
  }),
  endpoints: builder => ({
    //* FETCH ALL contact
    getContacts: builder.query({
      query: () => `/contacts`,
      // transformResponse: (response: { data: Post }, meta, arg) => response.data,
      providesTags: ['Contact'],
    }),
    //* FETCH  contact BY id
    getContactById: builder.query({
      query: contactId => `/contacts/${contactId}`,
      providesTags: ['Contact'],
    }),

    // * ADD
    addContacts: builder.mutation({
      query: contact => ({
        url: `/contacts`,
        method: 'POST',
        body: contact,
      }),
      invalidatesTags: ['Contact'],
    }),

    // * Delete
    deleteContacts: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),

    // * Edit contact
    editContacts: builder.mutation({
      query: contact => ({
        url: `/contacts/${contact.id}`,
        method: 'PUT',
        body: contact,
      }),
      invalidatesTags: ['Contact'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useGetContactByIdQuery,
  useAddContactsMutation,
  useDeleteContactsMutation,
  useEditContactsMutation,
} = contactsApi;
