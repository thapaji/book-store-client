import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBorrowsAction } from "../../features/borrow/borrowAction";
import { UserLayout } from "../../components/layout/UserLayout";
import { BorrowTable } from "./BorrowTable";

const MyBorrows = () => {
  const dispatch = useDispatch();
  const { borrows } = useSelector((state) => state.borrowInfo);

  useEffect(() => {
    dispatch(getAllBorrowsAction());
  }, [dispatch]);

  return (
    <UserLayout pageTitle={"All Borrows"}>
      <BorrowTable borrows={borrows} />
    </UserLayout>
  );
};

export default MyBorrows;
