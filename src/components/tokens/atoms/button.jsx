import React from 'react'
import Text from './text';

const Button = ({children, className = "", ...props }) =>{

    return (
         <button
      className={`border border-black text-coconut bg-graphite py-1.5 px-3 hover:bg-coconut hover:text-graphite transition${className} `}
      {...props}
    >
      <Text> {children}</Text>
    </button>
    );
};

export default Button;