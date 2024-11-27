import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
const How = () => {
  return (
    <div>
      <div
        style={{ boxShadow: "1px 1px 5px #ccc" }}
        className="flex flex-col md:flex-row items-center justify-around gap-4 mx-10 md:mx-40 px-5 py-8 rounded-lg relative -top-20 bg-white"
      >
        <div className="flex flex-col md:block gap-4">
          <FaCalendarAlt
            className="
          text-3xl text-yellow-400
          "
          />
          <div>
            <h1>CHECK-IN</h1>
            <input
              placeholder="Check In"
              type="text"
              className="ring-1 p-1 focus:ring-yellow-300 outline-0 rounded ring-gray-400 md:w-2/3"
            />
          </div>
        </div>
        <div className="flex flex-col md:block gap-4">
          <FaCalendarAlt
            className="
          text-3xl text-yellow-400
          "
          />
          <div>
            <h1>CHECK-OUT</h1>
            <input
              placeholder="Check Out"
              type="text"
              className="ring-1 p-1 focus:ring-yellow-300 outline-0 rounded ring-gray-400 md:w-2/3"
            />
          </div>
        </div>
        <div className="flex flex-col md:block gap-4">
          <FaUserAlt
            className="
          text-3xl text-yellow-400
          "
          />
          <div>
            <h1>GUEST</h1>
            <input
              placeholder="Guest"
              type="text"
              className="ring-1 p-1 focus:ring-yellow-300 outline-0 rounded ring-gray-400 md:w-2/3"
            />
          </div>
        </div>
        <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-5 py-3 rounded-md">
          CHECK OUT
        </button>
      </div>
    </div>
  );
};

export default How;
