import React from "react";
import { UserLayout } from "../../components/layout/UserLayout";
import { BookTable } from "../../components/tables/BookTable";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const BookList = () => {
  return (
    <UserLayout pageTitle={"Book List"}>
      {/* <div className="text-end mb-5">
        
      </div> */}
      <BookTable />
    </UserLayout>
  );
};

export default BookList;
