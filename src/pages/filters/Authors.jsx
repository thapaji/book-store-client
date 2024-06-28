import React, { useEffect, useState } from "react";
import { UserLayout } from "../../components/layout/UserLayout";
import { FilterCmp } from "../../components/filter/FilterCmp";
import { useSelector } from "react-redux";
import { Button, Col, Row } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { handleAuthorSearch } from "../../helpers/handleSearch";

const Authors = () => {
  const { books } = useSelector((state) => state.bookInfo);
  const [authors, setAuthors] = useState([]);

  const allAuthors = books.reduce((uniqueAuthors, book) => {
    if (!uniqueAuthors.includes(book.author)) {
      uniqueAuthors.push(book.author);
    }
    return uniqueAuthors;
  }, []);


  useEffect(() => {
    setAuthors(allAuthors);
  }, []);

  const handleSearch = (e) => {
    const { value } = e.target;
    handleAuthorSearch(allAuthors, setAuthors, value);
  };

  return (
    <UserLayout pageTitle="Authors">
      <Row>
        <Col>{authors.length} authors found</Col>
        <Col>
          {" "}
          <input type="text" className="form-control" placeholder="Search for Authors" onChange={handleSearch}/>
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
