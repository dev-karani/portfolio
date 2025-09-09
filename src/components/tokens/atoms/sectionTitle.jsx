import React from "react";

const SectionTitle =  ({ children, className = "", ...props }) => {
  return (
    <div
      className={`text-[44px] font-bold  ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default SectionTitle;
