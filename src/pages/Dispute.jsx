import React from "react";
import { FiFilePlus } from "react-icons/fi";

const Dispute = () => {
  return (
    <div>
      <div>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col shadow-[0_0_15px_rgba(0,0,0,0.25)]">
            <div className="flex justify-between items-center border-b border-gray-300 p-5">
              <h1 className="text-xl">Dispute</h1>
              <p
                className="text-blue-500 text-sm cursor-pointer"
              >
                + Create Disputes
              </p>
            </div>
            <div className="p-7">
              <div className="flex flex-col gap-4 h-[700px] justify-center items-center border-2 border-dashed border-gray-200">
                <FiFilePlus className="text-[#E17A1B]" size={200} />
                <p className="text-xl text-gray-400">
                  No disputes have submitted yet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dispute;
