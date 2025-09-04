import React from "react";
import Text from "../tokens/atoms/text";
import { NavLink } from "react-router-dom";
import Container from "./container";

const Navbar = () => {
  return (
    <Container>
      <nav className="py-2"> 
      <div className="flex justify-between items-center">
        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive ? "font-bold text-blue-500" : "text-gray-700"
          }
        >
          <Text>Home</Text>
        </NavLink>

        <ul className="flex gap-20">
          <li>
            <NavLink
              to="/legend"
              className={({ isActive }) =>
                isActive ? "font-bold underline text-blue-500" : "text-gray-700"
              }
            >
              <Text>Legend</Text>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "font-bold underline text-blue-500" : "text-gray-700"
              }
            >
              <Text>About</Text>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? "font-bold underline text-blue-500" : "text-gray-700"
              }
            >
              <Text>Projects</Text>
            </NavLink>
          </li>
        </ul>

        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Text>Linkedin</Text>
        </a>
      </div>
    </nav>
    </Container>
  );
};

export default Navbar;
