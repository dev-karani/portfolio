import React from 'react'
import Text from './text';

const Button = ({children, className = "", ...props }) =>{

    return (
         <button
      className={`border border-black px-3 py-1 mt-button ${className} `}
      {...props}
    >
      <Text> {children}</Text>
    </button>
    );
};

export default Button;