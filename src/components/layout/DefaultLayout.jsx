import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Container } from "react-bootstrap";

export const DefaultLayout = ({ children, pageTitle }) => {
  return (
    <div>
      <Header />
      <Container fluid>
        {pageTitle && (
          <>
            {" "}
            <h1 className="text-center mt-4">{pageTitle}</h1>
            <hr />
          </>
        )}

        <main className="main">{children}</main>
      </Container>
      <Footer />
    </div>
  );
};
