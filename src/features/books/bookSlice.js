import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    book: []
}

const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        setBook: (state, { payload }) => {
            state.book = payload || [];
        }
    }
});

const { reducer, actions } = bookSlice;

export const { setBook } = actions;

export default reducer;