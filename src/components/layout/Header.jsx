import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaBookReader, FaNewspaper, FaRegListAlt, FaSignInAlt, FaSignOutAlt, FaTools, FaUserPlus } from "react-icons/fa";
import { FaArrowRight, FaHouse, FaUser, FaPhone } from "react-icons/fa6"; // Added FaPhone for contact
import { RxDashboard } from "react-icons/rx";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Header = () => {
  const { user } = useSelector((state) => state.userInfo);

  const handleLogOut = () => {
    sessionStorage.removeItem("accessJWT");
    localStorage.removeItem("refreshJWT");
    dispatch(setUser({}));

    // to-do sign out from server
  };

  return (
    <Navbar expand="md" variant="dark" className="bg-dark px-3">
      <Link className="navbar-brand fs-1 text-warning" to="/">
        <FaBookReader />
        Book Store
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
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
          <Link className="nav-link icon-link" to="/contact">
            <FaPhone className="icon" />
            <span className="link-label">Contact Us</span>
          </Link>
          {user?._id ? (
            <>
              <Link className="nav-link icon-link" to="/dashboard">
                <RxDashboard className="icon" />
                <span className="link-label">Dashboard</span>
              </Link>
              <Link className="nav-link icon-link" to="/" onClick={handleLogOut}>
                <FaSignOutAlt className="icon" />
                <span className="link-label">Sign Out</span>
              </Link>
            </>
          ) : (
            <>
              <Link className="nav-link icon-link" to="/signin">
                <FaSignInAlt className="icon" />
                <span className="link-label">Sign In</span>
              </Link>
              <Link className="nav-link icon-link" to="/signup">
                <FaUserPlus className="icon" />
                <span className="link-label">Sign Up</span>
              </Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
