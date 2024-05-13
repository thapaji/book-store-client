import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
};
