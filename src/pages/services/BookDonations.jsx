import React from "react";
import { DefaultLayout } from "../../components/layout/DefaultLayout";
import { Link } from "react-router-dom";
import { Parallax } from "react-parallax";
import { Container } from "react-bootstrap";
import OtherServices from "../../components/services/OtherServices";

const BookDonation = () => {
  const donationImage =
    "https://images.unsplash.com/photo-1666281269793-da06484657e8?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <DefaultLayout pageTitle="📚 Book Donation">
      <Parallax bgImage={donationImage} strength={500}>
        <div style={{ height: 700 }}></div>
      </Parallax>

      <Container className="my-5">
        <p className="service-description">
          Your unwanted books can change lives! Donate your books to help others discover the joy of
          reading. Join us in making a difference in our community by supporting literacy and
          education.
        </p>

        <h2>Why Donate Books?</h2>
        <ul>
          <li>
            <strong>Support Literacy:</strong> Your donation helps promote reading and education in
            the community.
          </li>
          <li>
            <strong>Reduce Waste:</strong> Give your old books a new life and prevent them from
            ending up in landfills.
          </li>
          <li>
            <strong>Make a Difference:</strong> Your contributions help provide access to books for
            those in need.
          </li>
        </ul>

        <h2>How to Donate:</h2>
        <ol>
          <li>Gather the books you want to donate.</li>
          <li>
            Visit our{" "}
            <Link to="/donation-locations" className="link-highlight">
              donation locations
            </Link>{" "}
            to find a drop-off point.
          </li>
          <li>Drop off your books during our operating hours.</li>
          <li>Feel good knowing you've helped someone discover their next favorite book!</li>
        </ol>

        <h2>Donation Guidelines:</h2>
        <p>
          Please ensure that your donations are in good condition and free from any damage. We
          accept a variety of genres, including fiction, non-fiction, textbooks, and children's
          books. For a complete list of accepted items, please visit our{" "}
          <Link to="/donation-guidelines" className="link-highlight">
            Donation Guidelines
          </Link>{" "}
          page.
        </p>

        <h2>Need More Information?</h2>
        <p>
          If you have any questions about donating books or our donation process, feel free to reach
          out through our{" "}
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

export default BookDonation;
