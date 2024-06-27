import React, { useEffect } from "react";
import { UserLayout } from "../../components/layout/UserLayout";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleBookAction, updateBookAction } from "../../features/books/bookAction";
import { Button, Form } from "react-bootstrap";
import { CustomInput } from "../../components/customInput/CustomInput";
import { inputs } from "../../assets/formInputs";
import useForm from "../../hooks/useForm";

const EditBook = () => {
  const { _id } = useParams();
  const dispatch = useDispatch();
  const { form, handleChange, setForm } = useForm();
  const navigate = useNavigate();

  const { selectedBook } = useSelector((state) => state.bookInfo);

  useEffect(() => {
    if (_id !== form?._id) {
      dispatch(getSingleBookAction(_id));
      setForm(selectedBook);
    }
  }, [dispatch, _id, selectedBook, setForm, form]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { __v, createdAt, updatedAt, ...rest } = form;
    dispatch(updateBookAction(rest));
    navigate("/admin/books");
  };

  return (
    <UserLayout pageTitle={"Edit Book"}>
      <div>
        <Link to={"/admin/books"}>
          <Button variant="secondary"> Back</Button>
        </Link>
      </div>
      <div>
        <h4>Fill up the form to edit the book</h4>
        <hr />
        <Form onSubmit={handleSubmit}>
          <Form.Check
            type="switch"
            checked={form?.status === "active"}
            name="status"
            label={form?.status?.toUpperCase()}
            onChange={handleChange}
            className={form.status === "active" ? "mb-3 text-success" : "mb-3 text-danger"}
          />
          {inputs.map((input, i) => (
            <CustomInput
              key={i}
              {...input}
              onChange={handleChange}
              value={form[input.name]}
              disabled={input.name === "isbn"}
            />
          ))}
          <div className="d-grid">
            <Button type="Submit">Update</Button>
          </div>
        </Form>
      </div>
    </UserLayout>
  );
};

export default EditBook;
