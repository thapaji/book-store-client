import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    contacts: [],
    selectedContact: {},
}

const contactSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        setContacts: (state, { payload }) => {
            state.contacts = payload || [];
        },
        setSelectedContact: (state, { payload }) => {
            state.selectedContact = payload || {};
        }
    }
});

const { reducer, actions } = contactSlice;

export const { setContacts, setSelectedContact } = actions;

export default reducer;