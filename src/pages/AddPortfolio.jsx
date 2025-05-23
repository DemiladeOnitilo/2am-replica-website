import React from "react";
import WordEditor from "../components/WordEditor";

const AddPortfolio = () => {
  return (
    <div>
      <form className="flex flex-col gap-10 w-[75%]">
        <div className="flex flex-col shadow-[0_0_15px_rgba(0,0,0,0.25)]">
          <div className="border-b border-gray-300 p-5">
            <h1 className="text-xl">Add Portfolio</h1>
          </div>
          <div className="flex flex-col gap-5 p-7">
            <div className="bg-gray-50 relative w-full p-3 text-black font-bold">
              <div className="absolute left-0 top-0 w-1 h-full bg-[#E17A1B] rounded-t transition-all duration-700 origin-top z-1 scale-y-100 "></div>
              <h2 className="ml-5">Portfolio description</h2>
            </div>
            <div className="grid grid-cols-2 p-4 gap-4">
              <div className="w-full relative">
                <input
                  name="portfolioTitle"
                  type="text"
                  placeholder="Portfolio Title"
                  className="border border-gray-300 w-full p-3 pl-6 rounded outline-none focus:border-[#E17A1B] transition-all ease-in-out duration-400"
                />
              </div>
              <div className="w-full relative">
                <input
                  name="customLink"
                  type="number"
                  placeholder="Custom Link (optional)"
                  className="border border-gray-300 w-full p-3 pl-6 rounded outline-none focus:border-[#E17A1B] transition-all ease-in-out duration-400"
                />
              </div>
            </div>
            <div className="bg-gray-50 relative w-full p-3 text-black font-bold">
              <div className="absolute left-0 top-0 w-1 h-full bg-[#E17A1B] rounded-t transition-all duration-700 origin-top z-1 scale-y-100 "></div>
              <h2 className="ml-5">Portfolio Categories</h2>
            </div>
            <div className="p-4 gap-4">
              <div className="w-full relative">
                <input
                  name="portfolioTitle"
                  type="text"
                  placeholder="Portfolio Title"
                  className="border border-gray-300 w-full p-3 pl-6 rounded outline-none focus:border-[#E17A1B] transition-all ease-in-out duration-400"
                />
              </div>
            </div>
            <div className="bg-gray-50 relative w-full p-3 text-black font-bold">
              <div className="absolute left-0 top-0 w-1 h-full bg-[#E17A1B] rounded-t transition-all duration-700 origin-top z-1 scale-y-100 "></div>
              <h2 className="ml-5">Portfolio Tags</h2>
            </div>
            <div className="p-4 gap-4">
              <div className="w-full relative">
                <input
                  name="portfolioTitle"
                  type="text"
                  placeholder="Portfolio Title"
                  className="border border-gray-300 w-full p-3 pl-6 rounded outline-none focus:border-[#E17A1B] transition-all ease-in-out duration-400"
                />
              </div>
            </div>
            <div className="flex flex-col gap-10 w-full mb-10">
              <div className="bg-gray-50 relative w-full p-3  flex justify-between items-center">
                <div className="absolute left-0 top-0 w-1 h-full bg-[#E17A1B] rounded-t transition-all duration-700 origin-top z-1 scale-y-100 "></div>
                <h2 className="ml-5 text-black font-bold">Add Your Videos</h2>
                <p className="text-blue-500 text-sm cursor-pointer">
                  + Add video URL
                </p>
              </div>
            </div>
            <div className="bg-gray-50 relative w-full p-3 text-black font-bold">
              <div className="absolute left-0 top-0 w-1 h-full bg-[#E17A1B] rounded-t transition-all duration-700 origin-top z-1 scale-y-100 "></div>
              <h2 className="ml-5">Portfolio Details</h2>
            </div>
            <div>
              <WordEditor />
            </div>
            <div className="bg-gray-50 relative w-full p-3 text-black font-bold">
              <div className="absolute left-0 top-0 w-1 h-full bg-[#E17A1B] rounded-t transition-all duration-700 origin-top z-1 scale-y-100 "></div>
              <h2 className="ml-5">Upload Images</h2>
            </div>
            <p className="text-xs italic">
              You are only allowed to upload{" "}
              <span className="font-bold">10</span> images per service. if you
              will upload more images then first{" "}
              <span className="font-bold">10</span> images will be attached to
              this service
            </p>
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
            <div className="bg-gray-50 relative w-full p-3 text-black font-bold">
              <div className="absolute left-0 top-0 w-1 h-full bg-[#E17A1B] rounded-t transition-all duration-700 origin-top z-1 scale-y-100 "></div>
              <h2 className="ml-5">Upload Documents</h2>
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

export default AddPortfolio;
