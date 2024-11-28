// import React from "react";
// import room1 from "../assets/room-1.jpg";
// import room2 from "../assets/room-2.jpg";
// import room3 from "../assets/room-3.jpg";
// const Rooms = () => {
//   return (
//     <div className="my-20 px-10 md:px-32">
//       <div className="md:w-1/2">
//         <div className="flex items-center">
//           <h1>OUR LIVING ROOM</h1>
//           <div className="bg-yellow-300 h-[2px] mx-2 w-32"></div>
//         </div>
//         <h1 className="text-black my-4 text-4xl font-bold border-l-4 border-yellow-300 pl-4">
//           The Most Memorable Rest Time Starts Here.
//         </h1>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
//         <div className="bg-white p-4 rounded-lg shadow-lg">
//           <img src={room1} alt="" className="" />
//           <h1 className="text-xl font-bold mt-4">Deluxe Ocean View</h1>
//           <div className="my-2 text-gray-500">
//             Bask in luxury with breathtaking ocean views from your private
//             suite.
//           </div>
//           <h1 className="text-md font-bold">
//             <span className="text-gray-500">Starting from</span> $299/night
//           </h1>
//           <button className="bg-yellow-400 my-3 hover:bg-yellow-500 text-white px-4 py-2 rounded-md">
//             Book now
//           </button>
//         </div>
//         <div className="bg-white p-4 rounded-lg shadow-lg">
//           <img src={room2} alt="" className="" />
//           <h1 className="text-xl font-bold mt-4">Executive Cityscape Room</h1>
//           <div className="my-2 text-gray-500">
//             Experience urban elegance and modern comfort in the heart of the
//             city.
//           </div>
//           <h1 className="text-md font-bold">
//             <span className="text-gray-500">Starting from</span> $199/night
//           </h1>
//           <button className="bg-yellow-400 my-3 hover:bg-yellow-500 text-white px-4 py-2 rounded-md">
//             Book now
//           </button>
//         </div>
//         <div className="bg-white p-4 rounded-lg shadow-lg">
//           <img src={room3} alt="" className="" />
//           <h1 className="text-xl font-bold mt-4">Family Garden Retreat</h1>
//           <div className="my-2 text-gray-500">
//             Spacious and inviting, perfect for creating cherished memories with
//             loved ones.
//           </div>
//           <h1 className="text-md font-bold">
//             <span className="text-gray-500">Starting from</span> $249/night
//           </h1>
//           <button className="bg-yellow-400 my-3 hover:bg-yellow-500 text-white px-4 py-2 rounded-md">
//             Book now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Rooms;

// import React, { useState } from "react";
// import room1 from "../assets/room-1.jpg";
// import room2 from "../assets/room-2.jpg";
// import room3 from "../assets/room-3.jpg";
// import { toast } from "react-toastify";

// const Rooms = () => {
//   const [selectedRoom, setSelectedRoom] = useState(null);
//   const [buttonData, setbuttonData] = useState("Book now");

//   const rooms = [
//     {
//       id: 1,
//       title: "Deluxe Ocean View",
//       description:
//         "Bask in luxury with breathtaking ocean views from your private suite.",
//       price: "$299/night",
//       img: room1,
//     },
//     {
//       id: 2,
//       title: "Executive Cityscape Room",
//       description:
//         "Experience urban elegance and modern comfort in the heart of the city.",
//       price: "$199/night",
//       img: room2,
//     },
//     {
//       id: 3,
//       title: "Family Garden Retreat",
//       description:
//         "Spacious and inviting, perfect for creating cherished memories with loved ones.",
//       price: "$249/night",
//       img: room3,
//     },
//   ];

