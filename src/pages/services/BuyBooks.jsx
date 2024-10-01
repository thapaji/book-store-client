import React from "react";
import { DefaultLayout } from "../../components/layout/DefaultLayout";
import { Link } from "react-router-dom";
import { Parallax } from "react-parallax";
import { Container } from "react-bootstrap";
import OtherServices from "../../components/services/OtherServices";

const BuyBooks = () => {
  const bookImage =
    "https://images.unsplash.com/photo-1481238953635-527ec75022ba?q=80&w=1688&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <DefaultLayout pageTitle="📚 Buy Books">
      <Parallax bgImage={bookImage} strength={500}>
        <div style={{ height: 700 }}></div>
      </Parallax>

      <Container className="my-5">
        <p className="service-description">
          Discover a wide range of books available for purchase! Whether you're looking for
          bestsellers, classic literature, or educational materials, we have something for everyone.
        </p>

        <h2>Why Buy From Us?</h2>
        <ul>
          <li>
            <strong>Curated Selection:</strong> Our collection features handpicked titles across
            various genres.
          </li>
          <li>
            <strong>Competitive Pricing:</strong> Enjoy great deals and discounts on your favorite
            books.
          </li>
          <li>
            <strong>Fast Shipping:</strong> Get your books delivered to your doorstep quickly and
            safely.
          </li>
          <li>
            <strong>Secure Payments:</strong> Shop with confidence through our secure payment
            options.
          </li>
        </ul>

        <h2>How to Purchase:</h2>
        <ol>
          <li>
            Browse our{" "}
            <Link to="/categories" className="link-highlight">
              categories
            </Link>{" "}
            to find the books you want.
          </li>
          <li>Add your selected books to your shopping cart.</li>
          <li>Proceed to checkout and complete your purchase.</li>
          <li>Receive your books and start reading!</li>
        </ol>

        <h2>Explore More:</h2>
        <p>
          For the latest releases and recommendations, visit our{" "}
          <Link to="/news" className="link-highlight">
            News
          </Link>{" "}
          page!
        </p>

        <h2>Need Help?</h2>
        <p>
          If you have questions about your order or our services, please reach out through our{" "}
          <Link to="/contact" className="link-highlight">
            Contact Us
          </Link>{" "}
          page for assistance.
        </p>
      </Container>

      <OtherServices />
    </DefaultLayout>
  );
};

export default BuyBooks;
