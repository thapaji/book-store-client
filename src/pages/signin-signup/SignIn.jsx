import React, { useRef } from "react";
import { DefaultLayout } from "../../components/layout/DefaultLayout";
import { Form, Button, Col, Row } from "react-bootstrap";
import { CustomInput } from "../../components/customInput/CustomInput";

const SignIn = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email, password);
  };

  const inputs = [
    {
      label: "Email",
      name: "email",
      type: "email",
      required: true,
      placeholder: "Email",
      passRef: emailRef,
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      required: true,
      placeholder: "Password",
      passRef: passwordRef,
    },
  ];

  return (
    <DefaultLayout>
      <Row>
        <Col>
          <Form
            onSubmit={handleSubmit}
            className="shadow-lg border border-secondary p-5 rounded m-auto mt-4"
            style={{ width: "450px" }}
          >
            <h1>Sign in !!!!!</h1>
            <hr />
            {inputs.map((input, i) => (
              <CustomInput key={i} {...input} />
            ))}
            <div className="d-grid">
              <Button type="submit">Submit</Button>
            </div>
          </Form>
        </Col>
      </Row>
    </DefaultLayout>
  );
};

export default SignIn;
