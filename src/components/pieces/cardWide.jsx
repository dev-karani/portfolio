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
      className={`h-[70%] w-full flex flex-col border border-black overflow-hidden ${className}`}
    >
      {image && (
        <img src={image} alt={title} className="w-full object-cover h-[55%]" />
      )}

      <div className="p-4 flex flex-col, items-start;">
        <div className=" flex-1 flex-col">
          {title && <p className="font-bold text-2xl mb-4">{title}</p>}  

          <div className="">
            <div className="flex ">
              <div className="flex flex-col basis-2/5 h-full justify-between">
                  {date && <p className="text-xs font-thin mb-2 ">{date}</p>}
                  <Button className="py-0 w-fit">view here</Button>
              </div>
              <div className="basis-3/5 flex-1">
                  {description && (<p className="text-sm mb-6 ">{description}</p>)}
              </div> 
             </div>      
          </div>

        </div>
      </div>
    </div>
  )
}

export default Wide;