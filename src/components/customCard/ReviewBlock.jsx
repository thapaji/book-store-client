import React from "react";
import { Col, Row } from "react-bootstrap";
import { Stars } from "../stars/Stars";

export const ReviewBlock = ({ review }) => {
  return (
    <>
      <Row className="d-flex gap-2 align-items-baseline">
        <Col>
          <div
            className="d-flex bg-primary rounded-pill  p-1 fw-bolder text-white justify-content-center align-items-center"
            style={{ width: "40px", height: "40px" }}
          >
            P
          </div>
        </Col>
        <Col>{review.userId}</Col>
      </Row>
      <Row>
        <Stars stars={review.ratings} readOnly={true} /> <Col>title</Col>{" "}
      </Row>
      <Row>
        <small>{review.createdAt.slice(0, 10)}</small>
      </Row>
      <Row>{review.message}</Row>
    </>
  );
};
