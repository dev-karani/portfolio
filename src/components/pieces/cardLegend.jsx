import React from "react";
import Header from "../tokens/atoms/Header";
import Text from "../tokens/atoms/text";
import Button from "../tokens/atoms/button";

const CardLegend = ({ image, title, description, className = "", ...props }) => {
  return (
    <div
      className={` flex-[0_0_100%] sm:flex-[0_0_25%] lg:flex-[0_0_25%] h-full flex flex-col overflow-hidden shadow-sm ${className}`}
      {...props}
    >
      <div className="flex-1">
        <img
          src={image}
          alt={title}
          className=""
        />
      </div>

      <div className="p-4 flex flex-col gap-2">
        <Text className="text-base font-bold">{title}</Text>
        <Text>{description}</Text>
        <Button className="self-start">view here</Button>
      </div>
    </div>
  );
};

export default CardLegend;
