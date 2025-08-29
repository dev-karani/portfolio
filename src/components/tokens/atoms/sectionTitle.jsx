import React from "react";

const SectionTitle =  ({ children, className = "", ...props }) => {
  return (
    <div
      className={`text-section font-bold  ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default SectionTitle;
