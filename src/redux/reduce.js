import { createReducer } from "@reduxjs/toolkit";
import { filter, addContact, deleteContact } from './actions';


const initialState = {
  contacts: [],
  filter: '',
};

const contactsBookReducer = createReducer(initialState, {
  [addContact]: (state, action) => {
    state.contacts.push(action.payload);
  }, 
  

  [deleteContact]: (state, action) => {
    const newContacts = state.contacts.filter(
      item => item.id !== action.payload
    );
    return { ...state, contacts: newContacts };
  },

  [filter]: (state, action) => {
    state.filter = action.payload;
  },
});

export default contactsBookReducer;