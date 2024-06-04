import React from "react";
import { Button, Table } from "react-bootstrap";
import { returnBorrowAction } from "../../features/borrow/borrowAction";

export const BorrowTable = ({ borrows = [] }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Thumbnail</th>
          <th>Borrow Date</th>
          <th>Return Date</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {borrows.map((borrow, i) => (
          <tr>
            <td>{i + 1}</td>
            <td>2020-2021</td>
            <td>202020202</td>
            <td>
              <Button
                variant="success"
                onClick={() =>
                  dispatch(returnBorrowAction({ _id: borrow._id, bookId: borrow.bookId }))
                }
              >
                Return Book
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};