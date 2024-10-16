import axios from "axios";
import { apiProcessor } from "../../helpers/axiosHelper";

const rootAPI = import.meta.env.VITE_APP_ROOTAPI;
const borrowEp = rootAPI + "/borrows";

export const postNewBorrow = async (borrow) => {
  const axiosObj = { method: "POST", url: borrowEp, data: borrow, isPrivate: true };
  return await apiProcessor(axiosObj);
};

export const fetchAllBorrows = async (isPrivate) => {
  const axiosObj = { method: "GET", url: borrowEp + "/all", isPrivate: true };
  return await apiProcessor(axiosObj);
};

export const fetchBorrows = async (isPrivate) => {
  const axiosObj = { method: "GET", url: borrowEp, isPrivate: true };
  return await apiProcessor(axiosObj);
};

export const fetchSingleBorrow = async (_id) => {
  const axiosObj = { method: "GET", url: borrowEp + "/" + _id };
  return await apiProcessor(axiosObj);
};

export const returnBook = async (borrow) => {
  const axiosObj = { method: "PUT", url: borrowEp, data: borrow, isPrivate: true };
  return await apiProcessor(axiosObj);
};

export const fetchBorrowsFromDate = async (isPrivate, fromDate) => {
  const axiosObj = {
    method: "GET",
    url: `${borrowEp}/between/${fromDate}`,
    isPrivate,
  };
  return await apiProcessor(axiosObj);
};
