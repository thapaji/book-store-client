import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../features/users/userSlice';
import bookReducer from '../features/books/bookSlice';

export default configureStore({
    reducer: {
        /*********** Slices ************/
        userInfo: userReducer,
        bookInfo: bookReducer,
        /*********** Slices ************/
    },
})