import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import SignIn from "./pages/signin-signup/SignIn";
import SignUp from "./pages/signin-signup/SignUp";
import Product from "./pages/product/Product";
import Dashboard from "./pages/dashboard/Dashboard";
import "./App.css";
import BookList from "./pages/book/BookList";
import AddNewBook from "./pages/book/AddNewBook";
import EditBook from "./pages/book/EditBook";
import { useDispatch } from "react-redux";
import { getAllBooksAction } from "./features/books/bookAction";
import BookLanding from "./pages/BookLanding";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBooksAction());
  }, [dispatch]);

  return (
    <>
      <Routes>
        {/***************     Public Pages        ******************/}
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/product" element={<Product />} />
        <Route path="/book/:_id" element={<BookLanding />} />

        {/***************     Private Pages        ******************/}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin/books/list" element={<BookList />} />
        <Route path="/admin/books/new" element={<AddNewBook />} />
        <Route path="/admin/book/edit/:_id" element={<EditBook />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
