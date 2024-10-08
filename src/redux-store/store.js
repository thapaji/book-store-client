import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/users/userSlice";
import bookReducer from "../features/books/bookSlice";
import borrowReducer from "../features/borrow/borrowSlice";
import reviewReducer from "../features/review/reviewSlice";
import newsReducer from "../features/news/newsSlice";
import contactReducer from "../features/contact/contactSlice";

export default configureStore({
  reducer: {
    /*********** Slices ************/
    userInfo: userReducer,
    bookInfo: bookReducer,
    borrowInfo: borrowReducer,
    reviewInfo: reviewReducer,
    newsInfo: newsReducer,
    contactInfo: contactReducer,
    /*********** Slices ************/
  },
});
