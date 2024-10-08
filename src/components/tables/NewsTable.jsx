import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Col, Row, Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FaChevronDown, FaPlus } from "react-icons/fa";
import ConfirmModal from "../../components/customModel/ConfirmModal";
import { getAllNewsAction, deleteNewsAction } from "../../features/news/newsAction";
import { handleNewsSearch } from "../../helpers/handleSearch";

const NewsTable = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { news } = useSelector((state) => state.newsInfo);
  const [searchedNews, setSearchedNews] = useState([]);
  const [showConfirm, setShowConfirm] = useState(false);
  const [newsIdToDelete, setNewsIdToDelete] = useState("");

  useEffect(() => {
    news.length < 1 && dispatch(getAllNewsAction(true));
  }, [dispatch, news.length]);

  useEffect(() => {
    setSearchedNews(news);
  }, [news]);

  const handleSearch = (e) => {
    const value = e.target.value;
    handleNewsSearch(news, setSearchedNews, value);
  };

  const handleDelete = (news) => {
    setShowConfirm(true);
    setNewsIdToDelete(news._id);
  };

  const handleConfirmDelete = () => {
    dispatch(deleteNewsAction(newsIdToDelete));
    setNewsIdToDelete("");
  };

  return (
    <>
      <Row>
        <Col>{news.length} news articles found</Col>
        <Col>
          <input type="text" className="form-control" placeholder="Search by Title/Author" onChange={handleSearch} />
        </Col>
        <Col className="text-end">
          <Link to="/admin/news/new">
            <Button variant="warning">
              <FaPlus />
            </Button>
          </Link>
        </Col>
      </Row>
      <hr />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Title</th>
            <th>Aurthor</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {searchedNews.map((item, i) => (
            <tr key={item._id}>
              <td>{i + 1}</td>
              <td>
                <img src={item.imageUrl} alt={item.title} width="70px" />
              </td>
              <td>
                <Link to={"/news/" + item._id}>
                  <h1>{item.title}</h1>
                  <p className="text-dark">{item.description.slice(0, 100) + "..."}</p>
                </Link>
              </td>
              <td>{item.authorName}</td>
              <td>
                <div className="hover-container">
                  <div className="hover-trigger">
                    <Button variant="warning">
                      Actions <FaChevronDown />
                    </Button>
                  </div>
                  <div className="hover-content">
                    <div className="d-grid">
                      <Button variant="outline-success" onClick={() => navigate(`/admin/news/edit/${item._id}`)}>
                        Edit
                      </Button>
                    </div>

                    <div className="d-grid">
                      <Button variant="outline-danger" onClick={() => handleDelete(item)}>
                        Delete
                      </Button>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <ConfirmModal
        show={showConfirm}
        setShow={setShowConfirm}
        onConfirm={handleConfirmDelete}
        message="Are you sure you want to delete this news?"
      />
    </>
  );
};

export default NewsTable;
