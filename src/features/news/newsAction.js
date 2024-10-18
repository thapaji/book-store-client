import { toast } from "react-toastify";
import { postNewNews, fetchNews, fetchSingleNews, updateNews, deleteNews } from "./newsAxios";
import { setNews, setSelectedNews } from "./newsSlice";

export const postNewNewsAction = (news) => async (dispatch) => {
  const pending = postNewNews(news);
  toast.promise(pending, {
    pending: "Creating your News.....",
  });
  const { status, message } = await pending;
  toast[status](message);
  if (status) {
    dispatch(getAllNewsAction(true));
  }
};

export const getAllNewsAction = () => async (dispatch) => {
  const { status, news } = await fetchNews();
  if (status) {
    dispatch(setNews(news));
  }
};

export const getSingleNewsAction = (_id) => async (dispatch) => {
  const { status, news } = await fetchSingleNews(_id);
  if (status) {
    dispatch(setSelectedNews(news));
  }
};

export const updateNewsAction = (news) => async (dispatch) => {
  const pending = updateNews(news);
  toast.promise(pending, {
    pending: "Updating your News.....",
  });
  const { status, message } = await pending;
  toast[status](message);
  if (status) {
    dispatch(getAllNewsAction(true));
  }
};

export const deleteNewsAction = (_id) => async (dispatch) => {
  const pending = deleteNews(_id);
  toast.promise(pending, {
    pending: "Deleting your News.....",
  });
  const { status, message } = await pending;
  toast[status](message);
  if (status) {
    dispatch(getAllNewsAction(true));
  }
};
