import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";
import { DefaultLayout } from "../../components/layout/DefaultLayout";
import { Button, Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import { ReviewBlock } from "../../components/customCard/ReviewBlock";
import { Stars } from "../../components/stars/Stars";
import { postNewBorrowAction } from "../../features/borrow/borrowAction";

const BookLanding = () => {
  const { _id } = useParams();
  const location = useLocation();
  const { books } = useSelector((state) => state.bookInfo);
  const book = books.find((book) => book._id === _id);
  const { user } = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();
  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    if (book?.reviews?.length) {
      const totalRating = book.reviews.reduce((acc, review) => acc + review.ratings, 0);
      const avg = totalRating / book.reviews.length;
      setAverageRating(avg);
    }
  }, [book]);

  const handleBookBorrow = () => {
    if (window.confirm("Are you sure you want to borrow this book?")) {
      dispatch(postNewBorrowAction({ bookId: book._id, bookTitle: book.title, thumbnail: book.thumbnail }));
    }
  };

  // Stock calculations
  const isOutOfStock = book?.count <= book?.borrowed;
  const remainingCopies = book?.count - book?.borrowed;

  return (
    <DefaultLayout pageTitle={"Book: " + book?.title}>
      <Container>
        <Row className="mt-4 py-4">
          <Col md={6}>
            <img src={book?.thumbnail} alt="book" style={{ width: "70%" }} />
          </Col>
          <Col md={6}>
            <Row>
              <p>
                {book?.author} - {book?.publishedYear}
              </p>
              <Stars stars={averageRating} readOnly={true} />
              <p>{book?.description.slice(0, 50)}...</p>
              <p>Remaining Copies: {remainingCopies}</p> {/* Display remaining stock */}
              {user?._id ? (
                <Button
                  variant="warning"
                  onClick={handleBookBorrow}
                  disabled={isOutOfStock} // Disable if out of stock
                >
                  {isOutOfStock ? "Out of Stock" : "Borrow Book Now"}
                </Button>
              ) : (
                <Link to="/signin" state={{ from: { location } }}>
                  <Button variant="warning">Login to borrow</Button>
                </Link>
              )}
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
                    {book.reviews?.length > 0 ? (
                      book.reviews.map((review, index) => <ReviewBlock key={index} review={review} />)
                    ) : (
                      <p>No reviews yet.</p>
                    )}
                  </div>
                </Tab>
              </Tabs>
            </Row>
          </Col>
        </Row>
      </Container>
    </DefaultLayout>
  );
};

export default BookLanding;
