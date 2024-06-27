import React from "react";
import { Modal, Button } from "react-bootstrap";

const ConfirmModal = ({ show, setShow, onConfirm, message }) => {
  return (
    <Modal
      show={show}
      onHide={() => {
        setShow(false);
      }}
      backdrop="static"
    >
      <Modal.Header closeButton>
        <Modal.Title>Confirmation</Modal.Title>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
      <Modal.Footer>
        <Button
          variant="success"
          onClick={() => {
            onConfirm();
            setShow(false);
          }}
        >
          Confirm
        </Button>
        <Button
          variant="danger"
          onClick={() => {
            setShow(false);
          }}
        >
          Decline
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmModal;
