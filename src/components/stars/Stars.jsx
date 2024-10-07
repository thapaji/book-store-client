import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

export const Stars = ({ stars = 0, onRate, readOnly }) => {
  const maxStars = 5;
  const [hoveredStar, setHoveredStar] = useState(0); // Track hovered star

  // Function to handle rating click
  const handleClick = (i) => {
    if (!readOnly) {
      onRate(i + 1); // Pass the rating (1-based index)
    }
  };

  // Function to handle hover effect
  const handleHover = (i) => {
    if (!readOnly) {
      setHoveredStar(i + 1); // Set hovered star (1-based index)
    }
  };

  // Reset hover state on mouse leave
  const handleMouseLeave = () => {
    setHoveredStar(0); // Reset hovered star
  };

  // Check for valid star ratings
  if (stars > maxStars) {
    return <div>Invalid Ratings</div>;
  }

  return (
    <div className="d-flex" onMouseLeave={handleMouseLeave}>
      {Array.from({ length: maxStars }, (_, index) => {
        const isFilled = index < (hoveredStar || stars); // Determine if star should be filled

        return (
          <FaStar
            key={index}
            className={`star ${isFilled ? "selected" : ""}`}
            onClick={() => handleClick(index)} // Click sets the rating
            onMouseEnter={() => handleHover(index)} // Set hovered star
            style={{
              cursor: readOnly ? "default" : "pointer",
              color: isFilled ? "#FFD700" : "#ccc", // Gold for filled stars, gray for unfilled
              transition: "color 0.2s ease",
              fontSize: "30px",
              margin: "0 2px",
            }}
          />
        );
      })}
    </div>
  );
};
