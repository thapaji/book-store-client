import React from "react";
import { DefaultLayout } from "../../components/layout/DefaultLayout";
import { Link } from "react-router-dom";
import { Parallax } from "react-parallax";
import { Container } from "react-bootstrap";
import OtherServices from "../../components/services/OtherServices";

const OrderBooks = () => {
  const bookImage =
    "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <DefaultLayout pageTitle="📚 Order Books">
      <Parallax bgImage={bookImage} strength={500}>
        <div style={{ height: 700 }}></div>
      </Parallax>

      <Container className="my-5">
        <p className="service-description">
          Ordering books has never been easier! Whether you're looking for the latest releases,
          classic novels, or educational texts, we have you covered. Experience a hassle-free
          ordering process that brings your favorite books right to your doorstep.
        </p>

        <h2>Why Order From Us?</h2>
        <ul>
          <li>
            <strong>Diverse Selection:</strong> Choose from a vast range of titles across various
            genres.
          </li>
          <li>
            <strong>Easy Ordering:</strong> Our simple ordering process makes it quick and
            convenient.
          </li>
          <li>
            <strong>Fast Delivery:</strong> Enjoy speedy delivery to ensure you get your books as
            soon as possible.
          </li>
          <li>
            <strong>Customer Support:</strong> Our dedicated support team is here to assist you with
            any questions.
          </li>
        </ul>

        <h2>How to Order:</h2>
        <ol>
          <li>
            Browse our{" "}
            <Link to="/categories" className="link-highlight">
              categories
            </Link>{" "}
            to find the books you want.
          </li>
          <li>Add the selected titles to your cart.</li>
          <li>Proceed to checkout and fill in your shipping details.</li>
          <li>Complete your purchase and wait for your books to arrive!</li>
        </ol>

        <h2>Explore More:</h2>
        <p>
          Stay updated with our latest releases and special offers by visiting our{" "}
          <Link to="/news" className="link-highlight">
            News
          </Link>{" "}
          page!
        </p>

        <h2>Need Assistance?</h2>
        <p>
          If you have any questions about your order or our services, don't hesitate to contact us
          through our{" "}
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

export default OrderBooks;
