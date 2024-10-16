import { fetchReviews, fetchUserReviews, postNewReview, updateReview } from "./reviewAxios";
import { toast } from "react-toastify";
import { setAllReview, setPubReviews, updateReveiwStatus } from "./reviewSlice";

export const addNewReviewAction = (obj) => async (dispatch) => {
  const pending = postNewReview(obj);

  toast.promise(pending, {
    pending: "Please wait...",
  });

  const { status, message } = await pending;

  toast[status](message);

  if (status === "success") {
    dispatch(getReviews());
  }
  return status;
};

export const updateReviewAction = (obj) => async (dispatch) => {
  const pending = updateReview(obj);

  toast.promise(pending, {
    pending: "Please wait...",
  });

  const { status, message } = await pending;

  toast[status](message);

  if (status === "success") {
    dispatch(updateReveiwStatus(obj));
  }
};

// get reviews
export const getReviews =
  (isPrivate, userReviews = false) =>
  async (dispatch) => {
    if (!userReviews) {
      const { status, reviews } = await fetchReviews(isPrivate);
      if (status) {
        isPrivate ? dispatch(setAllReview(reviews)) : dispatch(setPubReviews(reviews));
      }
      return;
    }
    dispatch(getUserReviews());
  };

export const getUserReviews = () => async (dispatch) => {
  const { status, reviews } = await fetchUserReviews(true);
  if (status) {
    dispatch(setAllReview(reviews));
  }
};
