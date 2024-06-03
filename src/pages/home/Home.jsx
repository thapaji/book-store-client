import React, { useState } from "react";
import { DefaultLayout } from "../../components/layout/DefaultLayout";
import { CustomCarousel } from "../../components/customCarousel/CustomCarousel";
import { Col, Container, Form, Row } from "react-bootstrap";
import { CustomCard } from "../../components/customCard/CustomCard";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const { books } = useSelector((state) => state.bookInfo);
  const [searchedBooks, setSearchedBooks] = useState([]);

  useEffect(() => {
    setSearchedBooks(books);
  }, [books]);

  const handleSearch = (e) => {
    const { value } = e.target;
    // const arg = books.filter(({ title }) => title.toLowerCase().includes(value.toLowerCase()));
    setSearchedBooks(
      books.filter(({ title }) => title.toLowerCase().includes(value.toLowerCase()))
    );
  };

  return (
    <DefaultLayout>
      <CustomCarousel />
      {/******************* book list **************/}
      <Container className="mt-5">
        <Row>
          <Col>
            <label htmlFor="">{searchedBooks.length} books found!!</label>
          </Col>
          <Col lg={3}>
            <div>
              <Form.Control onChange={handleSearch} placeholder="search by book name .." />
            </div>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col className="d-flex gap-2 flex-wrap">
            {searchedBooks.map((book) => (
              <Link key={book._id} to={"/book/" + book._id}>
                <CustomCard key={book._id} {...book} />
              </Link>
            ))}
          </Col>
        </Row>
      </Container>
    </DefaultLayout>
  );
};

export default Home;
