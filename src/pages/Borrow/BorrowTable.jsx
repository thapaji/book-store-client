import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { returnBorrowAction } from "../../features/borrow/borrowAction";
import { useDispatch, useSelector } from "react-redux";
import ReviewModal from "../../components/customModel/ReviewModal";
import { getReviews } from "../../features/review/reviewAction";

export const BorrowTable = ({ borrows = [], page = "" }) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [selectedBookId, setSelectedBookId] = useState(null);

  const { allReviews } = useSelector((state) => state.reviewInfo);

  useEffect(() => {
    dispatch(getReviews(true, true));
  }, [dispatch]);

  const handleShow = (bookId) => {
    setSelectedBookId(bookId);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedBookId(null);
  };

  const userHasReviewedBook = (bookId) => {
    return allReviews.some((review) => review.bookId === bookId);
  };

  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Thumbnail</th>
            <th>Book Details</th>
            <th>Borrow Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {borrows.map((borrow, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>
                <img src={borrow.bookId.thumbnail} alt={borrow.bookId.title} />
              </td>
              <td>
                <h2>{borrow.bookId.title}</h2>
                <p>Author: {borrow.bookId.author}</p>
                <p>Category: {borrow.bookId.category}</p>
              </td>
              <td>{borrow.createdAt.slice(0, 10)}</td>
              <td>
                {!borrow.isReturned ? (
                  <Button variant="warning" onClick={() => dispatch(returnBorrowAction({ _id: borrow._id, bookId: borrow.bookId }))}>
                    Return Book
                  </Button>
                ) : (
                  <div>
                    <p>Returned</p>
                    {page === "myBooks" && !userHasReviewedBook(borrow.bookId._id) && (
                      <Button variant="outline-success" onClick={() => handleShow(borrow.bookId)}>
                        Leave a Review
                      </Button>
                    )}
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <ReviewModal show={showModal} handleClose={handleClose} bookId={selectedBookId} />
    </>
  );
};
