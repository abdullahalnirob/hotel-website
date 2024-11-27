import React from "react";
import room1 from "../assets/room-1.jpg";
import room2 from "../assets/room-2.jpg";
import room3 from "../assets/room-3.jpg";
const Rooms = () => {
  return (
    <div className="my-20 px-10 md:px-32">
      <div className="md:w-1/2">
        <div className="flex items-center">
          <h1>OUR LIVING ROOM</h1>
          <div className="bg-yellow-300 h-[2px] mx-2 w-32"></div>
        </div>
        <h1 className="text-black my-4 text-4xl font-bold border-l-4 border-yellow-300 pl-4">
          The Most Memorable Rest Time Starts Here.
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <img src={room1} alt="" className="" />
          <h1 className="text-xl font-bold mt-4">Deluxe Ocean View</h1>
          <div className="my-2 text-gray-500">
            Bask in luxury with breathtaking ocean views from your private
            suite.
          </div>
          <h1 className="text-md font-bold">
            <span className="text-gray-500">Starting from</span> $299/night
          </h1>
          <button className="bg-yellow-400 my-3 hover:bg-yellow-500 text-white px-4 py-2 rounded-md">
            Book now
          </button>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <img src={room2} alt="" className="" />
          <h1 className="text-xl font-bold mt-4">Executive Cityscape Room</h1>
          <div className="my-2 text-gray-500">
            Experience urban elegance and modern comfort in the heart of the
            city.
          </div>
          <h1 className="text-md font-bold">
            <span className="text-gray-500">Starting from</span> $199/night
          </h1>
          <button className="bg-yellow-400 my-3 hover:bg-yellow-500 text-white px-4 py-2 rounded-md">
            Book now
          </button>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <img src={room3} alt="" className="" />
          <h1 className="text-xl font-bold mt-4">Family Garden Retreat</h1>
          <div className="my-2 text-gray-500">
            Spacious and inviting, perfect for creating cherished memories with
            loved ones.
          </div>
          <h1 className="text-md font-bold">
            <span className="text-gray-500">Starting from</span> $249/night
          </h1>
          <button className="bg-yellow-400 my-3 hover:bg-yellow-500 text-white px-4 py-2 rounded-md">
            Book now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
