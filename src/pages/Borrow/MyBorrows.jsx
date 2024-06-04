import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllBorrowsAction } from "../../features/borrow/borrowAction";
import { UserLayout } from "../../components/layout/UserLayout";

const MyBorrows = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBorrowsAction());
  }, [dispatch]);
  return <UserLayout>
    
  </UserLayout>;
};

export default MyBorrows;
