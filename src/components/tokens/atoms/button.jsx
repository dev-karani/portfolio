import React from "react";

const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`
        inline-flex items-center justify-center
        px-6 py-3
        bg-gray-300 tex
        text-sm text-graphite font-medium
        border border-black text-coconut hover:bg-coconut hover:text-black        active:scale-95
        transition-all duration-200
        whitespace-nowrap
        flex-shrink-0
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
