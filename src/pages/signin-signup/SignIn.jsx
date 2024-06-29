import React, { useEffect, useRef } from "react";
import { DefaultLayout } from "../../components/layout/DefaultLayout";
import { Form, Button, Col, Row } from "react-bootstrap";
import { CustomInput } from "../../components/customInput/CustomInput";
import { toast } from "react-toastify";
import { loginUser } from "../../features/users/userAxios";
import { getUserObj, login } from "../../features/users/userAction";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import signin from "../../assets/signin.svg";

const SignIn = () => {
  const dispatch = useDispatch();
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();

  const { user } = useSelector((state) => state.userInfo);
  // const sendTo = location?.state?.from?.location?.pathname || "/";

  useEffect(() => {
    // user?._id && navigate(sendTo);
    user?._id && navigate("/dashboard");
  }, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if (!email || !password) {
      return toast.error("Please fill all fields");
    }
    const status = login(dispatch, { email, password });
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
      <Row className="mt-5">
        <Col className="d-flex justify-content-center align-items-center">
          <img src={signin} alt="Sign In" style={{ width: "100%" }} />
        </Col>
        <Col>
          <Form
            onSubmit={handleSubmit}
            className="shadow-lg p-5 rounded m-auto"
            style={{ width: "450px" }}
          >
            <h2>Sign in</h2>
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
