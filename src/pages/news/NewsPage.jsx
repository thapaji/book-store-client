import { useEffect, useState } from "react";
import { DefaultLayout } from "../../components/layout/DefaultLayout";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllNewsAction } from "../../features/news/newsAction";
import { handleNewsSearch } from "../../helpers/handleSearch";

const NewsPage = () => {
  const { news } = useSelector((state) => state.newsInfo);
  const [searchedNews, setSearchedNews] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    news.length < 1 && dispatch(getAllNewsAction(true));
  }, [dispatch, news.length]);

  useEffect(() => {
    setSearchedNews(news);
  }, [news]);

  const handleSearch = (e) => {
    const value = e.target.value;
    handleNewsSearch(news, setSearchedNews, value);
  };

  return (
    <DefaultLayout pageTitle="Latest News">
      <Container className="my-5">
        <Row className="mb-4">
          <Col>{news.length} news articles found</Col>
          <Col>
            <input type="text" className="form-control" placeholder="Search by Title/Author" onChange={handleSearch} />
          </Col>
        </Row>
        <Row>
          {searchedNews.map((article) => (
            <Col md={4} className="mb-4" key={article._id}>
              <Card className="h-100">
                <Card.Img variant="top" src={article.imageUrl} alt={article.title} style={{ height: "200px", objectFit: "cover" }} />
                <Card.Body>
                  <Card.Title>{article.title}</Card.Title>
                  <Card.Text>{article.description}</Card.Text>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="text-muted">{new Date(article.createdAt).toLocaleDateString()}</span>
                    <span className="text-muted">{article.authorName}</span>
                  </div>
                  <Link to={`/news/${article._id}`} className="btn btn-warning mt-4">
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
