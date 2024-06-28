import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row, Spinner, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FaChevronDown, FaPlus } from "react-icons/fa";
import ConfirmModal from "../customModel/ConfirmModal";
import { handleUserSearch } from "../../helpers/handleSearch";
import { fetchUsersAction } from "../../features/users/userAction";

export const UserTable = ({ role = "student" }) => {
  const dispatch = useDispatch();
  const isPrivate = true;
  const { users } = useSelector((state) => state.userInfo);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [searchedUsers, setSearchedUsers] = useState([]);
  const [clickedUser, setClickedUser] = useState({});
  const [userIdToDelete, setUserIdToDelete] = useState("");

  useEffect(() => {
    dispatch(fetchUsersAction(role));
    setSearchedUsers(users);
  }, [dispatch, role, users.length]);

  const handleSearch = (e) => {
    const { value } = e.target;
    handleUserSearch(users, setSearchedUsers, value);
  };

  const handleToggle = ({ __v, createdAt, updatedAt, ...rest }) => {
    rest.status = rest.status === "inactive" ? "active" : "inactive";
    // dispatch(updateUserAction(rest));
  };

  const handleModalShow = (user) => {
    setShow(true);
    setClickedUseruser(user);
  };

  const handleDelete = (user) => {
    setShowConfirm(true);
    setUserIdToDelete(user._id);
  };

  const handleConfirmDelete = () => {
    // dispatch(deleteUserAction(userIdToDelete));
    setUserIdToDelete("");
  };

  return (
    <>
      <Row>
        <Col>{searchedUsers?.length + " " + role + "s"} found</Col>
        <Col>
          {" "}
          <input
            type="text"
            className="form-control"
            placeholder="Search by User Name Email or Phone"
            onChange={handleSearch}
          />
        </Col>
        <Col className="text-end">
          <Link to="/admin/users/new">
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
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {searchedUsers?.map((user, i) => (
              <tr key={user._id}>
                <td>{i + 1}</td>
                <td>
                  <h4>{user.fname + " " + user.lname}</h4>
                </td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
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
                          onClick={() => navigate(`/admin/user/edit/${user._id}`)}
                        >
                          Edit
                        </Button>
                      </div>
                      <div className="d-grid">
                        <Button
                          variant="outline-danger"
                          onClick={() => {
                            handleDelete(user);
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
      <ConfirmModal
        show={showConfirm}
        setShow={setShowConfirm}
        onConfirm={handleConfirmDelete}
        message="Are you sure you want to delete this user?"
      />
    </>
  );
};
