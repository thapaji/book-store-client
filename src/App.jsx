import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import SignIn from "./pages/signin-signup/SignIn";
import SignUp from "./pages/signin-signup/SignUp";
import Dashboard from "./pages/dashboard/Dashboard";
import "./App.css";
import BookList from "./pages/book/BookList";
import AddNewBook from "./pages/book/AddNewBook";
import EditBook from "./pages/book/EditBook";
import Students from "./pages/users/Students";
import { useDispatch } from "react-redux";
import { getAllBooksAction } from "./features/books/bookAction";
import BookLanding from "./pages/book/BookLanding";
import MyBook from "./pages/book/MyBook";
import { autoLogin } from "./features/users/userAction";
import MyBorrows from "./pages/Borrow/MyBorrows";
import Profile from "./pages/signin-signup/Profile";
import Reviews from "./pages/review/Reviews";
import Categories from "./pages/filters/Categories";
import Authors from "./pages/filters/Authors";
import Admins from "./pages/users/Admins";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBooksAction());
    dispatch(autoLogin());
  }, [dispatch]);

  return (
    <>
      <Routes>
        {/***************     Public Pages        ******************/}
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/book/:_id" element={<BookLanding />} />

        {/***************     Private Pages        ******************/}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin/books" element={<BookList />} />
        <Route path="/admin/books/new" element={<AddNewBook />} />
        <Route path="/admin/book/edit/:_id" element={<EditBook />} />
        <Route path="/admin/admins" element={<Admins />} />
        <Route path="/admin/students" element={<Students />} />
        <Route path="/my-books" element={<MyBook />} />
        <Route path="/borrows" element={<MyBorrows />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin/reviews" element={<Reviews />} />
        <Route path="/admin/categories" element={<Categories />} />
        <Route path="/admin/authors" element={<Authors />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
