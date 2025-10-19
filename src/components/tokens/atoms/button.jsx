import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, to, href, className = "", ...props }) => {
  const baseStyles = `
    inline-flex items-center justify-center
    px-6 py-3
    text-base font-medium
    border border-black
    text-black  hover:text-black
    active:scale-95
    transition-all duration-200
    whitespace-nowrap
    flex-shrink-0
  `;

  if (to) {
    return (
      <Link to={to} className={`${baseStyles} ${className}`} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseStyles} ${className}`}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={`${baseStyles} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
