import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Row, Col, Form } from "react-bootstrap";
import { DefaultLayout } from "../../components/layout/DefaultLayout";
import { CustomCard } from "../../components/customCard/CustomCard";

const CategoryDetailPage = () => {
  const { category } = useParams(); // Get category from URL
  const { books } = useSelector((state) => state.bookInfo);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter books based on category and search term
  useEffect(() => {
    const booksInCategory = books.filter((book) => book.category === category);
    if (searchTerm) {
      const searchedBooks = booksInCategory.filter((book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredBooks(searchedBooks);
    } else {
      setFilteredBooks(booksInCategory);
    }
  }, [books, category, searchTerm]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <DefaultLayout pageTitle={category + " Books"}>
      <Row className="mt-4">
        <Col>
          {filteredBooks.length} books found in {category}
        </Col>
        <Col>
          <Form.Control
            type="text"
            placeholder="Search books by title"
            onChange={handleSearch}
            value={searchTerm}
          />
        </Col>
      </Row>
      <hr />
      <Row className="d-flex flex-wrap mb-4">
        {filteredBooks.map((book) => (
          <Col key={book._id} md={3} className="mt-4">
            <CustomCard {...book} />
          </Col>
        ))}
      </Row>
    </DefaultLayout>
  );
};

export default CategoryDetailPage;
