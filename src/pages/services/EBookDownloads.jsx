import React from "react";
import { DefaultLayout } from "../../components/layout/DefaultLayout";
import { Link } from "react-router-dom";
import { Parallax } from "react-parallax";
import { Container } from "react-bootstrap";
import OtherServices from "../../components/services/OtherServices";

const EBookDownloads = () => {
  const bookImage =
    "https://images.unsplash.com/photo-1534258770914-022a9ce4e0ed?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <DefaultLayout pageTitle="📖 E-Book Downloads">
      <Parallax bgImage={bookImage} strength={500}>
        <div style={{ height: 700 }}></div>
      </Parallax>

      <Container className="my-5">
        <p className="service-description">
          Welcome to our E-Book Downloads section! Here, you can download e-books directly from our
          store and read them on any device. Enjoy the convenience of having your favorite titles
          available at your fingertips!
        </p>
        <h2>Benefits of E-Books:</h2>
        <ul className="benefits-list">
          <li>Instant access to your favorite titles.</li>
          <li>Read anywhere, anytime on your preferred device.</li>
          <li>Adjustable font sizes for a personalized reading experience.</li>
          <li>Search functionality to find content quickly.</li>
        </ul>

        <h2>How to Download:</h2>
        <ol className="download-steps">
          <li>Browse our e-book catalog to find a title you love.</li>
          <li>Click the "Download" button on the book page.</li>
          <li>Open the downloaded file on your device and enjoy reading!</li>
        </ol>

        <h2>Explore More:</h2>
        <p>
          Check out our{" "}
          <Link to="/categories" className="link-highlight">
            Categories
          </Link>{" "}
          for a variety of genres or visit our{" "}
          <Link to="/news" className="link-highlight">
            News
          </Link>{" "}
          page for updates on the latest releases!
        </p>
        <p>
          If you have any questions, feel free to reach out through our{" "}
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

export default EBookDownloads;
