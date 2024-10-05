import React from "react";
import { UserLayout } from "../../components/layout/UserLayout";
import { MessageTable } from "../../components/tables/MessageTable";

const Messages = () => {
  return (
    <UserLayout pageTitle={"Message List"}>
      <MessageTable />
    </UserLayout>
  );
};

export default Messages;
