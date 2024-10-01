import React from "react";
import { DefaultLayout } from "../../components/layout/DefaultLayout";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const NewsPage = () => {
  // Updated news articles data with 6 items
  const newsArticles = [
    {
      id: 1,
      title: "New Book Release: 'The Art of Coding'",
      description:
        "Discover the latest in programming techniques with our new release. Available now in eBook format.",
      imageUrl:
        "https://media.licdn.com/dms/image/D4D12AQFn3lHRWjW6Jw/article-cover_image-shrink_600_2000/0/1688806627741?e=2147483647&v=beta&t=qq8ON53ly1q5lWEh3DD14RKn73bR5xuhASZy3h3-obo",
      date: "October 1, 2024",
    },
    {
      id: 2,
      title: "Upcoming Author Event: Meet Jane Doe",
      description:
        "Join us for an exclusive author event featuring Jane Doe. Limited seats available!",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShgfDV2B1drO6Iklektqw7mzzyZuizJiWImg&s",
      date: "September 28, 2024",
    },
    {
      id: 3,
      title: "Membership Perks: Free Rentals All October",
      description:
        "For our loyal members, we’re offering free rentals for the entire month of October. Don’t miss out!",
      imageUrl:
        "https://images.unsplash.com/photo-1562704509-09fc964c0a07?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "September 25, 2024",
    },
    {
      id: 4,
      title: "Exclusive Interview: The Future of E-Books",
      description:
        "An in-depth interview with industry experts on where e-books are headed in the next decade.",
      imageUrl:
        "https://images.unsplash.com/photo-1553830591-304c6f7c2e5a?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "September 20, 2024",
    },
    {
      id: 5,
      title: "Author Spotlight: Jane Smith’s Journey",
      description:
        "Discover the story behind bestselling author Jane Smith’s rise to fame and her upcoming projects.",
      imageUrl: "https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=870&h=500&fit=crop",
      date: "September 18, 2024",
    },
    {
      id: 6,
      title: "Holiday Specials: Discounts on Top Books",
      description:
        "Get ready for the holiday season with special discounts on popular titles available for a limited time!",
      imageUrl:
        "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "September 15, 2024",
    },
  ];

  return (
    <DefaultLayout pageTitle="Latest News">
      <Container className="my-5">
        <h2 className="text-center mb-4">Latest News and Updates</h2>
        <Row>
          {newsArticles.map((article) => (
            <Col md={4} className="mb-4" key={article.id}>
              <Card className="h-100">
                <Card.Img
                  variant="top"
                  src={article.imageUrl}
                  alt={article.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title>{article.title}</Card.Title>
                  <Card.Text>{article.description}</Card.Text>
                  <Card.Text className="text-muted">
                    <small>{article.date}</small>
                  </Card.Text>
                  <Link to={`/news/${article.id}`} className="btn btn-warning">
                    Read More
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </DefaultLayout>
  );
};

export default NewsPage;
