import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Container } from "react-bootstrap";

export const DefaultLayout = ({ children, pageTitle }) => {
  return (
    <div>
      <Header />
      <Container>
        <div className="p-2">{pageTitle}</div>
        <main className="main">{children}</main>
      </Container>

      <Footer />
    </div>
  );
};
