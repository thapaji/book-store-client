import React from "react";
import { AuthRoute } from "../auth/AuthRoute";
import { Header } from "./Header";
import { Col, Container, Row } from "react-bootstrap";
import { Footer } from "./Footer";
import { UserSideBar } from "./UserSideBar";
import { useSelector } from "react-redux";

export const UserLayout = ({ children, pageTitle }) => {
  const { user } = useSelector((state) => state.userInfo);

  return (
    <AuthRoute>
      <div>
        <Header />
        <Container fluid>
          <Row>
            <Col xs={2} className="shadow-lg p-4">
              <div>
                Welcome <h3>{user.fname + " " + user.lname}</h3>
              </div>

              <UserSideBar />
            </Col>
            <Col>
              <div className="p-2">{pageTitle}</div>
              <hr />
              <main className="main mb-3">{children}</main>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    </AuthRoute>
  );
};
