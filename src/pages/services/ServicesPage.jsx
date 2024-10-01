import React from "react";
import { DefaultLayout } from "../../components/layout/DefaultLayout";
import { Row, Container } from "react-bootstrap";
import ServiceCard from "../../components/services/ServiceCard";
import { serviceData } from "./ServiceData";

const ServicesPage = () => {
  return (
    <DefaultLayout pageTitle="Our Services">
      <Container>
        <Row>
          {serviceData.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </Row>
      </Container>
    </DefaultLayout>
  );
};

export default ServicesPage;
