import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Container } from "react-bootstrap";

export const DefaultLayout = ({ children, pageTitle }) => {
  return (
    <div>
      <Header />
      <Container>
        <main className="main">{children}</main>
      </Container>
      <Footer />
    </div>
  );
};
