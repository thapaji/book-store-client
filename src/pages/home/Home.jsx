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
      <Container>
        <Row>
          <Col>
            <label htmlFor="">20 books found!!</label>
            <div>
              <Form.Control placeholder="search by book name .." />
            </div>
          </Col>
          <Col>
            <CustomCard />
          </Col>
        </Row>
      </Container>
    </DefaultLayout>
  );
};

export default Home;
