import React, { useEffect, useState } from "react";
import { UserLayout } from "../../components/layout/UserLayout";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { useSelector } from "react-redux";
import { FilterCmp } from "../../components/filter/FilterCmp";
import { handleCategorySearch } from "../../helpers/handleSearch";

const Categories = () => {
  const { books } = useSelector((state) => state.bookInfo);
  const [categories, setCategories] = useState([]);

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
    handleCategorySearch(allCategories, setCategories, value);
  };

  return (
    <UserLayout pageTitle="Categories">
      <Row>
        <Col>{categories.length} categories found</Col>
        <Col>
          {" "}
          <input
            type="text"
            className="form-control"
            placeholder="Search for categories"
            onChange={handleSearch}
          />
        </Col>
        <Col className="text-end">
          <Link to="/admin/books/new">
            <Button variant="primary">
              <FaPlus />
            </Button>
          </Link>
        </Col>
      </Row>
      <hr />
      {categories.map((category, i) => (
        <>
          <FilterCmp key={i} filter={{ key: "category", value: category }} />
          <hr />
        </>
      ))}
    </UserLayout>
  );
};

export default Categories;
