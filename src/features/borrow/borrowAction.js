import { toast } from "react-toastify";
import { postNewBorrow, fetchBorrows, fetchSingleBorrow, updateBorrow } from "./BorrowAxios"
import { setBorrows, setSelectedBorrow } from "./borrowSlice";

export const postNewBorrowAction = (Borrow) => async (dispatch) => {
    const pending = postNewBorrow(Borrow);
    toast.promise(pending, {
        pending: "Borrowing your book....."
    })
    const { status, message } = await pending;
    toast[status](message);
    console.log(message)
}

export const getAllBorrowsAction = (isPrivate) => async (dispatch) => {
    const { status, Borrows } = await fetchBorrows(isPrivate);
    if (status) {
        dispatch(setBorrows(Borrows));
    }
}

export const getSingleBorrowAction = (_id) => async (dispatch) => {
    const { status, Borrow } = await fetchSingleBorrow(_id);
    if (status) {
        dispatch(setSelectedBorrow(Borrow));
    }
}

export const updateBorrowAction = (Borrow) => async (dispatch) => {
    const pending = updateBorrow(Borrow);
    toast.promise(pending, {
        pending: "Updating your Borrow....."
    })
    const { status, message } = await pending;
    toast[status](message);
    console.log(message)
}