import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContacts, deleteContact } from './operations';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.fulfilled]: (state, action) =>
      (state = { items: action.payload, isLoading: false, error: null }),
    [fetchContacts.rejected]: (state, action) =>
      (state = { ...state, error: action.payload }),
    [fetchContacts.pending]: (state, action) =>
      (state = { ...state, isLoading: true }),
    [deleteContact.pending]: (state, action) =>
      (state = { ...state, isLoading: true }),
    [deleteContact.fulfilled]: (state, action) => {
      return (state = { ...state });
    },
    [addContacts.pending]: (state, action) =>
      (state = { ...state, isLoading: true }),
    [addContacts.fulfilled]: (state, action) => {
      return (state = { ...state });
    },
  },
});
