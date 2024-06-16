import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaArrowRight, FaHouse, FaUser } from "react-icons/fa6";
import { RxDashboard } from "react-icons/rx";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Header = () => {
  const { user } = useSelector((state) => state.userInfo);
  return (
    <Navbar expand="md" variant="dark" className="bg-dark">
      <Container>
        <Link className="navbar-brand" to="/">
          Book Store
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav-link" to="/">
              <FaHouse />
              Home
            </Link>
            {user?._id ? (
              <>
                <Link className="nav-link" to="/dashboard">
                  <RxDashboard />
                  <label>Dashboard</label>
                </Link>
                <Link className="nav-link" to="/signin">
                  <FaArrowRight />
                  <label>Sign Out</label>
                </Link>
              </>
            ) : (
              <>
                <Link className="nav-link" to="/signin">
                  <FaArrowRight />
                  <label>Sign In</label>
                </Link>
                <Link className="nav-link" to="/signup">
                  <FaUser />
                  <label>Create New</label>
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
