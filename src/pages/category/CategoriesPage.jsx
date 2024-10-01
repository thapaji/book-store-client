import React, { useEffect, useState } from "react";
import { DefaultLayout } from "../../components/layout/DefaultLayout";
import { Col, Row, Button, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { CustomCard } from "../../components/customCard/CustomCard"; // Assuming you're using this for displaying books.

const CategoriesPage = () => {
  const { books } = useSelector((state) => state.bookInfo);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  const allCategories = books.reduce((uniqueCategories, book) => {
    if (!uniqueCategories.includes(book.category)) {
      uniqueCategories.push(book.category);
    }
    return uniqueCategories;
  }, []);

  useEffect(() => {
    setCategories(allCategories);
  }, []);

  const handleSearch = (e) => {
    const { value } = e.target;
    const filteredCategories = allCategories.filter((category) =>
      category.toLowerCase().includes(value.toLowerCase())
    );
    setCategories(filteredCategories);
  };

  const handleMoreClick = (category) => {
    navigate(`/categories/${category}`);
  };

  return (
    <DefaultLayout pageTitle={"Categories"}>
      <Container>
        <Row className="mt-4">
          <Col>{categories.length} categories found</Col>
          <Col>
            <input
              type="text"
              className="form-control"
              placeholder="Search for categories"
              onChange={handleSearch}
            />
          </Col>
        </Row>
        <hr />
        {categories.map((category, i) => {
          const booksInCategory = books.filter((book) => book.category === category).slice(0, 4);
          return (
            <div key={i}>
              <h4>{category}</h4>
              <Row>
                <Col className="d-flex gap-2 flex-wrap justify-content-between">
                  {booksInCategory.map((book) => (
                    <Link key={book._id} to={"/book/" + book._id}>
                      <CustomCard key={book._id} {...book} />
                    </Link>
                  ))}
                </Col>
              </Row>
              <Button
                variant="outline-success"
                className="mt-4"
                onClick={() => handleMoreClick(category)}
              >
                See All {category}...
              </Button>

              <hr />
            </div>
          );
        })}
      </Container>
    </DefaultLayout>
  );
};

export default CategoriesPage;
