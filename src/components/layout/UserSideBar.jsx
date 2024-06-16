import React from "react";
import { Stack } from "react-bootstrap";
import { CgProfile } from "react-icons/cg";
import { FaListUl } from "react-icons/fa";
import { FaBookBookmark, FaUsers } from "react-icons/fa6";
import { IoLibrary } from "react-icons/io5";
import { TbStarsFilled } from "react-icons/tb";
import { Link } from "react-router-dom";

const sideLinks = [
  {
    icon: <FaBookBookmark />,
    title: "Books",
    to: "/admin/books",
    isAdminOnly: true,
  },
  {
    icon: <FaUsers />,
    title: "Students",
    to: "/admin/students",
    isAdminOnly: true,
  },
  {
    icon: <FaListUl />,
    title: "Borrows History",
    to: "/borrows",
    isAdminOnly: true,
  },
  {
    icon: <TbStarsFilled />,
    title: "All Reviews",
    to: "/admin/reviews",
    isAdminOnly: true,
  },
  {
    icon: <IoLibrary />,
    title: "My Books",
    to: "/my-books",
  },
  {
    icon: <CgProfile />,
    title: "Profile",
    to: "/profile",
  },
];

export const UserSideBar = () => {
  return (
    <Stack gap={1}>
      {sideLinks.map(({ title, to, icon }) => (
        <Link key={title} to={to} className="nav-link mb-2">
          {icon} <label htmlFor={title}>{title}</label>
        </Link>
      ))}
    </Stack>
  );
};
