import React from "react";
import Text from "../tokens/atoms/text";
import { Link } from "react-router-dom";

const CardLegend = ({ image, title, description, tags, date, onSelect, to, className = "" }) => {
  const inner = (
    <div className="h-full flex flex-col overflow-hidden bg-white transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 hover:scale-[1.03]">
      <div className="aspect-[16/9] w-full overflow-hidden bg-gray-100">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            No image
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col gap-2">
        <Text className="text-small font-bold">{title}</Text>
        <Text className="text-sm text-gray-600 line-clamp-3">{description}</Text>

        {tags && (
          <div className="flex gap-2 flex-wrap mt-2">
            {tags.map((tag, i) => (
              <span key={i} className="bg-green-200 rounded-full px-2 py-1 text-xs">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  if (typeof onSelect === "function") {
    return (
      <div
        onClick={() => onSelect({ image, title, description, tags, date })}
        className={`cursor-pointer ${className}`}
      >
        {inner}
      </div>
    );
  }

  return (
    <Link to={to || "#"} className={className}>
      {inner}
    </Link>
  );
};

export default CardLegend;
