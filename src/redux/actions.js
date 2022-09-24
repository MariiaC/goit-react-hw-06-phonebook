import { createAction } from '@reduxjs/toolkit';

export const filter = createAction('contactsBookReducer/filter');
export const addContact = createAction('contactsBookReducer/addContact');
export const deleteContact = createAction('contactsBookReducer/deleteContact');
