import React from "react";
import Text from "../tokens/atoms/text";

const Navbar = () => {
  return (
    <nav className="py-2

     "> {/* only vertical padding, since Container handles x-padding */}
        <div className=" flex justify-between items-center ">
          <a href="/" className=""><Text className="font-bold">Cherry</Text></a>

          <ul className="flex gap-20">
            <li><Text>Legend</Text></li>
            <li><Text>About Me</Text></li>
            <li><Text>Projects</Text></li>

          </ul>

          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Text>Linkedin</Text>
          </a>
        </div>
    </nav>
  );
};

export default Navbar;
