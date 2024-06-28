import React from "react";
import { UserLayout } from "../../components/layout/UserLayout";
import { UserTable } from "../../components/tables/UserTable";

const Students = () => {
  return (
    <UserLayout pageTitle="Student List">
      <UserTable />
    </UserLayout>
  );
};

export default Students;
