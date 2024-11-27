import React from "react";
import aboutImg from "../assets/about.jpg";
const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-around px-10 md:px-32">
      <div className="my-5 md:my-0">
        <img src={aboutImg} alt="" className="md:w-[70%]" />
      </div>
      <div className="md:w-1/2">
        <div className="flex items-center">
          <h1>ABOUT US</h1>
          <div className="bg-yellow-300 h-[2px] mx-2 w-32"></div>
        </div>
        <h1 className="text-black text-5xl font-bold">
          The Best Holidays Start Here!
        </h1>
        <p className="text-gray-500 text-md my-5 border-l-4 border-yellow-300 pl-5">
          With a focus on quality accommodations, personalized experiences, and
          seamless booking, our platform is dedicated to ensuring that every
          traveler embarks on their dream holiday with confidence and
          excitement.
        </p>
        <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-5 py-3 rounded-md">
          Read more
        </button>
      </div>
    </div>
  );
};

export default About;
