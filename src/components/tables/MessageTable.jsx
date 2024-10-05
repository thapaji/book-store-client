import React, { useEffect, useState } from "react";
import { Button, Col, Row, Table, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllContactAction, markAsReadAction } from "../../features/contact/contactAction";

export const MessageTable = () => {
  const dispatch = useDispatch();
  const { contacts } = useSelector((state) => state.contactInfo);
  const [searchedContacts, setSearchedContacts] = useState([]);
  const [clickedContact, setClickedContact] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(getAllContactAction());
  }, [dispatch]);

  useEffect(() => {
    setSearchedContacts(contacts);
  }, [contacts]);

  const handleModalShow = (contact) => {
    setClickedContact(contact);
    setShowModal(true);
    const { _id, status, ...rest } = contact;

    if (!contact.isRead) {
      dispatch(markAsReadAction(_id, { ...rest, status: "read" }));
    }
  };

  const handleClose = () => {
    setShowModal(false);
    setClickedContact(null);
  };

  return (
    <>
      <Row>
        <Col>{contacts.length} messages found</Col>
        <Col>
          <input
            type="text"
            className="form-control"
            placeholder="Search by Contact Name"
            // handle search functionality here
          />
        </Col>
      </Row>
      <hr />
      <Row>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {searchedContacts.map((contact, i) => (
              <tr
                key={contact._id}
                style={{
                  fontWeight: contact.status === "read" ? "normal" : "bold",
                  color: contact.isRead ? "black" : "green",
                  cursor: "pointer", // Cursor style added here
                }}
                onClick={() => handleModalShow(contact)}
              >
                <td>{i + 1}</td>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.submittedAt.slice(0, 10)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>

      {/* Message Modal */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Message Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {clickedContact && (
            <>
              <p>
                <strong>Name:</strong> {clickedContact.name}
              </p>
              <p>
                <strong>Email:</strong> {clickedContact.email}
              </p>
              <p>
                <strong>Sent At:</strong> {clickedContact.submittedAt.slice(0, 10)}
              </p>
              <p>
                <strong>Message:</strong> {clickedContact.message}
              </p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
