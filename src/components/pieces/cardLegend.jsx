import React from "react";
import Header from "../tokens/atoms/Header";
import Text from "../tokens/atoms/text";
import Button from "../tokens/atoms/button";
import { Link } from "react-router-dom";

const CardLegend = ({ image, title, description, to, className = "", ...props }) => {
  return (
    <Link
      to = {to}
      className={` flex-[0_0_100%] sm:flex-[0_0_25%] lg:flex-[0_0_25%] 
        h-full flex flex-col overflow-hidden shadow-sm rounded-xl 
        bg-white transition-all duration-300 ease-in-out
        hover:shadow-lg hover:-translate-y-1 hover:scale-[1.03] ${className}`}
      {...props}
    >
      <div className="aspect-[16/9] w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="transition-transform duration-500 ease-in-out hover:scale-105"
        />
      </div>

      <div className="p-padding flex flex-col gap-2">
        <Text className="text-small font-bold">{title}</Text>
        <Text>{description}</Text>
        {props.tags && (
            <div className="flex gap-2 flex-wrap mt-2">
              {props.tags.map((tag, i) => (
                <span key={i} className="bg-green-300 rounded-full px-2 py-1 text-xs">
                  {tag}
                </span>
              ))}
            </div>
        )}
      </div>
    </Link>
  );
};

export default CardLegend;
