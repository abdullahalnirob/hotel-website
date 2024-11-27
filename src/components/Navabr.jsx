import React, { useState } from "react";
import logo from "../assets/logo.png";
const Navabr = () => {
  const [Istoggle, settoggle] = useState(false);
  const toggle = () => {
    settoggle(!Istoggle);
  };
  return (
    <div>
      <nav className="p-5 xl:p-10 bg-yellow-300 xl:bg-transparent flex justify-between items-center">
        <div className="w-40">
          <img src={logo} alt="logo" className="w-[100%]" />
        </div>
        <ul
          className={`xl:flex xl:items-center xl:space-x-8 text-white text-[16px]
         absolute space-y-7 xl:space-y-0 p-5 xl:p-0 xl:static
         bg-[#ffee00d8] xl:bg-transparent w-[100%] xl:w-[auto]  left-0 right-0 ${
           Istoggle ? "top-[80px] duration-200" : "top-[-270px] duration-200"
         }`}
        >
          <li className="hover:text-gray-300 cursor-pointer">Home</li>
          <li className="hover:text-gray-300 cursor-pointer">About</li>
          <li className="hover:text-gray-300 cursor-pointer">Services</li>
          <li className="hover:text-gray-300 cursor-pointer">Contact</li>
        </ul>
        <div className="flex items-center space-x-5">
          <button className="bg-yellow-400 shadow-lg hover:bg-yellow-500 text-white px-4 py-2 rounded-md">
            Book now
          </button>
          <div onClick={toggle} className="xl:hidden cursor-pointer">
            {Istoggle ? (
              <i class="fa-solid fa-xmark text-white text-2xl"></i>
            ) : (
              <i className="fa-solid fa-bars text-white text-2xl"></i>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navabr;
