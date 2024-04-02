import { createSelector } from '@reduxjs/toolkit';
import { selectContactsFilter } from '../filters/selectors';

export const selectLoading = state => state.contacts.loading;
export const selectContacts = state => state.contacts.items;
// MEMO
export const selectFilterContacts = createSelector(
  [selectContacts, selectContactsFilter],
  (contacts, contactsFilter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(contactsFilter.toLowerCase())
    );
  }
);
