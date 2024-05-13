import React from "react";
import { DefaultLayout } from "../../components/layout/DefaultLayout";
import { CustomCarousel } from "../../components/customCarousel/CustomCarousel";
import { Col, Container, Form, Row } from "react-bootstrap";
import { CustomCard } from "../../components/customCard/CustomCard";

const Home = () => {
  return (
    <DefaultLayout>
      <CustomCarousel />
      {/******************* book list **************/}
      <Container className="mt-5">
        <Row>
          <Col>
            <label htmlFor="">20 books found!!</label>
          </Col>
          <Col lg={3}>
            <div>
              <Form.Control placeholder="search by book name .." />
            </div>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <CustomCard />
          </Col>
        </Row>
      </Container>
    </DefaultLayout>
  );
};

export default Home;
