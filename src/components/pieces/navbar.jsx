import React from "react";
import Text from "../tokens/atoms/text";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="py-2
     "> 
        <div className=" flex justify-between items-center ">
          <Link to='/Home' className="">
              <Text className="font-bold">Home</Text>
          </Link>
          <ul className="flex gap-20">
            <li>
              <Link to='/Legend'>
                  <Text>Legend</Text>
              </Link>
            </li>
            <li>
              <Link to='/About'>
                  <Text>About</Text>
              </Link>
            </li><li>
              <Link to='/Projects'>
                  <Text>Projects</Text>
              </Link>
            </li>
          </ul>

          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Text>Linkedin</Text>
          </a>
        </div>
    </nav>
  );
};

export default Navbar;
