import React, { useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import BookLanding from "../../pages/BookLanding";
import { CustomInput } from "../customInput/CustomInput";
import useForm from "../../hooks/useForm";
import { useDispatch } from "react-redux";
import { updateBookAction } from "../../features/books/bookAction";

export const AddStockModel = ({ show, setShow, clickedBook }) => {
  const handleModalClose = () => setShow(false);
  const { form, handleChange, setForm } = useForm();
  const dispatch = useDispatch();

  useEffect(() => {
    setForm(clickedBook);
  }, [clickedBook]);

  const inputs = [
    {
      label: "Total Books Count",
      type: "text",
      name: "count",
      placeholder: "Add Total Count",
      value: form.count,
      required: true,
    },
    {
      label: "Damaged Books Count",
      type: "text",
      name: "damaged",
      placeholder: "Add Damaged Count",
      value: form.damaged,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const { __v, createdAt, updatedAt, ...rest } = form;
    dispatch(updateBookAction(rest));
    clickedBook = {}
    setShow(false);
  };

  return (
    <Modal show={show} onHide={handleModalClose} backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>Add/Edit Stock</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h1>{clickedBook.title}</h1>
        <Form onSubmit={handleSubmit}>
          {inputs.map((input, i) => {
            return <CustomInput key={i} {...input} onChange={handleChange} />;
          })}
          <div className="d-grid">
            <Button type="submit">Submit</Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
