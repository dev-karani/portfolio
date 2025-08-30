import React from 'react'

const Section = ({children, className = "", ...props }) =>{

    return (
         <div
      className={` ${className} `}
      {...props}
    >
      {children}
    </div>
    );
};

export default Section;