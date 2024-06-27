import { toast } from "react-toastify";
import { postNewBook, fetchBooks, fetchSingleBook, updateBook, deleteBook } from "./bookAxios"
import { setBooks, setSelectedBook } from "./bookSlice";
import { useNavigate } from "react-router-dom";

export const postNewBookAction = (book) => async (dispatch) => {
    const pending = postNewBook(book);
    toast.promise(pending, {
        pending: "Creating your Book....."
    })
    const { status, message } = await pending;
    toast[status](message);
    if (status) {
        dispatch(getAllBooksAction(true));
    }
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

export const updateBookAction = (book) => async (dispatch) => {
    const pending = updateBook(book);
    toast.promise(pending, {
        pending: "Updating your Book....."
    })
    const { status, message } = await pending;
    toast[status](message);
    if (status) {
        dispatch(getAllBooksAction(true));
    }
}

export const deleteBookAction = (_id) => async (dispatch) => {
    const pending = deleteBook(_id);
    toast.promise(pending, {
        pending: "Deleting your Book....."
    })
    const { status, message } = await pending;
    toast[status](message);
    if (status) {
        dispatch(getAllBooksAction(true));
    }
}