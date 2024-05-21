import React, { useState } from "react";
import { DefaultLayout } from "../../components/layout/DefaultLayout";
import { Button, Col, Form, Row } from "react-bootstrap";
import { CustomInput } from "../../components/customInput/CustomInput";
import { toast } from "react-toastify";
import { postNewUser } from "../../features/users/userAxios";

const SignUp = () => {
  const [form, setForm] = useState({});
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { cpassword, ...rest } = form;
    if (cpassword !== rest.password) {
      return alert("Passwords do not match");
    }
    const responsePending = postNewUser(rest);
    toast.promise(responsePending, { pending: "Creating your User....." });
    const { status, message } = await responsePending;
    toast[status](message);
  };

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
            onSubmit={handleSubmit}
            className="shadow-lg border border-secondary p-5 rounded m-auto mt-4"
            style={{ width: "450px" }}
          >
            <h1>Join the Book Store Community!!!!!</h1>
            <hr />
            {inputs.map((input, i) => (
              <CustomInput key={i} {...input} onChange={handleChange} />
            ))}
            {error && (
              <div className="my-3">
                <ul>
                  <li className="text-danger fw-bolder">{error}</li>
                </ul>
              </div>
            )}

            <div className="d-grid">
              <Button type="submit" disabled={error}>
                Submit
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </DefaultLayout>
  );
};

export default SignUp;
