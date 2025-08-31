import React from "react";

const Header =({children, className = "", ...props }) =>{

    return (
         <p
      className={`text-2xl font-PPMontreal ${className} `}
      {...props}
    >
      {children}
    </p>
    );
};

export default Header;