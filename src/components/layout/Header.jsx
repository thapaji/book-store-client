import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaNewspaper, FaRegListAlt, FaTools } from "react-icons/fa";
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
                <Link className="nav-link icon-link" to="/">
                  <FaHouse className="icon" />
                  <span className="link-label">Home</span>
                </Link>
                <Link className="nav-link icon-link" to="/categories">
                  <FaRegListAlt className="icon" />
                  <span className="link-label">Categories</span>
                </Link>
                <Link className="nav-link icon-link" to="/services">
                  <FaTools className="icon" />
                  <span className="link-label">Services</span>
                </Link>
                <Link className="nav-link icon-link" to="/news">
                  <FaNewspaper className="icon" />
                  <span className="link-label">News</span>
                </Link>
                <Link className="nav-link icon-link" to="/signin">
                  <FaArrowRight className="icon" />
                  <span className="link-label">Sign In</span>
                </Link>
                <Link className="nav-link icon-link" to="/signup">
                  <FaUser className="icon" />
                  <span className="link-label">Sign Up</span>
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
