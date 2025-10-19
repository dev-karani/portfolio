import React from "react";
import Text from "../tokens/atoms/text";

const Card = ({ image, title, description, className = "", ...props }) => {
  return (
    <div
      className={`flex flex-col overflow-hidden ${className}`}
      {...props}
    >
      {/* Image */}
      <div className="aspect-[16/9] w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
        />
      </div>

      {/* Text */}
      <div className="p-5 flex flex-col gap-1">
        <Text className="text-lg font-semibold text-white">{title}</Text>
        <Text className="text-sm text-gray-400">{description}</Text>
      </div>
    </div>
  );
};

export default Card;
