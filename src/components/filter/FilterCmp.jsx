import React from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CustomCard } from "../customCard/CustomCard";

export const FilterCmp = ({ filter }) => {
  const { books } = useSelector((state) => state.bookInfo);
  const selectedBooks = books.filter((book) => book[filter.key]?.includes(filter.value));
  return (
    <Row className="mb-4">
      <h4>{filter.value}</h4>
      <Col className="d-flex gap-2 flex-wrap">
        {selectedBooks.map((book) => (
          <Link key={book._id} to={"/book/" + book._id}>
            <CustomCard key={book._id} {...book} />
          </Link>
        ))}
      </Col>
    </Row>
  );
};
