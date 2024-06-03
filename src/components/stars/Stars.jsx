import React from "react";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";

export const Stars = ({ stars = 0 }) => {
  const maxStars = 5;

  if (stars > maxStars) {
    return <div>Invalid Ratings</div>;
  }
  const showStars = [];
  for (let i = 0; i < Math.floor(stars); i++) {
    showStars.push(<FaStar className="text-warning" />);
  }
  if (stars % 1 !== 0) {
    showStars.push(<FaStarHalf className="text-warning" />);
  }
  for (let i = 0; i < Math.floor(maxStars - stars); i++) {
    showStars.push(<FaStar />);
  }

  return <div className="d-flex">{showStars}</div>;
};
