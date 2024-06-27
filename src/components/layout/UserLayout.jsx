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
            <Col sm={2} className="shadow-lg p-4">
              <div>
                Welcome <h3>{user.fname + " " + user.lname}</h3>
              </div>
              <hr />
              <div className="mt-3">
                <UserSideBar />
              </div>
            </Col>
            <Col className="p-5">
              <h3 className="">{pageTitle}</h3>
              <hr />
              <main className="user-main">{children}</main>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    </AuthRoute>
  );
};
