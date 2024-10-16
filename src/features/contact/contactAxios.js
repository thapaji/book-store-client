import { apiProcessor } from "../../helpers/axiosHelper";

const rootAPI = import.meta.env.VITE_APP_ROOTAPI;
const contactEp = rootAPI + "/contacts";

export const postNewContact = async (contact) => {
  const axiosObj = {
    method: "POST",
    url: contactEp,
    data: contact,
    isPrivate: true,
  };
  return await apiProcessor(axiosObj);
};

export const fetchContacts = async () => {
  const axiosObj = { method: "GET", url: contactEp, isPrivate: true };
  return await apiProcessor(axiosObj);
};

export const fetchSingleContact = async (_id) => {
  const axiosObj = { method: "GET", url: contactEp + "/" + _id };
  return await apiProcessor(axiosObj);
};

export const markAsRead = async (_id, contact) => {
  const axiosObj = { method: "PUT", url: contactEp + "/" + _id, data: contact, isPrivate: true };
  return await apiProcessor(axiosObj);
};

export const deleteContact = async (_id) => {
  const axiosObj = { method: "DELETE", url: contactEp + "/" + _id, isPrivate: true };
  return await apiProcessor(axiosObj);
};

export const fetchUnreadMessages = async () => {
  const axiosObj = { method: "GET", url: contactEp + "/unread", isPrivate: true };
  return await apiProcessor(axiosObj);
};
