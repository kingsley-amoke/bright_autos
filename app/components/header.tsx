import React from "react";
import CarIcon from "../icons/car_icon";
import { primaryColor } from "../colors/colors";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-12 p-4 bg-gray-800 text-white">
      <div className="flex items-center space-x-2">
        <div className={`bg-${primaryColor} px-2 py-3 rounded-md`}>
          <CarIcon />
        </div>
        <h1 className="text-xl font-bold uppercase">brightson autos</h1>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li className={`hover:text-orange-500`}>
            <a href="#inventory">Inventory</a>
          </li>
          <li className={`hover:text-orange-500`}>
            <a href="/inventory">Services</a>
          </li>
          <li className={`hover:text-orange-500`}>
            <a href="/about">About</a>
          </li>
          <li className={`hover:text-orange-500`}>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>

      <div />
    </div>
  );
};

export default Header;
