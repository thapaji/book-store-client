import React, { useEffect } from "react";
import { UserLayout } from "../../components/layout/UserLayout";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleBookAction } from "../../features/books/bookAction";

const EditBook = () => {
  const { _id } = useParams();
  const dispatch = useDispatch();

  const { selectedBook } = useSelector((state) => state.bookInfo);

  useEffect(() => {
    dispatch(getSingleBookAction(_id));
  }, [dispatch, _id]);

  return <UserLayout pageTitle={"Edit Book"}>Name: {selectedBook?.title}</UserLayout>;
};

export default EditBook;
