import React from "react";

const Container = ({ children, className = "", ...props  }) => {
  return (
    <div className={`px-6 ${className} `}
      {...props}>
      {children}
    </div>
  );
};

export default Container;
