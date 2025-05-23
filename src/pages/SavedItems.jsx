import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";

const SavedItems = () => {
  const [isActive, setIsActive] = useState(0);

  return (
    <div className="flex gap-10">
      <div className="flex shadow-[0_0_15px_rgba(0,0,0,0.25)] h-full w-[75%]">
        <div className="flex flex-col bg-gray-50 w-[30%]">
          {[
            "Saved Jobs",
            "Saved Services",
            "Followed Companies",
            "Liked Talents",
          ].map((items, index) => (
            <div
              key={index}
              onClick={() => setIsActive(index)}
              className="group relative"
            >
              <ul
                className={`flex  ${
                  isActive === index
                    ? "bg-white text-black"
                    : "text-gray-400 hover:text-black hover:bg-white"
                } transition-all ease-in-out duration-700`}
              >
                <div
                  className={`absolute left-0 top-0 w-1 h-full bg-[#E17A1B] rounded-t transition-all duration-700 scale-y-0 origin-top group-hover:scale-y-100 z-1 ${
                    isActive === index && "scale-y-100"
                  }`}
                ></div>
                <li className="p-4 pl-9 w-full cursor-pointer">{items}</li>
              </ul>
            </div>
          ))}
        </div>
        <div className="h-full min-h-[600px] p-8 w-[70%]">
          {isActive === 0 && (
            <div className="flex flex-col gap-10">
              <div className="bg-gray-50 relative w-full p-3 text-black font-bold">
                <div className="absolute left-0 top-0 w-1 h-full bg-[#E17A1B] rounded-t transition-all duration-700 origin-top z-1 scale-y-100 "></div>
                <h2 className="ml-5">Saved jobs listing</h2>
              </div>
              <div className="flex flex-col gap-4 h-[700px] justify-center items-center border-2 border-dashed dashed-spaced border-gray-200">
                <FaHeart className="text-[#E17A1B]" size={200} />
                <p className="text-xl text-gray-400">
                  You have not saved any jobs in your favorite list.
                </p>
              </div>
            </div>
          )}
          {isActive === 1 && (
            <div className="flex flex-col gap-10">
              <div className="bg-gray-50 relative w-full p-3 text-black font-bold">
                <div className="absolute left-0 top-0 w-1 h-full bg-[#E17A1B] rounded-t transition-all duration-700 origin-top z-1 scale-y-100 "></div>
                <h2 className="ml-5">Saved services listing</h2>
              </div>
              <div className="flex flex-col gap-4 h-[700px] justify-center items-center border-2 border-dashed dashed-spaced border-gray-200">
                <FaHeart className="text-[#E17A1B]" size={200} />
                <p className="text-xl text-gray-400">
                  You have not saved any services to your favorite list.
                </p>
              </div>
            </div>
          )}
          {isActive === 2 && (
            <div className="flex flex-col gap-10">
              <div className="bg-gray-50 relative w-full p-3 text-black font-bold">
                <div className="absolute left-0 top-0 w-1 h-full bg-[#E17A1B] rounded-t transition-all duration-700 origin-top z-1 scale-y-100 "></div>
                <h2 className="ml-5">Followed companies listing</h2>
              </div>
              <div className="flex flex-col gap-4 h-[700px] justify-center items-center border-2 border-dashed dashed-spaced border-gray-200">
                <FaHeart className="text-[#E17A1B]" size={200} />
                <p className="text-xl text-gray-400">
                  You have not saved any companies in your favorite list.
                </p>
              </div>
            </div>
          )}
          {isActive === 3 && (
            <div className="flex flex-col gap-10">
              <div className="bg-gray-50 relative w-full p-3 text-black font-bold">
                <div className="absolute left-0 top-0 w-1 h-full bg-[#E17A1B] rounded-t transition-all duration-700 origin-top z-1 scale-y-100 "></div>
                <h2 className="ml-5">Liked talents listing</h2>
              </div>
              <div className="flex flex-col gap-4 h-[700px] justify-center items-center border-2 border-dashed dashed-spaced border-gray-200">
                <FaHeart className="text-[#E17A1B]" size={200} />
                <p className="text-xl text-gray-400">
                  You have not saved any talents in your favorite list.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-10 w-[25%] ">
        {[
          { name: "Saved jobs", color: "#0aac0a" },
          { name: "Saved services", color: "#8a2be2" },
          { name: "followed companies", color: "#3B82F6" },
          { name: "Liked talents", color: "#8a2be2" },
        ].map((items, index) => (
          <div className="flex gap-5 w-full border border-gray-300 p-7">
            <div>
              <FaHeart className="text-[#E17A1B]" size={70} />
            </div>
            <span className="w-[1px] h-full bg-gray-300"></span>
            <div className="flex flex-col">
              <p className="text-xl " style={{ color: items.color }}>
                0
              </p>
              <p className="text-md text-gray-400">{items.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedItems;
