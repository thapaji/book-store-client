import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    borrows: [],
    selectedBorrow: {},
}

const borrowslice = createSlice({
    name: 'borrow',
    initialState,
    reducers: {
        setBorrows: (state, { payload }) => {
            state.borrows = payload || [];
        },
        setSelectedBorrow: (state, { payload }) => {
            state.selectedBorrow = payload || {};
        }
    }
});

const { reducer, actions } = borrowslice;

export const { setBorrows, setSelectedBorrow } = actions;

export default reducer;