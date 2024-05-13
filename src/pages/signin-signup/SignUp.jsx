import React from "react";
import { DefaultLayout } from "../../components/layout/DefaultLayout";
import { Button, Col, Form, Row } from "react-bootstrap";
import { CustomInput } from "../../components/customInput/CustomInput";

const SignUp = () => {
  const inputs = [
    { label: "First Name", name: "fname", type: "text", required: true, placeholder: "First Name" },
    { label: "Last Name", name: "lname", type: "text", required: true, placeholder: "Last Name" },
    {
      label: "Phone Number",
      name: "phone",
      type: "number",
      required: false,
      placeholder: "04********",
    },
    { label: "Email", name: "email", type: "email", required: true, placeholder: "Email" },
    {
      label: "Password",
      name: "password",
      type: "password",
      required: true,
      placeholder: "Password",
    },
    {
      label: "Confirm Password",
      name: "cpassword",
      type: "password",
      required: true,
      placeholder: "Confirm Password",
    },
  ];
  return (
    <DefaultLayout>
      <Row>
        <Col>
          <Form
            className="shadow-lg border border-secondary p-5 rounded m-auto mt-4"
            style={{ width: "450px" }}
          >
            <h1>Join the Book Store Community!!!!!</h1>
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

export default SignUp;
