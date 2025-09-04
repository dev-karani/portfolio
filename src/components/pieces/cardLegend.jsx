import React from "react";
import Header from "../tokens/atoms/Header";
import Text from "../tokens/atoms/text";
import Button from "../tokens/atoms/button";
import { Link } from "react-router-dom";

const CardLegend = ({ image, title, description, to, className = "", ...props }) => {
  return (
    <Link
      to = {to}
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

      <div className="p-6 flex flex-col gap-2">
        <Text className="text-small font-bold">{title}</Text>
        <Text>{description}</Text>
        {props.tags && (
            <div className="flex gap-2 flex-wrap mt-2">
              {props.tags.map((tag, i) => (
                <span key={i} className="bg-gray-200 rounded-full px-2 py-1">
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
