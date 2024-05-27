import axios from "axios";
import { apiProcessor } from "../../helpers/axiosHelper";

const rootAPI = import.meta.env.VITE_APP_ROOTAPI;
const bookEp = rootAPI + "/books";

export const postNewBook = async (book) => {
    const axiosObj = { method: 'POST', url: bookEp, data: book, isPrivate: true };
    return await apiProcessor(axiosObj);
};