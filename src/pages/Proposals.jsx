import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Proposals = () => {
  return (
    <div>
      <form className="flex flex-col gap-10">
        <div className="flex flex-col shadow-[0_0_15px_rgba(0,0,0,0.25)]">
          <div className="flex justify-between items-center border-b border-gray-300 p-5">
            <h1 className="text-xl">Latest Proposals</h1>

            <div className="flex items-center w-70 border border-gray-300 rounded-sm ">
              <div className="flex items-center h-12 w-full text-md">
                <input
                  type="text"
                  placeholder="Search by title"
                  className="pl-4 w-50 outline-none"
                />
              </div>
              <Link
                to="/dashboard/projects/proposal"
                className="h-12 px-5 flex items-center bg-[#E17A1B] text-white cursor-pointer"
              >
                <FaSearch />
              </Link>
            </div>
          </div>
          <div className="p-7">
            <div className="flex flex-col gap-4 h-[700px] justify-center items-center border-2 border-dashed border-gray-200">
              <img
                src="https://2am.ng/wp-content/uploads/2024/08/out-of-stock.png"
                alt="out-of-stock"
                className="h-[200px]"
              />
              <p className="text-xl text-gray-400">
                There are no proposals, have been submitted yet
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Proposals;
