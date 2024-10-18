import { apiProcessor } from "../../helpers/axiosHelper";

const rootAPI = import.meta.env.VITE_APP_ROOTAPI;
const bookEp = rootAPI + "/books";

export const postNewBook = async (book) => {
  const axiosObj = { method: "POST", url: bookEp, data: book, isPrivate: true };
  return await apiProcessor(axiosObj);
};

export const fetchBooks = async (isPrivate) => {
  const axiosObj = { method: "GET", url: isPrivate ? bookEp + "/all" : bookEp, isPrivate };
  return await apiProcessor(axiosObj);
};

export const fetchSingleBook = async (_id) => {
  const axiosObj = { method: "GET", url: bookEp + "/" + _id };
  return await apiProcessor(axiosObj);
};

export const updateBook = async (book) => {
  const axiosObj = { method: "PUT", url: bookEp, data: book, isPrivate: true };
  return await apiProcessor(axiosObj);
};

export const deleteBook = async (_id) => {
  const axiosObj = { method: "DELETE", url: bookEp + "/" + _id, isPrivate: true };
  return await apiProcessor(axiosObj);
};
