import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postNewNewsAction } from "../../features/news/newsAction";
import { UserLayout } from "../../components/layout/UserLayout";

const AddNews = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userInfo);
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    form.author = user;
    dispatch(postNewNewsAction(form));
    navigate("/admin/news");
  };

  return (
    <UserLayout pageTitle="Add News">
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control name="title" onChange={handleChange} required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control name="description" onChange={handleChange} required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Content</Form.Label>
          <Form.Control name="content" as="textarea" rows="5" onChange={handleChange} required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Image URL</Form.Label>
          <Form.Control name="imageUrl" onChange={handleChange} />
        </Form.Group>
        <div className="d-grid">
          <Button type="Submit">Submit</Button>
        </div>
      </Form>
    </UserLayout>
  );
};

export default AddNews;
