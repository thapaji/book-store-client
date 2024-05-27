import React, { useState } from "react";
import { UserLayout } from "../../components/layout/UserLayout";
import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { CustomInput } from "../../components/customInput/CustomInput";
import useForm from "../../hooks/useForm";
import { inputs } from "../../assets/formInputs";

const AddNewBook = () => {
  const { form, handleChange, handleSubmit } = useForm();

  return (
    <UserLayout pageTitle={"New Book"}>
      <div>
        <Link to={"/admin/books/list"}>
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

export default AddNewBook;
