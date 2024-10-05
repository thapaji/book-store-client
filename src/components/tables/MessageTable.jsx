import React, { useEffect, useState } from "react";
import { Button, Col, Row, Table, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllContactAction, markAsReadAction, deleteContactAction } from "../../features/contact/contactAction";
import ConfirmModal from "../customModel/ConfirmModal";
import { FaTrash } from "react-icons/fa";
import { handleMessageSearch } from "../../helpers/handleSearch";

export const MessageTable = () => {
  const dispatch = useDispatch();
  const { contacts } = useSelector((state) => state.contactInfo);
  const [searchedContacts, setSearchedContacts] = useState([]);
  const [clickedContact, setClickedContact] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [contactIdToDelete, setContactIdToDelete] = useState("");

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

  const handleSearch = (e) => {
    const { value } = e.target;
    handleMessageSearch(contacts, setSearchedContacts, value);
  };

  const handleClose = () => {
    setShowModal(false);
    setClickedContact(null);
  };

  const handleDelete = (contact) => {
    setContactIdToDelete(contact._id);
    setShowConfirm(true);
  };

  const handleConfirmDelete = () => {
    if (contactIdToDelete) {
      dispatch(deleteContactAction(contactIdToDelete));
      setContactIdToDelete("");
    }
  };

  return (
    <>
      <Row>
        <Col>{contacts.length} messages found</Col>
        <Col>
          <input type="text" className="form-control" placeholder="Search by Name, Email, Date" onChange={handleSearch} />
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
                  cursor: "pointer",
                }}
              >
                <td onClick={() => handleModalShow(contact)}>{i + 1}</td>
                <td onClick={() => handleModalShow(contact)}>{contact.name}</td>
                <td onClick={() => handleModalShow(contact)}>{contact.email}</td>
                <td onClick={() => handleModalShow(contact)}> {contact.submittedAt.slice(0, 10)}</td>
                <td>
                  <Button variant="outline-danger" onClick={() => handleDelete(contact)}>
                    <FaTrash />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>

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

      <ConfirmModal
        show={showConfirm}
        setShow={setShowConfirm}
        onConfirm={handleConfirmDelete}
        message="Are you sure you want to delete this message?"
      />
    </>
  );
};
