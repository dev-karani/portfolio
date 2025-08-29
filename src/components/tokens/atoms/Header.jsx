import React from "react";

const Header =({children, className = "", ...props }) =>{

    return (
         <p
      className={`text-header font-PPMontreal mb-title ${className} `}
      {...props}
    >
      {children}
    </p>
    );
};

export default Header;