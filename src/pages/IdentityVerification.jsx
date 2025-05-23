import React, { useState } from "react";

const IdentityVerification = () => {
  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "",
    identificationNumber: "",
    address: "",
  });

  return (
    <div>
      <form className="flex flex-col gap-10 w-[50%]">
        <div className="flex flex-col shadow-[0_0_15px_rgba(0,0,0,0.25)]">
          <div className="border-b border-gray-300 p-5">
            <h1 className="text-xl">Upload Identity Information</h1>
          </div>
          <div className="flex flex-col gap-5 p-7">
            <div className="bg-gray-50 relative w-full p-3 text-black font-bold">
              <div className="absolute left-0 top-0 w-1 h-full bg-[#E17A1B] rounded-t transition-all duration-700 origin-top z-1 scale-y-100 "></div>
              <h2 className="ml-5">Upload identity documents</h2>
            </div>
            <div className="flex flex-col gap-5 p-3 pb-20">
              <p>
                Please upload your National Identity Card, Passport or Driving
                License to verifiy your identity, You will not able to apply on
                a job or post services before verification
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="w-full relative">
                  <input
                    name="name"
                    type="text"
                    value={formData.name}
                    placeholder="Your Name"
                    className="border border-gray-300 w-full p-3 pl-6 rounded outline-none focus:border-[#E17A1B] transition-all ease-in-out duration-400"
                  />
                </div>
                <div className="w-full relative">
                  <input
                    name="contactNumber"
                    type="number"
                    value={formData.contactNumber}
                    placeholder="Contact Number"
                    className="border border-gray-300 w-full p-3 pl-6 rounded outline-none focus:border-[#E17A1B] transition-all ease-in-out duration-400"
                  />
                </div>
                <div className="w-full relative col-span-2">
                  <input
                    name="identificationNumber"
                    type="text"
                    value={formData.identificationNumber}
                    placeholder="National Identification Card, Passport, or driving licence number"
                    className="border border-gray-300 w-full p-3 pl-6 rounded outline-none focus:border-[#E17A1B] transition-all ease-in-out duration-400"
                  />
                </div>
                <div className="w-full h-45 relative col-span-2">
                  <input
                    name="address"
                    type="text"
                    value={formData.address}
                    placeholder="Add Address"
                    className="border border-gray-300 w-full h-full p-3 pl-6 rounded outline-none focus:border-[#E17A1B] transition-all ease-in-out duration-400"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <div className=" w-full border border-dashed border-gray-300 py-2 px-6 flex items-center gap-15">
                  <label
                    htmlFor="img"
                    className="bg-green-500 text-white text-sm font-bold px-10 py-5 cursor-pointer rounded hover:shadow-2xl/40"
                  >
                    Select File
                  </label>
                  <p className="font-semibold text-gray-300">
                    Display files here to upload
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-auto p-8 shadow-[0_0_15px_rgba(0,0,0,0.25)] w-full flex justify-between items-center ">
          <h2 className="text-xl">
            Update all the latest changes made by you, by just clicking on “Save
            & Update button.
          </h2>
          <button className="px-7 py-4 bg-[#E17A1B] text-sm font-bold text-white rounded cursor-pointer hover:shadow-2xl/30 ">
            Save & Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default IdentityVerification;
