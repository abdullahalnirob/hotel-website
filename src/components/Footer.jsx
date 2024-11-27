import React from "react";
import logo from "../assets/logo.png";
const Footer = () => {
  return (
    <div>
      <footer className="py-20 gap-4 px-10 md:px-20 bg-black text-white mt-10">
        <div className="grid grid-cols-1 md:grid-cols-4">
          <div className="flex flex-col items-start space-y-8">
            <img src={logo} alt="" className="w-1/2" />
            <div>
              <h1 className="text-gray-300">
                Discover a world of comfort, luxury, and adventure as you
                explore our curated selection of hotels, making every moment of
                your getaway truly extraordinary.
              </h1>
            </div>
            <div className="pb-4">
              <button className="ring-1 text-yellow-300 hover:text-white hover:bg-yellow-300 duration-300 ring-yellow-300 px-4 py-2 rounded-md">
                Book now
              </button>
            </div>
          </div>
          <div className="space-y-4 pb-4">
            <h1 className="text-2xl  font-bold mb-4">QUICK LINKS</h1>
            <li className="list-none text-gray-500 hover:text-white cursor-pointer  duration-200">
              Browse Destinations
            </li>
            <li className="list-none text-gray-500 hover:text-white cursor-pointer  duration-200">
              Special Offers & Packages
            </li>
            <li className="list-none text-gray-500 hover:text-white cursor-pointer  duration-200">
              Room Types & Amenities
            </li>
            <li className="list-none text-gray-500 hover:text-white cursor-pointer  duration-200">
              Customer Reviews & Ratings
            </li>
            <li className="list-none text-gray-500 hover:text-white cursor-pointer  duration-200">
              Travel Tips & Guides
            </li>
          </div>
          <div className="space-y-4 pb-4">
            <h1 className="text-2xl  font-bold mb-4">OUR SERVICES</h1>
            <li className="list-none text-gray-500 hover:text-white cursor-pointer  duration-200">
              Concierge Assistance
            </li>
            <li className="list-none text-gray-500 hover:text-white cursor-pointer  duration-200">
              Flexible Booking Options
            </li>
            <li className="list-none text-gray-500 hover:text-white cursor-pointer  duration-200">
              Airport Transfers
            </li>
            <li className="list-none text-gray-500 hover:text-white cursor-pointer  duration-200">
              Wellness & Recreation
            </li>
          </div>
          <div className="space-y-5">
            <h1 className="text-2xl  font-bold mb-4">CONTACT US</h1>
            <li>abdullahalnirob12@gmail.com</li>
            <li>codecraftor.web@gmail.com</li>
          </div>
        </div>
        <h1 className="mt-20 text-gray-400">
          <center>
            &copy; {new Date().getFullYear()} abdullahalnirob power by{" "}
            <a
              href="https://codecraftor.xyz/"
              target="_blank"
              className="underline"
            >
              codecraftor
            </a>
            .
          </center>
        </h1>
      </footer>
    </div>
  );
};

export default Footer;
