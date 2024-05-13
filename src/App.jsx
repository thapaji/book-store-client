import { Button } from "react-bootstrap";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import SignIn from "./pages/signin-signup/SignIn";
import SignUp from "./pages/signin-signup/SignUp";
import Product from "./pages/product/Product";
import Dashboard from "./pages/dashboard/Dashboard";
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        {/***************     Public Pages        ******************/}
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/product" element={<Product />} />

        {/***************     Private Pages        ******************/}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
