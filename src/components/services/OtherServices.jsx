import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import { serviceData } from "../../pages/services/ServiceData";

const OtherServices = () => {
  return (
    <Container fluid className="py-4 bg-warning">
      <h2 className="text-center">Check Our Other Services</h2>
      <hr />
      <Container>
        <Row>
          {serviceData.map((service, index) => (
            <Col key={index} md={4} className="text-center">
              <Link to={service.link} className="text-dark text-decoration-none">
                <div className="d-flex flex-column align-items-center">
                  <div className="mb-2">{service.icon}</div> {/* Rendering icon */}
                  <p>{service.title}</p>
                  {/* <p>{service.description}</p> Optional: Render description */}
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default OtherServices;
