import React from "react";

const Text = ({ children, className = "", ...props }) => {
  return (
    <p
      className={`text-sm font-PPMontreal ${className} `}
      {...props}
    >
      {children}
    </p>
  );
};

export default Text;
