import { toast } from "react-toastify";
import { postNewBook, fetchBooks, fetchSingleBook } from "./bookAxios"
import { setBooks, setSelectedBook } from "./bookSlice";

export const postNewBookAction = (book) => async (dispatch) => {
    const pending = postNewBook(book);
    toast.promise(pending, {
        pending: "Creating your Book....."
    })
    const { status, message } = await pending;
    toast[status](message);
    console.log(message)
}

export const getAllBooksAction = (isPrivate) => async (dispatch) => {
    const { status, books } = await fetchBooks(isPrivate);
    if (status) {
        dispatch(setBooks(books));
    }
}

export const getSingleBookAction = (_id) => async (dispatch) => {
    const { status, book } = await fetchSingleBook(_id);
    if (status) {
        dispatch(setSelectedBook(book));
    }
}