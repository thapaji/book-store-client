import React from "react";
import { UserLayout } from "../../components/layout/UserLayout";
import { UserTable } from "../../components/tables/UserTable";

const Admins = () => {
  return (
    <UserLayout pageTitle="Admin List">
      <UserTable role={"admin"} />
    </UserLayout>
  );
};

export default Admins;
