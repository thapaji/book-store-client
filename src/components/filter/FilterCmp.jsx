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
      <h2 className="text-center mb-4 mt-5">{filter.value}</h2>

      <Col className="d-flex gap-2 flex-wrap">
        {selectedBooks.map((book) => (
          <Link key={book._id} to={"/book/" + book._id}>
            <CustomCard key={book._id} {...book} />
          </Link>
        ))}
      </Col>
      <hr className="mt-4 mb-5" />
    </Row>
  );
};
