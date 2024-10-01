import React from "react";
import { DefaultLayout } from "../../components/layout/DefaultLayout";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";

// Sample data for demonstration purposes
const newsArticles = [
  {
    id: 1,
    title: "New Book Release: 'The Art of Coding'",
    description:
      "Discover the latest in programming techniques with our new release. Available now in eBook format. This book covers modern programming practices, best coding principles, and effective techniques for writing efficient and clean code. A must-read for aspiring and experienced developers alike.",
    imageUrl: "https://images.unsplash.com/photo-1528747008803-2abf548e860e?w=870&h=500&fit=crop",
    date: "October 1, 2024",
    content: `
      The world of coding is constantly evolving, and staying updated with the latest trends is essential for every developer. 
      'The Art of Coding' delves deep into modern programming languages, frameworks, and tools that make the coding process more efficient.
      Whether you're a seasoned programmer or a beginner, this book offers valuable insights and practical advice for improving your skills.
      \n\n
      In this book, you'll explore:
      \n
      - The evolution of coding practices over the past decade.
      - Best practices for writing clean and maintainable code.
      - An in-depth look at modern programming languages like Python, JavaScript, and Go.
      - Expert tips from industry leaders on how to stay relevant in a fast-changing tech environment.
      \n\n
      Get your copy today and take the next step in mastering the art of coding!
    `,
  },
  {
    id: 2,
    title: "Upcoming Author Event: Meet Jane Doe",
    description:
      "Join us for an exclusive author event featuring Jane Doe. Limited seats available! Learn more about her inspirations, writing process, and upcoming projects.",
    imageUrl: "https://images.unsplash.com/photo-1533670808208-5a6a1822f91b?w=870&h=500&fit=crop",
    date: "September 28, 2024",
    content: `
      We're thrilled to announce an exclusive event with the renowned author, Jane Doe. She has captivated readers with her compelling storytelling and 
      thought-provoking themes. This event offers you a unique opportunity to meet Jane in person, ask her questions, and gain insights into her writing journey.
      \n\n
      Event Details:
      \n
      - Date: October 15, 2024
      - Time: 6:00 PM - 8:00 PM
      - Venue: The Bookstore Auditorium
      \n\n
      Don't miss this chance to interact with one of the most celebrated authors of our time. 
      Seats are limited, so be sure to book your spot early!
    `,
  },
  // More articles can be added here
];

const NewsDetailPage = () => {
  const { id } = useParams();
  const article = newsArticles.find((news) => news.id === parseInt(id));

  if (!article) {
    return (
      <DefaultLayout pageTitle="News Not Found">
        <Container>
          <Row>
            <Col className="text-center">
              <h2>News Article Not Found</h2>
              <p>Sorry, the news article you are looking for does not exist.</p>
            </Col>
          </Row>
        </Container>
      </DefaultLayout>
    );
  }

  return (
    <DefaultLayout pageTitle={article.title}>
      <Container className="my-5">
        <Row>
          <Col md={12} className="text-center mb-4">
            <img
              src={article.imageUrl}
              alt={article.title}
              style={{ maxWidth: "100%", height: "auto" }}
            />
            <h1 className="my-4">{article.title}</h1>
            <p className="text-muted">{article.date}</p>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <p className="lead">{article.description}</p>
            <hr />
            <p>{article.content}</p>
          </Col>
        </Row>
      </Container>
    </DefaultLayout>
  );
};

export default NewsDetailPage;
