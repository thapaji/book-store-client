import React from "react";
import { DefaultLayout } from "../../components/layout/DefaultLayout";
import { Link } from "react-router-dom";
import { Parallax } from "react-parallax";
import { Container } from "react-bootstrap";
import OtherServices from "../../components/services/OtherServices";

const BookRecommendations = () => {
  const recommendationImage =
    "https://images.unsplash.com/photo-1440778303588-435521a205bc?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <DefaultLayout pageTitle="✨ Book Recommendations">
      <Parallax bgImage={recommendationImage} strength={500}>
        <div style={{ height: 700 }}></div>
      </Parallax>

      <Container className="my-5">
        <p className="service-description">
          Get personalized book recommendations based on your reading history. Discover new authors
          and titles that match your interests!
        </p>

        <h2>How We Recommend Books:</h2>
        <p>
          Our recommendation system uses your reading history, favorite genres, and user ratings to
          suggest titles you'll love. Whether you're into fiction, non-fiction, fantasy, or
          self-help, we've got you covered!
        </p>

        <h2>Popular Genres:</h2>
        <ul className="genres-list">
          <li>Fiction</li>
          <li>Non-Fiction</li>
          <li>Science Fiction</li>
          <li>Fantasy</li>
          <li>Mystery</li>
          <li>Self-Help</li>
        </ul>

        <h2>Recommended Reads:</h2>
        <ol className="recommendations-list">
          <li>
            <strong>The Midnight Library</strong> by Matt Haig
          </li>
          <li>
            <strong>Where the Crawdads Sing</strong> by Delia Owens
          </li>
          <li>
            <strong>Becoming</strong> by Michelle Obama
          </li>
          <li>
            <strong>The Vanishing Half</strong> by Brit Bennett
          </li>
          <li>
            <strong>Atomic Habits</strong> by James Clear
          </li>
        </ol>

        <h2>Get More Insights:</h2>
        <p>
          For more insights, check our{" "}
          <Link to="/news" className="link-highlight">
            blog
          </Link>{" "}
          for trending books and author interviews!
        </p>
        <p>
          If you have any questions or need assistance, feel free to reach out through our{" "}
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

export default BookRecommendations;
