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
            <input
              type="text"
              className="form-control"
              placeholder="Search by Title/Author"
              onChange={handleSearch}
            />
          </Col>
        </Row>
        <Row>
          {searchedNews.map((article) => (
            <Col md={4} className="mb-4" key={article._id}>
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
                    <Row>
                      <Col>
                        {" "}
                        <small>{article.createdAt.slice(0, 10)}</small>
                      </Col>
                      <Col>
                        {" "}
                        <small>{article.authorName}</small>
                      </Col>
                      <Col></Col>
                    </Row>
                  </Card.Text>
                  <Link to={`/news/${article._id}`} className="btn btn-warning">
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
