import React from "react";

const Invoices = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col shadow-[0_0_15px_rgba(0,0,0,0.25)]">
        <div className="flex justify-between items-center border-b border-gray-300 p-5">
          <h1 className="text-xl">Invoices</h1>
        </div>
        <div className="bg-gray-50 relative w-full p-3 text-black font-bold">
          <div className="absolute left-0 top-0 w-1 h-full bg-[#E17A1B] rounded-t transition-all duration-700 origin-top z-1 scale-y-100 "></div>
          <div className="flex justify-between pr-60">
            <h2 className="ml-5">Order ID</h2>
            <h2 className="ml-5">Created date</h2>
            <h2 className="ml-5">Amount</h2>
            <h2 className="ml-5">Action</h2>
          </div>
        </div>
        <div className="flex flex-col gap-5 p-7">
          <div className="flex flex-col gap-4 h-[700px] justify-center items-center border-2 border-dashed border-gray-200">
            <img
              src="https://2am.ng/wp-content/uploads/2024/08/out-of-stock.png"
              alt="out-of-stock"
              className="h-[200px]"
            />
            <p className="text-xl text-gray-400">No order has been made yet.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoices;
