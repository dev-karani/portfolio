import React from "react";
import Header from "../tokens/atoms/Header";
import Text from "../tokens/atoms/text";
import Button from "../tokens/atoms/button";

const Card = ({ image, title, description, className = "", ...props }) => {
  return (
    <div
      className={`h-aspect-[16/9]  overflow-hidden shadow-sm ${className}`}
      {...props}
    >
      <div className="flex-1 aspect-[16/9] w-full overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
        />
      </div>

      <div className="p-6 flex flex-col gap-2">
        <Text className="text-xl font-bold">{title}</Text>
        <Text className="w-60">{description}</Text>
      </div>
    </div>
  );
};

export default Card;
