import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersBorrowsAction } from "../../features/borrow/borrowAction";
import { UserLayout } from "../../components/layout/UserLayout";
import { BorrowTable } from "../Borrow/BorrowTable";

const MyBook = () => {
  const dispatch = useDispatch();
  const { borrows } = useSelector((state) => state.borrowInfo);

  useEffect(() => {
    dispatch(getUsersBorrowsAction());
  }, [dispatch]);

  return (
    <UserLayout pageTitle={"My Books"}>
      <BorrowTable borrows={borrows} />
    </UserLayout>
  );
};

export default MyBook;
