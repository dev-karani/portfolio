import React from "react";

const Header =({children, className = "", ...props }) =>{

    return (
         <p
      className={`text-3xl font-PPMontreal my-2 ${className} `}
      {...props}
    >
      {children}
    </p>
    );
};

export default Header;