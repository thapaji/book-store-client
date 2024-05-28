import React, { useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllBooksAction } from "../../features/books/bookAction";
import { Link } from "react-router-dom";

export const BookTable = () => {
  const dispatch = useDispatch();
  const isPrivate = true;
  const { books } = useSelector((state) => state.bookInfo);

  useEffect(() => {
    dispatch(getAllBooksAction(isPrivate));
  }, [dispatch]);

  return (
    <>
      <div className="d-flex justify-content-between mb-4">
        <div>{books.length} books found</div>
        <div>
          <input type="text" className="form-control" />
        </div>
      </div>
      <hr />
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
                <div>{book.author}</div>
                <div className={book.status === "active" ? "text-success" : "text-danger"}>
                  Status: {book.status}
                </div>
              </td>
              <td>
                <Link to={"/admin/book/edit/" + book._id}>
                  <Button variant="warning">Edit</Button>
                </Link>
                <Button
                  variant="success"
                  style={{ display: book.status === "active" ? "none" : "" }}
                >
                  Activate
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};
