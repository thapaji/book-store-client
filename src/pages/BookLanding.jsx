import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { DefaultLayout } from "../components/layout/DefaultLayout";
import { Button, Col, Nav, Row, Tab, Tabs } from "react-bootstrap";
import { ReviewBlock } from "../components/customCard/ReviewBlock";

const BookLanding = () => {
  const { _id } = useParams();

  const { books } = useSelector((state) => state.bookInfo);
  const book = books.find((book) => book._id === _id);

  return (
    <DefaultLayout>
      <Row>
        <Col md={6}>
          <img src={book.thumbnail} alt="book" style={{ maxWidth: "450px" }} />
        </Col>
        <Col md={6} className="col">
          <h1>{book.title}</h1>
          <p>
            {book.author} - {book.publishedYear}
          </p>
          <p>******</p>
          <p>{book.description.slice(0, 50)}...</p>
          <Button variant="warning">Borrow Book Now</Button>
        </Col>
      </Row>
      <Row className="mt-5">
        <Tabs defaultActiveKey="description">
          <Tab eventKey="description" title="Description">
            <div className="p-3">
              <h3>Description</h3>
              <p>{book.description}</p>
            </div>
          </Tab>
          <Tab eventKey="reviews" title="Reviews">
            <div className="p-3">
              <h3>Reviews</h3>
              <ReviewBlock />
            </div>
          </Tab>
        </Tabs>
      </Row>
    </DefaultLayout>
  );
};

export default BookLanding;
