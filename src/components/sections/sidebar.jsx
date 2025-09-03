import React from 'react'
import { NavLink } from 'react-router-dom';

const Sidebar = () =>{
    const links = ["overview", "cloud", "networking", "security"];

  return (
    <div className="flex flex-col gap-4 p-4">
      {links.map((link) => (
        <NavLink
          key={link}
          to={link === "overview" ? "/legend" : `/legend/${link}`}
          end 
          className={({ isActive }) =>
            `capitalize ${isActive ? "font-bold text-black" : "text-gray-500"}`
          }
        >
          {link}
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;