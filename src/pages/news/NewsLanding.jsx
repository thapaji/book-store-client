import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { DefaultLayout } from "../../components/layout/DefaultLayout";

const NewsLanding = () => {
  const { _id } = useParams();
  const { news } = useSelector((state) => state.newsInfo);
  const article = news.find((item) => item._id === _id);

  return (
    <DefaultLayout pageTitle={article?.title}>
      <Container>
        <Row className="mt-4">
          <Col md={6}>
            <img src={article?.imageUrl} alt={article?.title} width="100%" />
          </Col>
          <Col md={6}>
            <h1>{article?.title}</h1>
            <p>{article?.description}</p>
            <div>{article?.content}</div>
          </Col>
        </Row>
      </Container>
    </DefaultLayout>
  );
};

export default NewsLanding;
