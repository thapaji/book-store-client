import { apiProcessor } from "../../helpers/axiosHelper";

const rootAPI = import.meta.env.VITE_APP_ROOTAPI;
const newsEp = rootAPI + "/news";

export const postNewNews = async (news) => {
  const axiosObj = { method: "POST", url: newsEp, data: news, isPrivate: true };
  return await apiProcessor(axiosObj);
};

export const fetchNews = async (isPrivate) => {
  const axiosObj = { method: "GET", url: newsEp, isPrivate: true };
  return await apiProcessor(axiosObj);
};

export const fetchSingleNews = async (_id) => {
  const axiosObj = { method: "GET", url: newsEp + "/" + _id };
  return await apiProcessor(axiosObj);
};

export const updateNews = async (news) => {
  const axiosObj = { method: "PUT", url: newsEp, data: news, isPrivate: true };
  return await apiProcessor(axiosObj);
};

export const deleteNews = async (_id) => {
  const axiosObj = { method: "DELETE", url: newsEp + "/" + _id, isPrivate: true };
  return await apiProcessor(axiosObj);
};
