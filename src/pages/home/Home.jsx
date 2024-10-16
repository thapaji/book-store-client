import React, { useEffect, useState } from "react";
import { DefaultLayout } from "../../components/layout/DefaultLayout";
import { Button, Col, Container, Form, Row, Card } from "react-bootstrap";
import { CustomCard } from "../../components/customCard/CustomCard";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getAllNewsAction } from "../../features/news/newsAction";
import { handleBookSearch } from "../../helpers/handleSearch";
import bookImg from "../../assets/books.svg";
import OtherServices from "../../components/services/OtherServices";

const Home = () => {
  const { books } = useSelector((state) => state.bookInfo);
  const { news } = useSelector((state) => state.newsInfo);
  const { user } = useSelector((state) => state.userInfo);
  const [searchedBooks, setSearchedBooks] = useState([]);
  const [searchedNews, setSearchedNews] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (news.length < 1) {
      dispatch(getAllNewsAction(true));
    }
  }, [dispatch, news.length]);

  useEffect(() => {
    setSearchedBooks(books);
    setSearchedNews(news);
  }, [books, news]);

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
                We are more than just a place to check out books. We're a vibrant community hub dedicated to enriching your life through knowledge,
                culture, and connection. We inspire lifelong learning, foster creativity, and empower our community through free access to information
                and innovative library services.
              </p>
              <div className="d-grid mt-5 pt-5">
                <Button onClick={handleSignUpClick} className="mb-3 btn-warning">
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
          <Col md={9}>
            <Row>
              <Col>
                <label htmlFor="">{searchedBooks.length} books found!!</label>
              </Col>
              <Col lg={3}>
                <div>
                  <Form.Control onChange={handleSearch} placeholder="Search by book name .." className="search-input" />
                </div>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col className="d-flex gap-2 flex-wrap justify-content-between">
                {searchedBooks.slice(0, 9).map((book) => (
                  <Link key={book._id} to={"/book/" + book._id}>
                    <CustomCard key={book._id} {...book} />
                  </Link>
                ))}
              </Col>
            </Row>
            <Row className="mt-5">
              <Link to="/contact" className="btn btn-info">
                Contact Us
              </Link>
            </Row>
          </Col>
          <Col className="ms-5">
            <h2>Latest News</h2>
            <hr />
            <Row>
              {searchedNews.slice(0, 4).map((article) => (
                <Card className="mb-4" key={article._id}>
                  <Card.Img variant="top" src={article.imageUrl} alt={article.title} style={{ height: "200px", objectFit: "cover" }} />
                  <Card.Body>
                    <Card.Title>{article.title}</Card.Title>
                    <Card.Text>{article.description}</Card.Text>
                    <Card.Text className="text-muted"></Card.Text>
                    <Link to={`/news/${article._id}`} className="btn btn-warning">
                      Read More
                    </Link>
                  </Card.Body>
                </Card>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
      <OtherServices />
    </DefaultLayout>
  );
};

export default Home;
