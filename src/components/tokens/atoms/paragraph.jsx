import React from "react";

const Paragraph = ({children, className = "", ...props }) =>{

    return (
         <p
      className={`text-normalSmall font-PPMontreal ${className} `}
      {...props}
    >
      {children}
    </p>
    );
};

export default Paragraph;