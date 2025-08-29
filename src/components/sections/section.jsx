import React from 'react'

const Section = ({children, className = "", ...props }) =>{

    return (
         <div
      className={`min-h-[calc(95vh-var(--navbar-height))] ${className} `}
      {...props}
    >
      {children}
    </div>
    );
};

export default Section;