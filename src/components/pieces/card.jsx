import React from "react";
import Header from "../tokens/atoms/Header";
import Text from "../tokens/atoms/text";
import Button from "../tokens/atoms/button";

const Card = ({ image, title, description, className = "", ...props }) => {
  return (
    <div
      className={`h-full flex flex-col overflow-hidden shadow-sm ${className}`}
      {...props}
    >
      <div className="flex-1">
        <img
          src={image}
          alt={title}
          className=""
        />
      </div>

      <div className="p-6 flex flex-col gap-2">
        <Text className="text-small font-bold">{title}</Text>
        <Text>{description}</Text>
      </div>
    </div>
  );
};

export default Card;
