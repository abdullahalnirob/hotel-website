import React, { useState } from "react";
import { useForm } from "react-hook-form";
import room1 from "../assets/room-1.jpg";
import room2 from "../assets/room-2.jpg";
import room3 from "../assets/room-3.jpg";
import { toast } from "react-toastify";

const Rooms = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data)

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

  const  handleBooking = async (data) => {
    toast.success("Successfully Booked!");
    setSelectedRoom(null);
    const {username,userEmail,phoneNumber,date,days}=data
    const formDatas = {
      RoomName: selectedRoom.description,
      username, userEmail,phoneNumber,date,days
    }
    console.log(formDatas);
    let res = await fetch('http://localhost:3000/',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(formDatas)});
    res = await res.text()
    console.log(data,res);
  };

  return (
    <div className="my-20 px-10 md:px-32" id="booking">
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
            onClick={() =>
              !bookedRooms.includes(room.id) && setSelectedRoom(room)
            }
          >
            <img src={room.img} alt={room.title} className="" />
            <h1 className="text-xl font-bold mt-4">{room.title}</h1>
            <div className="my-2 text-gray-500">{room.description}</div>
            <h1 className="text-md font-bold">
              <span className="text-gray-500">Starting from</span> {room.price}
            </h1>
            <button
              className={`bg-yellow-400 hover:bg-yellow-500" my-3 text-white px-4 py-2 rounded-md`}
            >
              Book now
            </button>
          </div>
        ))}
      </div>
      {/* Modal */}
      {selectedRoom && (
        <div className="fixed z-50 inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <form onSubmit={handleSubmit(handleBooking)}>
            <div className="bg-white px-6 py-7 rounded-lg w-11/12 md:w-1/3">
              <button
                type="button"
                className="bg-red-500 mb-2 text-white px-4 py-1 rounded-md float-right"
                onClick={handleCloseModal}
              >
                Close
              </button>
              <input
                type="text"
                className="outline-none border-2 border-gray-300 focus:border-yellow-300 rounded-lg py-2 px-4 w-full mb-4"
                defaultValue={selectedRoom.title}
                disabled
              />
              <input
                {...register("username", { required: true })}
                type="text"
                className="outline-none border-2 border-gray-300 focus:border-yellow-300 rounded-lg py-2 px-4 w-full mb-4"
                placeholder="Enter your name"
              />
              {errors.username && <span className="text-red-500">Name is required</span>}
              <input
                {...register("userEmail", { required: true })}
                type="email"
                className="outline-none border-2 border-gray-300 focus:border-yellow-300 rounded-lg py-2 px-4 w-full mb-4"
                placeholder="Enter your email"
              />
              {errors.userEmail && <span className="text-red-500">Email is required</span>}
              <input
                {...register("phoneNumber", { required: true })}
                type="number"
                className="outline-none border-2 border-gray-300 focus:border-yellow-300 rounded-lg py-2 px-4 w-full mb-4"
                placeholder="Enter your number"
              />
              {errors.phoneNumber && (
                <span className="text-red-500">Phone number is required</span>
              )}
              <input
                {...register("date", { required: true })}
                type="date"
                className="outline-none border-2 border-gray-300 focus:border-yellow-300 rounded-lg py-2 px-4 w-full mb-4"
              />
              {errors.date && <span className="text-red-500">Date is required</span>}
              <input
                {...register("days", { required: true })}
                type="number"
                className="outline-none border-2 border-gray-300 focus:border-yellow-300 rounded-lg py-2 px-4 w-full mb-4"
                placeholder="Enter number of days"
              />
              {errors.days && <span className="text-red-500">Days are required</span>}
              <div className="my-2">
                <input
                  type="checkbox"
                  {...register("terms", { required: true })}
                  id="ck"
                />
                <label htmlFor="ck" className="ml-2">
                  Accept all terms.
                </label>
                {errors.terms && <span className="text-red-500">You must accept the terms</span>}
              </div>
              <button
                type="submit"
                className="bg-yellow-300 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded-lg w-full"
              >
                Book
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Rooms;
