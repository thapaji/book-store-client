import React from "react";

const Icon = ({ children, size = 30, className = "text-center" }) => {
  return (
    <span style={{ fontSize: size }} className={className}>
      {children}
    </span>
  );
};

export default Icon;
