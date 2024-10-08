import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addNewReviewAction } from "../../features/review/reviewAction";
import { Stars } from "../stars/Stars";

const ReviewModal = ({ show, handleClose, bookId }) => {
  const { user } = useSelector((state) => state.userInfo);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [ratings, setRatings] = useState(0);
  const [isEditing, setIsEditing] = useState(true);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const review = { title, message, ratings, bookId, userId: user._id };

    // Dispatch the action to add a new review
    const status = await dispatch(addNewReviewAction(review));

    // Check if status indicates success
    if (status === "success") {
      // Reset form fields
      setTitle("");
      setMessage("");
      setRatings(0);
      // Close the modal
      handleClose(true);
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Write a Review</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter review title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              readOnly={!isEditing} // Make title read-only when not editing
            />
          </Form.Group>
          <Form.Group controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter your review message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              readOnly={!isEditing} // Make message read-only when not editing
            />
          </Form.Group>
          <Form.Group controlId="formRatings">
            <Form.Label>Ratings</Form.Label>
            <Stars stars={ratings} onRate={setRatings} readOnly={!isEditing} />
          </Form.Group>
          {isEditing ? (
            <Button variant="warning" type="submit" className="mt-4">
              Submit Review
            </Button>
          ) : (
            <Button variant="secondary" onClick={handleClose} className="mt-4">
              Close
            </Button>
          )}
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ReviewModal;
