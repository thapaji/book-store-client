import React from "react";
import { UserLayout } from "../../components/layout/UserLayout";
import { FilterCmp } from "../../components/filter/FilterCmp";
import { useSelector } from "react-redux";
import { Button, Col, Row } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const Authors = () => {
  const { books } = useSelector((state) => state.bookInfo);
  const authors = books.reduce((uniqueAuthors, book) => {
    if (!uniqueAuthors.includes(book.author)) {
      uniqueAuthors.push(book.author);
    }
    return uniqueAuthors;
  }, []);

  return (
    <UserLayout pageTitle="Authors">
       <Row>
        <Col>{authors.length} authors found</Col>
        <Col>
          {" "}
          <input type="text" className="form-control" placeholder="Search" />
        </Col>
        <Col className="text-end">
          <Link to="/admin/books/new">
            <Button variant="primary">
              <FaPlus />
            </Button>
          </Link>
        </Col>
      </Row>
      <hr />
      {authors.map((author, i) => (
        <FilterCmp key={i} filter={{ key: "author", value: author }} />
      ))}
    </UserLayout>
  );
};

export default Authors;
