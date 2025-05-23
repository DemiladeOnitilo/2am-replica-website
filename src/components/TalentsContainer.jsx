import React from "react";
import { FaFlag, FaMoneyBill, FaHeart, FaStar } from "react-icons/fa";
import { talents } from "../components/home/talents";
import { Link } from "react-router-dom";

const TalentsContainer = () => {
  const isHome = location.pathname === "/";

  return (
    <div className="h-auto flex flex-col items-center gap-10 p-8">
      <div className="flex flex-col justify-center items-center gap-2 mt-20">
        <h1 className="text-4xl font-bold">Featured Talents</h1>
        <p className="text-lg text-gray-600">
          Discover some of the best hands you can find anywhere!
        </p>
        <span className="h-1 w-40 rounded bg-[#E17A1B] mt-3"></span>
      </div>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-4 gap-6 ">
          {talents.map((talent, index) => (
            <div
              key={index}
              className={`relative flex flex-col gap-4 border border-gray-100 p-5  hover:shadow-xl/40 transition duration-400 ${
                isHome ? "w-100" : "w-70"
              }`}
            >
              <div className="absolute top-3 right-3 group inline-flex items-center">
                <div className="h-5 w-5 bg-white rounded-full flex justify-center items-center">
                  <div className="h-3 w-3 rounded-full bg-[#E17A1B]"></div>
                </div>
                <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-red-500 text-white text-sm px-8 py-2 rounded shadow-lg whitespace-nowrap z-10">
                  <h1>Offline</h1>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-red-500" />
                </div>
              </div>
              <div className="w-full">
                <Link to={`/talents/${talent.id}`}>
                  <img
                    src={
                      talent.image
                        ? talent.image
                        : "https://2am.ng/wp-content/uploads/2024/08/360_F_417452781_3zAgEnknPGOhnpoM78VWK7G1zd9JKgvD-225x225.jpg"
                    }
                    alt=""
                    className={`w-full cursor-pointer ${
                      isHome ? "h-85" : "h-55"
                    }`}
                  />
                </Link>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <div className="relative group inline-flex items-center ">
                    <img
                      src="https://2am.ng/wp-content/uploads/2024/08/emails.png"
                      alt="email verified"
                      className="h-5"
                    />
                    <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-red-500 text-white text-sm px-8 py-2 rounded shadow-lg whitespace-nowrap z-10">
                      <h1>Email Verified</h1>
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-red-500" />
                    </div>
                  </div>
                  <div className="relative group inline-flex items-center">
                    <img
                      src="https://2am.ng/wp-content/uploads/2024/08/verified.png"
                      alt="identity verified"
                      className="h-5"
                    />
                    <div className="absolute bottom-full mb-2 left-1/5 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-red-500 text-white text-sm px-8 py-2 rounded shadow-lg whitespace-nowrap z-10">
                      <h1>Identity Verified</h1>
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-red-500" />
                    </div>
                  </div>

                  <h3>{talent.name}</h3>
                </div>
                <div>
                  <h2 className="text-xl">
                    {isHome && talent.skills?.length > 35
                      ? `${talent.skills.slice(0, 35)}...`
                      : talent.skills?.length > 20
                      ? `${talent.skills.slice(0, 20)}...`
                      : talent.skills}
                  </h2>
                </div>
                <div className="flex gap-3 items-center text-sm text-gray-400">
                  <FaMoneyBill />
                  <p>{talent.salary}</p>
                </div>
                <div className="flex gap-3 items-center text-sm text-gray-400">
                  <FaFlag />
                  <p>{talent.country}</p>
                </div>
                <div className="flex gap-3 items-center text-sm text-gray-400 cursor-pointer">
                  <FaHeart className="hover:text-red-500" />
                  <p>Save</p>
                </div>
                <div className="flex gap-3 items-center text-sm text-gray-400 cursor-pointer">
                  <FaStar className="text-yellow-500" />
                  <p>
                    0.0/5{" "}
                    <span className="text-blue-500 text-xs">(0 Feedback)</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TalentsContainer;
