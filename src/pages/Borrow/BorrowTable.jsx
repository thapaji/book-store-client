import React from "react";
import { Button, Table } from "react-bootstrap";
import { returnBorrowAction } from "../../features/borrow/borrowAction";
import { useDispatch } from "react-redux";

export const BorrowTable = ({ borrows = [] }) => {
  const dispatch = useDispatch();
  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Thumbnail</th>
          <th>Book Details</th>
          <th>Borrow Date</th>
          {/* <th>Return Date</th> */}
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
                <Button
                  variant="success"
                  onClick={() =>
                    dispatch(returnBorrowAction({ _id: borrow._id, bookId: borrow.bookId }))
                  }
                >
                  Return Book
                </Button>
              ) : (
                <p>{"Returned " + borrow.returnedDate?.slice(0, 10)}</p>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
