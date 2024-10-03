import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
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
import AddUser from "./pages/users/AddUser";
import EditUser from "./pages/users/EditUser";
import CategoriesPage from "./pages/category/CategoriesPage";
import CategoryDetailPage from "./pages/category/CategoryDetailPage";
import ServicesPage from "./pages/services/ServicesPage";
import BookRentals from "./pages/services/BookRentals";
import BookRecommendations from "./pages/services/BookRecommendations";
import MembershipOptions from "./pages/services/MembershipOptions";
import Events from "./pages/services/Events";
import CustomerSupport from "./pages/services/CustomerSupport";
import BuyBooks from "./pages/services/BuyBooks";
import OrderBooks from "./pages/services/OrderBooks";
import BookDonations from "./pages/services/BookDonations";
import EBookDownloads from "./pages/services/EBookDownloads";
import ContactUs from "./pages/contact/ContactUs";
import NewsPage from "./pages/news/NewsPage";
import NewsList from "./pages/news/NewsList";
import AddNews from "./pages/news/AddNews";
import EditNews from "./pages/news/EditNews";
import NewsLanding from "./pages/news/NewsLanding";

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
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/categories/:category" element={<CategoryDetailPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/rentals" element={<BookRentals />} />
        <Route path="/services/ebooks" element={<EBookDownloads />} />
        <Route path="/services/recommendations" element={<BookRecommendations />} />
        <Route path="/services/membership" element={<MembershipOptions />} />
        <Route path="/services/events" element={<Events />} />
        <Route path="/services/support" element={<CustomerSupport />} />
        <Route path="/services/buy" element={<BuyBooks />} />
        <Route path="/services/order" element={<OrderBooks />} />
        <Route path="/services/donations" element={<BookDonations />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/news/:id" element={<NewsLanding />} />

        {/***************     Private Pages        ******************/}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin/books" element={<BookList />} />
        <Route path="/admin/books/new" element={<AddNewBook />} />
        <Route path="/admin/book/edit/:_id" element={<EditBook />} />
        <Route path="/admin/admins" element={<Admins />} />
        <Route path="/admin/students" element={<Students />} />
        <Route path="/admin/users/new" element={<AddUser />} />
        <Route path="/admin/user/edit/:_id" element={<EditUser />} />
        <Route path="/my-books" element={<MyBook />} />
        <Route path="/borrows" element={<MyBorrows />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin/reviews" element={<Reviews />} />
        <Route path="/admin/categories" element={<Categories />} />
        <Route path="/admin/authors" element={<Authors />} />
        <Route path="/admin/news" element={<NewsList />} />
        <Route path="/admin/news/new" element={<AddNews />} />
        <Route path="/admin/news/edit/:_id" element={<EditNews />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
