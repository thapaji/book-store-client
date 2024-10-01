import React, { useState } from "react";
import { DefaultLayout } from "../../components/layout/DefaultLayout";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { CustomCard } from "../../components/customCard/CustomCard";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import bookImg from "../../assets/books.svg";
import { handleBookSearch } from "../../helpers/handleSearch";

const Home = () => {
  const { books } = useSelector((state) => state.bookInfo);
  const { user } = useSelector((state) => state.userInfo);
  const [searchedBooks, setSearchedBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setSearchedBooks(books);
  }, [books]);

  const handleSearch = (e) => {
    const { value } = e.target;
    handleBookSearch(books, setSearchedBooks, value);
  };

  const handleSignUpClick = () => {
    navigate("/signup");
  };

  const handleSignInClick = () => {
    navigate("/signin");
  };

  return (
    <DefaultLayout>
      <Container className="mt-5">
        {!user?._id && (
          <Row className="pt-5 mb-5">
            <Col>
              <h2 className="mt-5">Read, Explore, Connect</h2>
              <p className="mt-5">
                We are more than just a place to check out books. We're a vibrant community hub
                dedicated to enriching your life through knowledge, culture, and connection. We
                inspire lifelong learning, foster creativity, and empower our community through free
                access to information and innovative library services.
              </p>
              <div className="d-grid mt-5 pt-5">
                <Button onClick={handleSignUpClick} className="mb-3">
                  Join The Community Now !!!
                </Button>
                <Button variant="link" onClick={handleSignInClick}>
                  Already a member? Sign in
                </Button>
              </div>
            </Col>
            <Col>
              <img src={bookImg} alt="book_img" />
            </Col>
          </Row>
        )}
        <Row>
          <Col>
            <label htmlFor="">{searchedBooks.length} books found!!</label>
          </Col>
          <Col lg={3}>
            <div>
              <Form.Control
                onChange={handleSearch}
                placeholder="Search by book name .."
                className="search-input"
              />
            </div>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col className="d-flex gap-2 flex-wrap justify-content-between">
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
