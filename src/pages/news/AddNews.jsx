import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postNewNewsAction } from "../../features/news/newsAction";
import { UserLayout } from "../../components/layout/UserLayout";
import { Editor } from "@tinymce/tinymce-react";

const AddNews = () => {
  const tinyKey = import.meta.env.VITE_APP_TINYMCE;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userInfo);
  const [form, setForm] = useState({
    title: "",
    description: "",
    content: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleEditorChange = (content) => {
    setForm({ ...form, content });
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
          <Form.Control name="title" value={form.title} onChange={handleChange} required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control
            name="description"
            value={form.description}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Content</Form.Label>
          <Editor
            apiKey={tinyKey}
            value={form.content}
            init={{
              height: 500,
              menubar: false,
            }}
            onEditorChange={handleEditorChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Image URL</Form.Label>
          <Form.Control name="imageUrl" value={form.imageUrl} onChange={handleChange} />
        </Form.Group>

        <div className="d-grid mt-4">
          <Button type="Submit">Submit</Button>
        </div>
      </Form>
    </UserLayout>
  );
};

export default AddNews;
