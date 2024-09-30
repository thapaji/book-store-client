import React from "react";
import { Stack } from "react-bootstrap";
import { CgProfile } from "react-icons/cg";
import { FaEnvelope, FaListUl, FaNewspaper, FaPenFancy, FaUserShield } from "react-icons/fa";
import { FaBookBookmark, FaUsers } from "react-icons/fa6";
import { IoLibrary } from "react-icons/io5";
import { MdCategory } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { TbStarsFilled } from "react-icons/tb";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const sideLinks = [
  {
    icon: <RxDashboard />,
    title: "Dashboard",
    to: "/dashboard",
    isPublic: true,
  },
  {
    icon: <FaBookBookmark />,
    title: "Books",
    to: "/admin/books",
    isPublic: false,
  },
  {
    icon: <FaPenFancy />,
    title: "Authors",
    to: "/admin/authors",
    isPublic: false,
  },
  {
    icon: <MdCategory />,
    title: "Categories",
    to: "/admin/categories",
    isPublic: false,
  },
  {
    icon: <FaUserShield />,
    title: "Admins",
    to: "/admin/admins",
    isPublic: false,
  },
  {
    icon: <FaUsers />,
    title: "Students",
    to: "/admin/students",
    isPublic: false,
  },
  {
    icon: <FaListUl />,
    title: "All Borrows",
    to: "/borrows",
    isPublic: false,
  },
  {
    icon: <TbStarsFilled />,
    title: "All Reviews",
    to: "/admin/reviews",
    isPublic: false,
  },
  {
    icon: <IoLibrary />,
    title: "My Borrows",
    to: "/my-books",
    isPublic: true,
  },
  {
    icon: <FaNewspaper />,
    title: "News",
    to: "/admin/news",
    isPublic: false,
  },
  {
    icon: <FaEnvelope />,
    title: "Messages",
    to: "/admin/messages",
    isPublic: false,
  },
  {
    icon: <CgProfile />,
    title: "Profile",
    to: "/profile",
    isPublic: true,
  },
];

export const UserSideBar = () => {
  const { user } = useSelector((state) => state.userInfo);
  const menuToDisplay =
    user.role === "admin" ? sideLinks : sideLinks.filter((menu) => menu.isPublic === true);

  return (
    <Stack gap={1}>
      {menuToDisplay.map(({ title, to, icon }) => (
        <Link key={title} to={to} className="nav-link mb-2">
          {icon} <label htmlFor={title}>{title}</label>
        </Link>
      ))}
    </Stack>
  );
};
