import React from "react";

const Foots = ({ children, className = "", ...props }) => {
  return (
    <p
      className={`text-7xl font-PPMontreal ${className} `}
      {...props}
    >
      {children}
    </p>
  );
};

export default Foots;
