import { toast } from "react-toastify";
import { postNewContact, fetchContacts, fetchSingleContact } from "./contactAxios"
import { setContacts, setSelectedContact } from "./contactSlice";

export const postNewContactAction = (contact) => async (dispatch) => {
    const pending = postNewContact(contact);
    toast.promise(pending, {
        pending: "Creating your Contact....."
    })
    const { status, message } = await pending;
    toast[status](message);
    if (status) {
        dispatch(getAllContactAction(true));
    }
}

export const getAllContactAction = (isPrivate) => async (dispatch) => {
    const { status, contact } = await fetchContacts(isPrivate);
    if (status) {
        dispatch(setContacts(contact));
    }
}

export const getSingleContactAction = (_id) => async (dispatch) => {
    const { status, contact } = await fetchSingleContact(_id);
    if (status) {
        dispatch(setSelectedContact(contact));
    }
}
