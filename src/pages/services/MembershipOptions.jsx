import React from "react";
import { DefaultLayout } from "../../components/layout/DefaultLayout";
import { Link } from "react-router-dom";
import { Parallax } from "react-parallax";
import { Container } from "react-bootstrap";
import OtherServices from "../../components/services/OtherServices";

const MembershipOptions = () => {
  const membershipImage =
    "https://images.unsplash.com/photo-1552508744-1696d4464960?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <DefaultLayout pageTitle="🌟 Membership Options">
      <Parallax bgImage={membershipImage} strength={500}>
        <div style={{ height: 700 }}></div>
      </Parallax>

      <Container className="my-5">
        <p className="service-description">
          Explore our membership plans for exclusive discounts and perks. Enjoy benefits like free
          rentals, exclusive events, and more!
        </p>

        <h2>Membership Benefits:</h2>
        <ul className="benefits-list">
          <li>🌟 Free Book Rentals: Enjoy unlimited free rentals on a wide selection of titles.</li>
          <li>
            🎉 Exclusive Events: Get invitations to members-only events, author signings, and
            workshops.
          </li>
          <li>💰 Discounts: Receive special discounts on e-books and merchandise in our store.</li>
          <li>
            📚 Personalized Recommendations: Get tailored book recommendations based on your reading
            preferences.
          </li>
        </ul>

        <h2>Membership Plans:</h2>
        <ol className="membership-plans">
          <li>
            <strong>Basic Membership:</strong> $9.99/month
            <ul>
              <li>Access to free rentals</li>
              <li>Exclusive member discounts</li>
            </ul>
          </li>
          <li>
            <strong>Premium Membership:</strong> $19.99/month
            <ul>
              <li>All Basic benefits</li>
              <li>Access to exclusive events</li>
              <li>Personalized book recommendations</li>
            </ul>
          </li>
          <li>
            <strong>Family Membership:</strong> $29.99/month
            <ul>
              <li>All Premium benefits for up to 4 family members</li>
              <li>Family movie nights and events</li>
            </ul>
          </li>
        </ol>

        <h2>Join Us Today!</h2>
        <p>
          Ready to start enjoying the benefits of membership? Sign up{" "}
          <Link to="/signup" className="link-highlight">
            here
          </Link>
          .
        </p>
        <p>
          Learn more about our services{" "}
          <Link to="/services" className="link-highlight">
            here
          </Link>
          .
        </p>
      </Container>

      <OtherServices />
    </DefaultLayout>
  );
};

export default MembershipOptions;
