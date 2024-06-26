import React from "react";
import { Button, Modal } from "react-bootstrap";
import BookLanding from "../../pages/BookLanding";

export const AddStockModel = ({ show, setShow, clickedBook }) => {
  const handleModalClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleModalClose} backdrop="static" >
      <Modal.Header closeButton>
        <Modal.Title>Book: {clickedBook.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h1>Description:</h1>
        <p>{clickedBook.description}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleModalClose}>
          Close
        </Button>
        <Button variant="primary">Understood</Button>
      </Modal.Footer>
    </Modal>
  );
};
