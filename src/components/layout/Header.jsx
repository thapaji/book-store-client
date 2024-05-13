import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export const Header = () => {
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
              <i className="fa-solid fa-house"></i>
              Home
            </Link>
            <Link className="nav-link" to="/signin">
              <i className="fa-solid fa-arrow-right"></i>
              Sign In
            </Link>
            <Link className="nav-link" to="/signup">
              <i className="fa-solid fa-user"></i>Sign Up
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
