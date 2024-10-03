import React from "react";
import { UserLayout } from "../../components/layout/UserLayout";
import NewsTable from "../../components/tables/NewsTable";

const NewsList = () => {
  return (
    <UserLayout pageTitle={"News List"}>
      <NewsTable />
    </UserLayout>
  );
};

export default NewsList;
