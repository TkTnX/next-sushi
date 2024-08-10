import * as React from "react";
import { navbarItems } from "./constants";

interface INavbarProps {}

const Navbar: React.FunctionComponent<INavbarProps> = (props) => {
  return (
    <nav>
      <ul className="flex items-center gap-12">
        {navbarItems.map((item) => (
          <li key={item.url}>
            <a
              className="block text-[#1d1d1f] hover:text-[#f63] transition duration-200 py-5 px-4 hover:bg-[#ff6633] hover:bg-opacity-15 rounded-lg"
              href={item.url}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
