import React from "react";
import heroImg from "../assets/header.jpg";
import Navabr from "./Navabr";
const Hero = () => {
  return (
    <div
      style={{ backgroundImage: `url(${heroImg})` }}
      className="h-screen bg-cover bg-center"
    >
      <Navabr />
      <div className="flex flex-col justify-center items-center my-20 text-center">
        <h2 className="text-gray-300 text-xl py-2">Simple - Unique - Friendly</h2>
        <h1 className="text-5xl mx-3 md:text-7xl font-bold text-white">
          Make Yourself At Home
        </h1>
        <h1 className="text-5xl mx-3 md:text-7xl font-bold text-white">
          In Our <span className="text-yellow-400">Hotel</span>.
        </h1>
        <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-5 py-3 mt-10 rounded-md">
          Book now
        </button>
      </div>
    </div>
  );
};

export default Hero;
