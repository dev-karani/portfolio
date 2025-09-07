import React from 'react'
import { NavLink } from 'react-router-dom';
import Container from '../pieces/container';

const Sidebar = () =>{
  const links = ["overview", "cloud", "networking", "security", "software"];

  return (
    <Container>
      <div className="flex flex-col gap-4 mt-48 sticky top-0 pt-5">
      {links.map((link) => (
        <NavLink
          key={link}
          to={link === "overview" ? "/legend" : `/legend/${link}`}
          end 
          className={({ isActive }) =>
            `capitalize ${isActive ? "font-bold text-black" : " text-gray-600"}`
          }
        >
          {link}
        </NavLink>
      ))}
    </div>
    </Container>
    
  );
};

export default Sidebar;