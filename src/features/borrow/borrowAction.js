import { toast } from "react-toastify";
import { postNewBorrow, fetchBorrows, fetchSingleBorrow, returnBook } from "./borrowAxios"
import { setBorrows, setSelectedBorrow } from "./borrowSlice";
import { getAllBooksAction, getSingleBookAction } from "../books/bookAction";

export const postNewBorrowAction = (borrow) => async (dispatch) => {
    const pending = postNewBorrow(borrow);
    toast.promise(pending, {
        pending: "Borrowing your book....."
    })
    const { status, message } = await pending;
    toast[status](message);
    console.log(message)
    if (status) {
        dispatch(getAllBooksAction())
    }
}

export const getAllBorrowsAction = (isPrivate) => async (dispatch) => {
    const { status, borrows } = await fetchBorrows(isPrivate);
    if (status === 'success') {
        dispatch(setBorrows(borrows));
    }
}

export const getSingleBorrowAction = (_id) => async (dispatch) => {
    const pending = await fetchSingleBorrow(_id);
    toast.promise(pending, { pending: 'Please wait...' });
    const { status, message } = await pending;
    toast[status](message)
    if (status === 'success') {
        dispatch(getAllBooksAction());
        dispatch(getAllBorrowsAction());
    }
}

export const returnBorrowAction = (Borrow) => async (dispatch) => {
    const pending = returnBook(Borrow);
    toast.promise(pending, {
        pending: "Updating your Borrow....."
    })
    const { status, message } = await pending;
    toast[status](message);
    console.log(message)
}