import React from "react";
import { FaShieldAlt } from "react-icons/fa";
import { Ri24HoursFill } from "react-icons/ri";
import { FaMap } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa6";
import servicesImg from "../assets/service.jpg";
const Services = () => {
  return (
    <div id="services" className="px-10 md:px-32 my-20 flex flex-col md:flex-row justify-between items-center overflow-x-hidden">
      <div className="md:w-1/2">
        <div>
          <h1>SERVICES</h1>
          <div className="bg-yellow-300 h-[2px] mx-2 w-32"></div>
        </div>
        <h1 className="text-black my-4 text-4xl font-bold border-l-4 border-yellow-300 pl-4">
          Strive Only For The Best.
        </h1>
        <div className="space-y-8">
          <div className="flex items-center space-x-5">
            <div className="p-3 bg-blue-200 rounded-full">
              <FaShieldAlt className="text-blue-400 text-3xl" />
            </div>
            <h1 className="text-xl font-semibold text-gray-700">
              High Class Security
            </h1>
          </div>
          <div className="flex items-center space-x-5">
            <div className="p-3 bg-pink-200 rounded-full">
              <Ri24HoursFill className="text-pink-400 text-3xl" />
            </div>
            <h1 className="text-xl font-semibold text-gray-700">
              24 Hours Room Service
            </h1>
          </div>
          <div className="flex items-center space-x-5">
            <div className="p-3 bg-purple-200 rounded-full">
              <FaHeadphones className="text-purple-400 text-3xl" />
            </div>
            <h1 className="text-xl font-semibold text-gray-700">
              Conference Room
            </h1>
          </div>
          <div className="flex items-center space-x-5">
            <div className="p-3 bg-green-200 rounded-full">
              <FaMap className="text-green-400 text-3xl" />
            </div>
            <h1 className="text-xl font-semibold text-gray-700">
              Tourist Guide Support
            </h1>
          </div>
        </div>
      </div>
      <div>
        <img
          src={servicesImg}
          alt=""
          className="relative transform my-4 md:translate-x-60"
        />
      </div>
    </div>
  );
};

export default Services;
