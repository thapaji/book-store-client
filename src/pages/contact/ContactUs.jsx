import { DefaultLayout } from "../../components/layout/DefaultLayout";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { AiOutlinePhone, AiOutlineMail, AiOutlineHome } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { postNewContactAction } from "../../features/contact/contactAction";
import { useState } from "react";

const ContactUs = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const status = await dispatch(postNewContactAction(formData));

    status === "success" &&
      setFormData({
        name: "",
        email: "",
        message: "",
      });
  };

  return (
    <DefaultLayout pageTitle="We'd Love to Hear From You">
      <Container className="my-4">
        <Row className="text-center">
          <p className="service-description">Whether you have questions, feedback, or just want to say hi, we're here to help. Reach out to us and we’ll get back to you as soon as possible!</p>
        </Row>
        <Row className="contact-form">
          <Col lg={{ span: 6, offset: 3 }}>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Your Email</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="message">
                <Form.Label>Your Message</Form.Label>
                <Form.Control as="textarea" rows={5} name="message" placeholder="Write your message" value={formData.message} onChange={handleChange} required />
              </Form.Group>

              <Button variant="warning" type="submit" className="w-100">
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
        {/* Contact info section */}
        <Row className="mt-4">
          <Col lg={4} className="text-center">
            <AiOutlinePhone size={50} className="mb-3" />
            <h4>Call Us</h4>
            <p>+61 (980) 123-4567</p>
          </Col>
          <Col lg={4} className="mb-5 text-center">
            <AiOutlineMail size={50} className="mb-3" />
            <h4>Email Us</h4>
            <p>support@bookstore.com</p>
          </Col>
          <Col lg={4} className="mb-5 text-center">
            <AiOutlineHome size={50} className="mb-3" />
            <h4>Visit Us</h4>
            <p>13A/8-10 King St, Rockdale NSW 2216</p>
          </Col>
        </Row>
        {/* Google Maps */}
        <Row className="mt-5">
          <Col>
            <h4 className="text-center mb-4">Find Us on the Map</h4>
            <div className="map-container" style={{ height: "400px", width: "100%" }}>
              <iframe
                src="https://www.google.com/maps?q=-33.952018011682966,151.1389250795905&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Google Maps Location"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </DefaultLayout>
  );
};

export default ContactUs;
