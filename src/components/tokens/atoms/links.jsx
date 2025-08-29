import React from "react";

const Links = ({children, className = "", ...props }) =>{

    return (
         <p
      className={`mr-16 text-small font-PPMontreal ${className} `}
      {...props}
    >
      {children}
    </p>
    );
}; 

export default Links;