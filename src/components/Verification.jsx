import React, { useState } from "react";
import { Link } from "react-router-dom";

const Verification = () => {
  const [closeNoti, setCloseNoti] = useState(false);

  const handleCloseNoti = () => {
    setCloseNoti(!closeNoti);
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-center gap-6 p-7 shadow-[0_0_15px_rgba(0,0,0,0.25)] rounded">
        <div className="flex flex-col gap-2">
          <h1 className="text-xl">Verification required</h1>
          <p className="text-gray-500 tracking-wide">
            You must verify your identity to be able to get hired for jobs on
            2am.ng, please submit the required documents to get verified. As
            soon as you will be verified then you will be able to apply to the
            jobs and get hired.
          </p>
        </div>
        <Link
          to="/dashboard/identity-verification"
          className="bg-green-500 flex justify-center items-center text-center mt-5 h-12 w-50 text-white font-semibold rounded cursor-pointer hover:shadow-2xl/20 transition-all ease-in-out duration-400"
        >
          Let's verify now
        </Link>
      </div>
      <div
        className={`flex justify-between items-center p-3 bg-amber-100 rounded  ${
          closeNoti && "hidden"
        }`}
      >
        <div className="flex gap-2">
          <h3 className="font-semibold text-amber-900">Verification:</h3>
          <p className="text-gray-500">
            Your account is not verified. Please contact to administrator to get
            verified
          </p>
        </div>
        <div className="font-semibold">
          <button
            className="cursor-pointer text-gray-500 hover:text-amber-900"
            onClick={handleCloseNoti}
          >
            x
          </button>
        </div>
      </div>
    </div>
  );
};

export default Verification;
