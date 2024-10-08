import React from "react";
import { Button, Container, Row, Col, Image } from "react-bootstrap";
import { useSelector } from "react-redux";
import { UserLayout } from "../../components/layout/UserLayout";

const Profile = () => {
  const { user } = useSelector((state) => state.userInfo);

  return (
    <UserLayout pageTitle="My Profile">
      <Container fluid className="profile-container py-4">
        <Row className="justify-content-center">
          <Col>
            <Row>
              <Col md={4} className="text-center mb-4">
                <Image
                  src={`https://ui-avatars.com/api/?name=${user.fname}+${user.lname}&size=128`}
                  roundedCircle
                  fluid
                  alt="User Avatar"
                  className="mb-3"
                />
                <h2>
                  {user.fname} {user.lname}
                </h2>
              </Col>

              <Col className="mt-4">
                <h4 className="mb-3">Your Information</h4>
                <Row className="mb-2">
                  <Col xs={4}>
                    <strong>Phone:</strong>
                  </Col>
                  <Col xs={8}>{user.phone || "Not Provided"}</Col>
                </Row>
                <Row className="mb-2">
                  <Col xs={4}>
                    <strong>Email:</strong>
                  </Col>
                  <Col xs={8}>{user.email}</Col>
                </Row>
                <Row className="mb-2">
                  <Col xs={4}>
                    <strong>Role:</strong>
                  </Col>
                  <Col xs={8}>{user.role}</Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>

        <div className="text-center mt-4">
          <Row>
            <Col md={6} className="mb-2 d-grid">
              <Button variant="warning">Edit Profile</Button>
            </Col>
            <Col md={6} className="mb-2 d-grid">
              <Button variant="secondary">Change Password</Button>
            </Col>
          </Row>
        </div>
      </Container>
    </UserLayout>
  );
};

export default Profile;
