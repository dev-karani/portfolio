import React from "react";
import Button from "../tokens/atoms/button";

const Wide = ({
  image,
  title,
  date,
  description,
  className = "",
}) => {
  
  return (
    <div
      className={`h-full w-full flex flex-col border border-black overflow-hidden ${className}`}
    >
      {image && (
        <img src={image} alt={title} className="w-full object-cover h-[35%]" />
      )}

      <div className="p-4 flex flex-col flex-1 justify:between, items-start;">
        <div>
        {title && <p className="font-bold text-2xl mb-4">{title}</p>}  
        {date && <p className="text-xs font-thin mb-2 ">{date}</p>}
        {description && (
          <p className="text-sm mb-6">{description}</p>
        )}
        <Button className="py-0">view here</Button>
        </div>

      </div>
    </div>
  )
}

export default Wide;