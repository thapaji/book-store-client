import React, { useEffect } from "react";
import { UserLayout } from "../../components/layout/UserLayout";
import { useDispatch, useSelector } from "react-redux";
import { getReviews, updateReviewAction } from "../../features/review/reviewAction";
import { Button, Table } from "react-bootstrap";
import { Stars } from "../../components/stars/Stars";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";

const isPrivate = true;

const Reviews = () => {
  const { allReviews } = useSelector((state) => state.reviewInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReviews(isPrivate));
  }, [dispatch]);

  const handleOnSwitchChange = (e) => {
    const { checked, value } = e.target;

    if (window.confirm("Are you sure, you want to change the status?")) {
      dispatch(
        updateReviewAction({
          status: checked ? "active" : "inactive",
          _id: value,
        })
      );
    }
  };

  return (
    <UserLayout pageTitle="All Reviews List">
      <div>
        <div className="d-flex justify-content-between mb-4">
          <div>{allReviews?.length} Reviews found!</div>
        </div>
        <hr />
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Status</th>
              <th style={{ width: "33%" }}>Book</th>
              <th>User Name</th>
              <th style={{ width: "30%" }}>Review</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {allReviews.map((item, i) => (
              <tr key={item._id}>
                <td>{i + 1}</td>
                <td>
                  <Form.Check type="switch" checked={item.status === "active"} onChange={handleOnSwitchChange} value={item._id} />
                  {item.status}
                </td>
                <td>
                  <Link to={"/book/" + item.bookId._id}>
                    <h3>{item.bookId.title}</h3>
                    <img src={item.bookId.thumbnail} alt="" />
                  </Link>
                </td>
                <td>{item.userId.fname + " " + item.userId.lname}</td>
                <td>
                  <h3> {item.tilte}</h3>
                  <div>
                    <Stars stars={item.ratings} />{" "}
                  </div>
                  <div>{item.message}</div>
                </td>
                <td>
                  <Button variant="danger">Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </UserLayout>
  );
};

export default Reviews;
