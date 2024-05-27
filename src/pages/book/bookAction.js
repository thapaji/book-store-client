import { toast } from "react-toastify";
import { postNewBook } from "../../features/books/bookAxios"

export const postNewBookAction = (book) => async (dispatch) => {
    const pending = postNewBook(book);
    toast.promise(pending, {
        pending: "Creating your Book....."
    })
    const { status, message } = await pending;
    toast[status](message);
    console.log(message)
}