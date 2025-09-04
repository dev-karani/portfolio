import React from "react";
import Text from "../tokens/atoms/text";
import { NavLink } from "react-router-dom";
import Container from "./container";

const Navbar = () => {
  return (
    <Container>
      <nav className="py-2 "> 
          <div className="flex gap-36 justify-center items-center">
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive ? "font-bold text-blue-500" : "text-gray-700"
              }
            >
              <Text>Home</Text>
            </NavLink>
            <NavLink
                  to="/legend"
                  className={({ isActive }) =>
                    isActive ? "font-bold underline text-blue-500" : "text-gray-700"
                  }
                >
                  <Text>Legend</Text>
             </NavLink>
            <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "font-bold underline text-blue-500" : "text-gray-700"
                  }
                >
                  <Text>About</Text>
            </NavLink>
      </div>
    </nav>
    </Container>
  );
};

export default Navbar;
