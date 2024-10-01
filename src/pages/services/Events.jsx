import React from "react";
import { DefaultLayout } from "../../components/layout/DefaultLayout";
import { Link } from "react-router-dom";
import { Parallax } from "react-parallax";
import { Container } from "react-bootstrap";
import OtherServices from "../../components/services/OtherServices";

const Events = () => {
  const eventsImage =
    "https://images.unsplash.com/photo-1712903276879-9de15f1b9e81?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <DefaultLayout pageTitle="🎉 Events">
      <Parallax bgImage={eventsImage} strength={500}>
        <div style={{ height: 700 }}></div>
      </Parallax>

      <Container className="my-5">
        <p className="service-description">
          Join us for exciting events that bring book lovers together! From author signings to
          reading workshops, there’s something for everyone.
        </p>

        <h2>Upcoming Events:</h2>
        <ul className="events-list">
          <li>
            <strong>Author Meet & Greet:</strong> Join us for a special event with bestselling
            author Jane Doe on <em>October 15, 2024</em>. Get your books signed and ask questions!
          </li>
          <li>
            <strong>Book Club Meeting:</strong> Our monthly book club meets on{" "}
            <em>October 20, 2024</em>. This month’s pick is "The Great Adventure." Join us for a
            lively discussion!
          </li>
          <li>
            <strong>Reading Workshop:</strong> Learn tips and tricks to enhance your reading skills
            on <em>October 25, 2024</em>. Perfect for all ages!
          </li>
        </ul>

        <h2>Why Attend Our Events?</h2>
        <ul className="benefits-list">
          <li>📚 Network with fellow book enthusiasts.</li>
          <li>✍️ Engage directly with authors and industry professionals.</li>
          <li>🎉 Participate in fun activities and giveaways.</li>
          <li>🤝 Learn and share insights in a friendly environment.</li>
        </ul>

        <h2>How to Register:</h2>
        <p>
          Interested in joining an event? Click on the event name above to register, or visit our{" "}
          <Link to="/events" className="link-highlight">
            Events Page
          </Link>{" "}
          for more details.
        </p>

        <h2>Stay Updated:</h2>
        <p>
          Follow us on our{" "}
          <Link to="/social-media" className="link-highlight">
            social media
          </Link>{" "}
          channels for the latest news and updates on upcoming events!
        </p>
      </Container>

      <OtherServices />
    </DefaultLayout>
  );
};

export default Events;
