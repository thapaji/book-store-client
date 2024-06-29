import React from "react";
import { UserLayout } from "../../components/layout/UserLayout";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { CustomInput } from "../../components/customInput/CustomInput";
import useForm from "../../hooks/useForm";
import { toast } from "react-toastify";
import { postNewUser } from "../../features/users/userAxios";
import { useDispatch } from "react-redux";
import { fetchUsersAction } from "../../features/users/userAction";

const AddUser = () => {
  const { form, handleChange } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
      label: "Role",
      type: "select",
      name: "role",
      placeholder: "Select Role",
      required: true,
      options: [
        { label: "-- Select Role --", value: null },
        { label: "Admin", value: "admin" },
        { label: "Student", value: "student" },
      ],
    },
    {
      label: "Confirm Password",
      name: "cpassword",
      type: "password",
      required: true,
      placeholder: "Confirm Password",
    },
  ];

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
    if (status === "success") {
      dispatch(fetchUsersAction("admin"));
    }
    navigate("/admin/" + form.role + "s");
  };

  return (
    <UserLayout pageTitle={"New User"}>
      <div>
        <Link to={"/admin/admins"}>
          <Button variant="secondary"> Back</Button>
        </Link>
      </div>
      <div>
        <h4>Fill up the form to add new book</h4>
        <hr />
        <Form onSubmit={handleSubmit}>
          {inputs.map((input, i) => (
            <CustomInput key={i} {...input} onChange={handleChange} />
          ))}
          <div className="d-grid">
            <Button type="Submit">Submit</Button>
          </div>
        </Form>
      </div>
    </UserLayout>
  );
};

export default AddUser;
