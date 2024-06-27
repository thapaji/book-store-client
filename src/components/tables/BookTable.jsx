import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row, Spinner, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteBookAction,
  getAllBooksAction,
  updateBookAction,
} from "../../features/books/bookAction";
import { Link, useNavigate } from "react-router-dom";
import { FaChevronDown, FaPlus } from "react-icons/fa";
import { AddStockModel } from "../../components/customModel/AddStockModel";
import ConfirmModal from "../customModel/ConfirmModal";

export const BookTable = () => {
  const dispatch = useDispatch();
  const isPrivate = true;
  const { books } = useSelector((state) => state.bookInfo);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [clickedBook, setClickedBook] = useState({});
  const [bookIdToDelete, setBookIdToDelete] = useState("");

  useEffect(() => {
    dispatch(getAllBooksAction(isPrivate));
  }, [dispatch]);

  const handleToggle = ({ __v, createdAt, updatedAt, ...rest }) => {
    rest.status = rest.status === "inactive" ? "active" : "inactive";
    dispatch(updateBookAction(rest));
  };

  const handleModalShow = (book) => {
    setShow(true);
    setClickedBook(book);
  };

  const handleDelete = (book) => {
    setShowConfirm(true);
    setBookIdToDelete(book._id);
  };

  const handleConfirmDelete = () => {
    dispatch(deleteBookAction(bookIdToDelete));
    setBookIdToDelete("");
  };

  return (
    <>
      <Row>
        <Col>{books.length} books found</Col>
        <Col>
          {" "}
          <input type="text" className="form-control" placeholder="Search" />
        </Col>
        <Col className="text-end">
          <Link to="/admin/books/new">
            <Button variant="primary">
              <FaPlus />
            </Button>
          </Link>
        </Col>
      </Row>
      <hr />
      <Row>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Thumbnail</th>
              <th>Book</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, i) => (
              <tr key={book._id}>
                <td>{i + 1}</td>
                <td>
                  <img src={book.thumbnail} alt="book" width="70px" />
                </td>
                <td>
                  <h2>{book.title}</h2>
                  <div>{book.author}</div>
                  <div>{book.publishedYear}</div>
                  <div>
                    Status:
                    <Form.Check
                      type="switch"
                      label={book.status === "active" ? "Active" : "Inactive"}
                      onChange={() => handleToggle(book)}
                      checked={book.status === "active"}
                      className={book.status === "active" ? "text-success" : "text-danger"}
                    />
                  </div>
                </td>
                <td>
                  <div className="hover-container">
                    <div className="hover-trigger">
                      <Button>
                        Actions <FaChevronDown />
                      </Button>
                    </div>
                    <div className="hover-content">
                      <div className="d-grid">
                        <Button
                          variant="outline-primary"
                          onClick={() => navigate(`/admin/book/edit/${book._id}`)}
                        >
                          Edit
                        </Button>
                      </div>
                      <div className="d-grid">
                        <Button
                          variant="outline-success"
                          onClick={() => {
                            handleModalShow(book);
                          }}
                        >
                          Stock
                        </Button>
                      </div>
                      <div className="d-grid">
                        <Button
                          variant="outline-danger"
                          onClick={() => {
                            handleDelete(book);
                          }}
                        >
                          Delete
                        </Button>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>
      <AddStockModel show={show} setShow={setShow} clickedBook={clickedBook} />
      <ConfirmModal
        show={showConfirm}
        setShow={setShowConfirm}
        onConfirm={handleConfirmDelete}
        message="Are you sure you want to delete this book?"
      />
    </>
  );
};
