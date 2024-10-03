import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { DefaultLayout } from "../../components/layout/DefaultLayout";

const NewsLanding = () => {
  const { id } = useParams();
  const { news } = useSelector((state) => state.newsInfo);
  const article = news.find((item) => item._id === id);

  return (
    <DefaultLayout pageTitle={article?.title}>
      <Container>
        <Row className="mt-4">
          <Col md={6}>
            <img src={article?.imageUrl} alt={article?.title} width="100%" />
          </Col>
          <Col md={6}>
            <Row>
              <Col>{article.authorName}</Col>
              <Col>{article.createdAt.slice(0, 10)}</Col>
            </Row>

            <div dangerouslySetInnerHTML={{ __html: article?.content }}></div>
          </Col>
        </Row>
      </Container>
    </DefaultLayout>
  );
};

export default NewsLanding;