//   const handleCloseModal = () => {
//     setSelectedRoom(null);
//   };
//   const handleBooking = () => {
//     toast.success("Successfully Booked", {
//     });
//     setSelectedRoom(null);
//   };
//   return (
//     <div className="my-20 px-10 md:px-32">
//       <div className="md:w-1/2">
//         <div className="flex items-center">
//           <h1>OUR LIVING ROOM</h1>
//           <div className="bg-yellow-300 h-[2px] mx-2 w-32"></div>
//         </div>
//         <h1 className="text-black my-4 text-4xl font-bold border-l-4 border-yellow-300 pl-4">
//           The Most Memorable Rest Time Starts Here.
//         </h1>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
//         {rooms.map((room) => (
//           <div
//             key={room.id}
//             className="bg-white p-4 rounded-lg shadow-lg cursor-pointer"
//             onClick={() => setSelectedRoom(room)}
//           >
//             <img src={room.img} alt={room.title} className="" />
//             <h1 className="text-xl font-bold mt-4">{room.title}</h1>
//             <div className="my-2 text-gray-500">{room.description}</div>
//             <h1 className="text-md font-bold">
//               <span className="text-gray-500">Starting from</span> {room.price}
//             </h1>
//             <button className="bg-yellow-400 my-3 hover:bg-yellow-500 text-white px-4 py-2 rounded-md">
//               {buttonData}
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Modal */}
//       {selectedRoom && (
//         <div className="fixed z-50 inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white px-6 py-2 rounded-lg w-11/12 md:w-1/3">
//             <button
//               className="bg-red-500 mb-2 text-white px-4 py-1 rounded-md float-right"
//               onClick={handleCloseModal}
//             >
//               Close
//             </button>
//             <img
//               src={selectedRoom.img}
//               alt={selectedRoom.title}
//               className="w-full h-48 object-cover rounded-lg mb-4"
//             />
//             {/* <form action=""> */}
//             <input
//               type="text"
//               className="outline-none border-2 border-gray-300 focus:border-yellow-300 rounded-lg py-2 px-4 w-full mb-4"
//               value={selectedRoom.title}
//             />
//             <input
//               type="text"
//               className="outline-none border-2 border-gray-300 focus:border-yellow-300 rounded-lg py-2 px-4 w-full mb-4"
//               placeholder="Enter your name"
//             />
//             <input
//               type="email"
//               className="outline-none border-2 border-gray-300 focus:border-yellow-300 rounded-lg py-2 px-4 w-full mb-4"
//               placeholder="Enter your email"
//             />
//             <input
//               type="number"
//               className="outline-none border-2 border-gray-300 focus:border-yellow-300 rounded-lg py-2 px-4 w-full mb-4"
//               placeholder="Enter your number"
//             />
//             <input
//               type="date"
//               className="outline-none border-2 border-gray-300 focus:border-yellow-300 rounded-lg py-2 px-4 w-full mb-4"
//               placeholder="Enter your number"
//             />
//             <button
//               onClick={handleBooking}
//               className=" bg-yellow-300 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded-lg w-full"
//             >
//               Book
//             </button>
//             {/* </form> */}
//             {/* <h1 className="text-2xl font-bold">{selectedRoom.title}</h1>
//             <p className="text-gray-500 my-2">{selectedRoom.description}</p>
//             <h1 className="text-lg font-bold">{selectedRoom.price}</h1> */}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Rooms;



import React, { useState } from "react";
import room1 from "../assets/room-1.jpg";
import room2 from "../assets/room-2.jpg";
import room3 from "../assets/room-3.jpg";
import { toast } from "react-toastify";

const Rooms = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [bookedRooms, setBookedRooms] = useState([]);

  const rooms = [
    {
      id: 1,
      title: "Deluxe Ocean View",
      description:
        "Bask in luxury with breathtaking ocean views from your private suite.",
      price: "$299/night",
      img: room1,
    },
    {
      id: 2,
      title: "Executive Cityscape Room",
      description:
        "Experience urban elegance and modern comfort in the heart of the city.",
      price: "$199/night",
      img: room2,
    },
    {
      id: 3,
      title: "Family Garden Retreat",
      description:
        "Spacious and inviting, perfect for creating cherished memories with loved ones.",
      price: "$249/night",
      img: room3,
    },
  ];

  const handleCloseModal = () => {
    setSelectedRoom(null);
  };

  const handleBooking = () => {
    toast.success("Successfully Booked!");
    setBookedRooms((prev) => [...prev, selectedRoom.id]);
    setSelectedRoom(null);
  };

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
        {rooms.map((room) => (
          <div
            key={room.id}
            className="bg-white p-4 rounded-lg shadow-lg cursor-pointer"
            onClick={() => !bookedRooms.includes(room.id) && setSelectedRoom(room)}
          >
            <img src={room.img} alt={room.title} className="" />
            <h1 className="text-xl font-bold mt-4">{room.title}</h1>
            <div className="my-2 text-gray-500">{room.description}</div>
            <h1 className="text-md font-bold">
              <span className="text-gray-500">Starting from</span> {room.price}
            </h1>
            <button
              className={`${
                bookedRooms.includes(room.id)
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-yellow-400 hover:bg-yellow-500"
              } my-3 text-white px-4 py-2 rounded-md`}
              disabled={bookedRooms.includes(room.id)}
            >
              {bookedRooms.includes(room.id) ? "Booked" : "Book now"}
            </button>
          </div>
        ))}
      </div>
      {/* Modal */}
      {selectedRoom && (
        <div className="fixed z-50 inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white px-6 py-2 rounded-lg w-11/12 md:w-1/3">
            <button
              className="bg-red-500 mb-2 text-white px-4 py-1 rounded-md float-right"
              onClick={handleCloseModal}
            >
              Close
            </button>
            <img
              src={selectedRoom.img}
              alt={selectedRoom.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <input
              type="text"
              className="outline-none border-2 border-gray-300 focus:border-yellow-300 rounded-lg py-2 px-4 w-full mb-4"
              value={selectedRoom.title}
              disabled
            />
            <input
              type="text"
              className="outline-none border-2 border-gray-300 focus:border-yellow-300 rounded-lg py-2 px-4 w-full mb-4"
              placeholder="Enter your name"
            />
            <input
              type="email"
              className="outline-none border-2 border-gray-300 focus:border-yellow-300 rounded-lg py-2 px-4 w-full mb-4"
              placeholder="Enter your email"
            />
            <input
              type="number"
              className="outline-none border-2 border-gray-300 focus:border-yellow-300 rounded-lg py-2 px-4 w-full mb-4"
              placeholder="Enter your number"
            />
            <input
              type="date"
              className="outline-none border-2 border-gray-300 focus:border-yellow-300 rounded-lg py-2 px-4 w-full mb-4"
            />
            <button
              onClick={handleBooking}
              className="bg-yellow-300 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded-lg w-full"
            >
              Book
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Rooms;
