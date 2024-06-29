import { createSlice } from "@reduxjs/toolkit";
import { setSelectedBook } from "../books/bookSlice";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {}, users: [], selectedUser: {}
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setUsers: (state, { payload }) => {
            state.users = payload || [];
        },
        setSelectedUser: (state, action) => {
            state.selectedUser = action.payload || {};
        }
    }
})

const { reducer, actions } = userSlice;

export const { setUser, setUsers, setSelectedUser } = actions;

export default reducer;