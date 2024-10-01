import React from "react";
import { DefaultLayout } from "../../components/layout/DefaultLayout";
import { Link } from "react-router-dom";
import { Parallax } from "react-parallax";
import { Container } from "react-bootstrap";
import OtherServices from "../../components/services/OtherServices";

const CustomerSupport = () => {
  const supportImage =
    "https://images.unsplash.com/photo-1714079761488-e0c9b9ac4138?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <DefaultLayout pageTitle="🛠️ Customer Support">
      <Parallax bgImage={supportImage} strength={500}>
        <div style={{ height: 700 }}></div>
      </Parallax>

      <Container className="my-5">
        <p className="service-description">
          Welcome to our Customer Support section! We're here to assist you with any questions,
          concerns, or issues you may have regarding our services.
        </p>

        <h2>How Can We Help You?</h2>
        <ul className="support-options">
          <li>
            <strong>FAQs:</strong> Check out our{" "}
            <Link to="/faq" className="link-highlight">
              Frequently Asked Questions
            </Link>{" "}
            for quick answers to common queries.
          </li>
          <li>
            <strong>Contact Us:</strong> Reach out to our support team through our{" "}
            <Link to="/contact" className="link-highlight">
              Contact Form
            </Link>{" "}
            for personalized assistance.
          </li>
          <li>
            <strong>Live Chat:</strong> Use our live chat feature for immediate support during
            business hours.
          </li>
          <li>
            <strong>Support Articles:</strong> Browse our{" "}
            <Link to="/support-articles" className="link-highlight">
              Support Articles
            </Link>{" "}
            for detailed guides and troubleshooting tips.
          </li>
        </ul>

        <h2>Contact Information:</h2>
        <p>
          For direct inquiries, feel free to email us at:{" "}
          <a href="mailto:support@example.com" className="link-highlight">
            support@example.com
          </a>
        </p>
        <p>
          You can also call us at:{" "}
          <a href="tel:+1234567890" className="link-highlight">
            +1 234 567 890
          </a>
        </p>

        <h2>Feedback:</h2>
        <p>
          We value your feedback! If you have suggestions or comments on how we can improve our
          services, please let us know through our{" "}
          <Link to="/feedback" className="link-highlight">
            Feedback Form
          </Link>
          .
        </p>

        <h2>Follow Us:</h2>
        <p>
          Stay updated on the latest news and support announcements by following us on{" "}
          <Link to="/social-media" className="link-highlight">
            social media
          </Link>
          .
        </p>
      </Container>

      <OtherServices />
    </DefaultLayout>
  );
};

export default CustomerSupport;
