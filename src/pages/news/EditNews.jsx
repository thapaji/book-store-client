import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { getSingleNewsAction, updateNewsAction } from "../../features/news/newsAction";
import { UserLayout } from "../../components/layout/UserLayout";
import useForm from "../../hooks/useForm";
import { Editor } from "@tinymce/tinymce-react";

const EditNews = () => {
  const { _id } = useParams();
  const tinyKey = import.meta.env.VITE_APP_TINYMCE;
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

  const handleEditorChange = (content) => {
    setForm({ ...form, content });
  };

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
          <Editor
            apiKey={tinyKey}
            value={form.content || ""}
            init={{
              height: 500,
              menubar: false,
            }}
            onEditorChange={handleEditorChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Image URL</Form.Label>
          <Form.Control name="imageUrl" value={form.imageUrl || ""} onChange={handleChange} />
        </Form.Group>

        <div className="d-grid mt-4">
          <Button type="Submit">Update</Button>
        </div>
      </Form>
    </UserLayout>
  );
};

export default EditNews;
