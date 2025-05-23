import React from "react";
import InsightCards from "../components/InsightCards";
import { insight } from "../components/insight";
import { FiFilePlus } from "react-icons/fi";

const Insights = () => {
  return (
    <div className="grid grid-cols-4  gap-8">
      {insight.map((item, index) => (
        <div key={index}>
          <InsightCards
            img={item.img}
            title={item.title}
            to={item.to}
            toMessage={item.toMessage}
          />
        </div>
      ))}
      <div className="col-span-2 ">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col shadow-[0_0_15px_rgba(0,0,0,0.25)]">
            <div className="flex justify-between items-center border-b border-gray-300 p-5">
              <h1 className="text-xl">Ongoing projects</h1>
            </div>
            <div className="flex flex-col gap-5 p-7">
              <div className="flex flex-col gap-4 h-[700px] justify-center items-center border-2 border-dashed border-gray-200">
                <FiFilePlus className="text-[#E17A1B]" size={200} />
                <p className="text-xl text-gray-400">No ongoing projects.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-2 ">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col shadow-[0_0_15px_rgba(0,0,0,0.25)]">
            <div className="flex justify-between items-center border-b border-gray-300 p-5">
              <h1 className="text-xl">Past Earnings</h1>
            </div>
            <div className="flex flex-col gap-5 p-7">
              <div className="flex flex-col gap-4 h-[700px] justify-center items-center border-2 border-dashed border-gray-200">
                <img
                  src="https://2am.ng/wp-content/uploads/2024/08/out-of-stock.png"
                  alt="out-of-stock"
                  className="h-[200px]"
                />{" "}
                <p className="text-xl text-gray-400">
                  No Earning has been made yet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insights;
