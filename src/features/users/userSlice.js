import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {}, users: []
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setUsers: (state, { payload }) => {
            state.users = payload || [];
        },
    }
})

const { reducer, actions } = userSlice;

export const { setUser, setUsers } = actions;

export default reducer;