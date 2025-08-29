import React from "react";

const Title = ({ children, className = "", ...props }) => {
  return (
    <h1
      className={`text-clamp font-bold ${className}`}
      {...props}
    >
      {children}
    </h1>
  );
};

export default Title;
