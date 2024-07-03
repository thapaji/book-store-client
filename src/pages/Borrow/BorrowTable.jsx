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
          <th>Title</th>
          <th>Borrow Date</th>
          <th>Return Date</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {borrows.map((borrow, i) => (
          <tr>
            <td>{i + 1}</td>
            <td>Thumbnail</td>
            <td>2020-2021</td>
            <td>{borrow.createdAt.slice(0, 10)}</td>
            <td>{borrow.returnedDate?.slice(0, 10) || "Not Returnned"}</td>
            <td>
              {!borrow.isReturned && (
                <Button
                  variant="success"
                  onClick={() =>
                    dispatch(returnBorrowAction({ _id: borrow._id, bookId: borrow.bookId }))
                  }
                >
                  Return Book
                </Button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
