import React from "react";
import { Col, Row } from "react-bootstrap";

export const ReviewBlock = () => {
  return (
    <>
      <Row className="d-flex gap-2 align-items-baseline">
        <div
          className="d-flex bg-primary rounded-pill  p-1 fw-bolder text-white justify-content-center align-items-center"
          style={{ width: "40px", height: "40px" }}
        >
          P
        </div>{" "}
        Person Name
      </Row>
      <Row>
        <Col>stats</Col> <Col>title</Col>{" "}
      </Row>
      <Row>
        <small>Date:24-04-20024</small>
      </Row>
      <Row>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eius amet eaque iste placeat,
        culpa delectus laudantium dolor illo rerum libero quidem commodi obcaecati impedit dicta in
        odit perspiciatis facere?
      </Row>
    </>
  );
};
