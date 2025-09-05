import React from 'react'

const Section = ({children, className = "", ...props }) =>{

    return (
         <div
      className={`mt-12  ${className} `}
      {...props}
    >
      {children}
    </div>
    );
};

export default Section;