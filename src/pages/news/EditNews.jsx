import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { getSingleNewsAction, updateNewsAction } from "../../features/news/newsAction";
import { UserLayout } from "../../components/layout/UserLayout";
import useForm from "../../hooks/useForm";

const EditNews = () => {
  const { _id } = useParams();
  const dispatch = useDispatch();
  const { form, setForm, handleChange } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getSingleNewsAction(_id));
  }, [dispatch, _id]);

  const { selectedNews } = useSelector((state) => state.newsInfo);

  useEffect(() => {
    setForm(selectedNews);
  }, [selectedNews, setForm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateNewsAction(form));
    navigate("/admin/news");
  };

  return (
    <UserLayout pageTitle="Edit News">
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control name="title" value={form.title || ""} onChange={handleChange} required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control
            name="description"
            value={form.description || ""}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Content</Form.Label>
          <Form.Control
            name="content"
            as="textarea"
            rows="5"
            value={form.content || ""}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Image URL</Form.Label>
          <Form.Control name="imageUrl" value={form.imageUrl || ""} onChange={handleChange} />
        </Form.Group>
        <div className="d-grid">
          <Button type="Submit">Update</Button>
        </div>
      </Form>
    </UserLayout>
  );
};

export default EditNews;
