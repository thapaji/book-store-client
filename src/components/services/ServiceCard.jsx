import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Icon from "../icon/Icon";

const ServiceCard = ({ service }) => {
  const IconComponent = service.icon;
  return (
    <Col md={4} className="mb-4">
      <Card className="text-center shadow-sm h-100">
        <Card.Body>
          <div className="mb-3">
            <Icon size={50} className="text-warning">
              <IconComponent />
            </Icon>
          </div>
          <Card.Title>{service.title}</Card.Title>
          <Card.Text>{service.description}</Card.Text>
          <Link to={service.link} className="btn btn-warning">
            Learn More
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ServiceCard;
