import React from "react";
import { DefaultLayout } from "../../components/layout/DefaultLayout";
import { Link } from "react-router-dom";
import OtherServices from "../../components/services/OtherServices";
import { Parallax } from "react-parallax";
import { Container } from "react-bootstrap";

const BookRentals = () => {
  const bookImage =
    "https://images.unsplash.com/photo-1512508561942-18fbe6d5d0cf?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <DefaultLayout pageTitle="📚 Book Rentals">
      <Parallax bgImage={bookImage} strength={500}>
        <div style={{ height: 700 }}></div>
      </Parallax>
      <Container>
        <p className="service-description">
          Rent books for a specified period and enjoy reading at your convenience. Dive into our
          extensive collection of novels, textbooks, and more!
        </p>
        <p>
          Explore our{" "}
          <Link to="/categories" className="link-highlight">
            categories
          </Link>{" "}
          to find the perfect book for your next adventure.
        </p>
        <h2>How It Works:</h2>
        <ol>
          <li>Select the book you want to rent.</li>
          <li>Choose your rental period.</li>
          <li>Enjoy reading and return it when you're done!</li>
        </ol>
        <p>
          For more information, visit our{" "}
          <Link to="/contact" className="link-highlight">
            Contact Us
          </Link>{" "}
          page!
        </p>
      </Container>
      <OtherServices />
    </DefaultLayout>
  );
};

export default BookRentals;
