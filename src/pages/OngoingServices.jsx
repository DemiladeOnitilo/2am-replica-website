import React from "react";
import { FaSearch } from "react-icons/fa";
import { FiFilePlus } from "react-icons/fi";
import { Link } from "react-router-dom";

const OngoingServices = () => {
  return (
    <div>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col shadow-[0_0_15px_rgba(0,0,0,0.25)]">
          <div className="flex justify-between items-center border-b border-gray-300 p-5">
            <h1 className="text-xl">Ongoing services</h1>

            <div className="flex items-center w-70 border border-gray-300 rounded-sm ">
              <div className="flex items-center h-12 w-full text-md">
                <input
                  type="text"
                  placeholder="Search by title"
                  className="pl-4 w-50 outline-none"
                />
              </div>
              <Link
                to="/dashboard/services/ongoing-services"
                className="h-12 px-5 flex items-center bg-[#E17A1B] text-white cursor-pointer"
              >
                <FaSearch />
              </Link>
            </div>
          </div>
          <div className="p-7">
            <div className="flex flex-col gap-4 h-[700px] justify-center items-center border-2 border-dashed border-gray-200">
              <FiFilePlus className="text-[#E17A1B]" size={200} />
              <p className="text-xl text-gray-400">No ongoing service yet.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OngoingServices;
