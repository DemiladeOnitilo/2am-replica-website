import React from "react";
import { FaFilter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Messages = () => {
  return (
    <div className="flex flex-col shadow-[0_0_15px_rgba(0,0,0,0.25)]">
      <div className="flex justify-between items-center border-b border-gray-300 p-5">
        <h1 className="text-xl">Ongoing services</h1>
      </div>
      <div className="flex h-[1000px]">
        <div className="w-[30%] bg-gray-50 border-r border-gray-200">
          <div className="p-7 bg-white w-full">
            <div className="flex items-center w-full border border-gray-300 rounded-sm bg-white">
              <div className="flex items-center h-12 w-full text-md">
                <input
                  type="text"
                  placeholder="Search chat users"
                  className="pl-4 w-50 outline-none"
                />
              </div>
              <Link
                className="h-12 px-5 flex items-center bg-[#E17A1B] text-white cursor-pointer"
              >
                <FaFilter />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center w-[70%]">
          <div className="flex flex-col gap-3">
            <img
              src="https://2am.ng/wp-content/themes/workreap/images/message-img.png"
              alt=""
              className="w-50 h-50"
            />
            <p>No message selected to display</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
