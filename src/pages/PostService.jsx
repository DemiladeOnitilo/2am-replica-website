import React, { useState } from "react";
import WordEditor from "../components/WordEditor";
import SearchableDiv from "../components/SearchableDiv";
import { HiOutlineChevronDown } from "react-icons/hi";
import { specialization } from "../components/specialization";

const PostService = () => {
  const [formData, setFormData] = useState({
    serviceTitle: "",
    servicePrice: "",
    services: "",
    specialization: "",
  });
  const [openDropdown, setOpenDropdown] = useState("");

  const services = ["Yes", "No"];

  return (
    <div>
      <form className="flex flex-col gap-10 w-[75%]">
        <div className="flex flex-col shadow-[0_0_15px_rgba(0,0,0,0.25)]">
          <div className="border-b border-gray-300 p-5">
            <h1 className="text-xl">Post a Service</h1>
          </div>
          <div className="flex flex-col gap-5 p-7">
            <div className="bg-gray-50 relative w-full p-3 text-black font-bold">
              <div className="absolute left-0 top-0 w-1 h-full bg-[#E17A1B] rounded-t transition-all duration-700 origin-top z-1 scale-y-100 "></div>
              <h2 className="ml-5">Service description</h2>
            </div>
            <div className="grid grid-cols-2 p-4 gap-4">
              <div className="w-full relative col-span-2">
                <input
                  name="serviceTitle"
                  value={formData.serviceTitle}
                  type="text"
                  placeholder="Add service title"
                  className="border border-gray-300 w-full p-3 pl-6 rounded outline-none focus:border-[#E17A1B] transition-all ease-in-out duration-400"
                />
              </div>
              <div className="w-full relative">
                <input
                  name="servicePrice"
                  value={formData.servicePrice}
                  type="number"
                  placeholder="Service Price (₦)"
                  className="border border-gray-300 w-full p-3 pl-6 rounded outline-none focus:border-[#E17A1B] transition-all ease-in-out duration-400"
                />
              </div>
              <div className="w-full relative">
                <input
                  name="services"
                  value={formData.services}
                  type="text"
                  placeholder="Select downloadable service"
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === "services" ? false : "services"
                    )
                  }
                  className="border border-gray-300 w-full p-3 pl-6 rounded outline-none focus:border-[#E17A1B] transition-all ease-in-out duration-400"
                  readOnly
                />
                <HiOutlineChevronDown
                  size={20}
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === "services" ? false : "services"
                    )
                  }
                  className="absolute top-4 right-3 text-gray-400 cursor-pointer"
                />
                {openDropdown === "services" && (
                  <div className="absolute top-14 left-0 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10 p-1 transition-all duration-300 ease-in-out">
                    <SearchableDiv
                      content={services}
                      onSelect={(selected) => {
                        setFormData((prev) => ({
                          ...prev,
                          services: selected,
                        }));
                        setOpenDropdown(false);
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="bg-gray-50 relative w-full p-3 text-black font-bold">
              <div className="absolute left-0 top-0 w-1 h-full bg-[#E17A1B] rounded-t transition-all duration-700 origin-top z-1 scale-y-100 "></div>
              <h2 className="ml-5">Service Categories</h2>
            </div>
            <div className="w-full relative">
              <input
                name="specialization"
                value={formData.specialization}
                type="text"
                placeholder="Select categories"
                onClick={() =>
                  setOpenDropdown(
                    openDropdown === "specialization" ? false : "specialization"
                  )
                }
                className="border border-gray-300 w-full p-3 pl-6 rounded outline-none focus:border-[#E17A1B] transition-all ease-in-out duration-400"
                readOnly
              />
              <HiOutlineChevronDown
                size={20}
                onClick={() =>
                  setOpenDropdown(
                    openDropdown === "specialization" ? false : "specialization"
                  )
                }
                className="absolute top-4 right-3 text-gray-400 cursor-pointer"
              />
              {openDropdown === "specialization" && (
                <div className="absolute top-14 left-0 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10 p-1 transition-all duration-300 ease-in-out">
                  <SearchableDiv
                    content={specialization}
                    onSelect={(selected) => {
                      setFormData((prev) => ({
                        ...prev,
                        specialization: selected,
                      }));
                      setOpenDropdown(false);
                    }}
                  />
                </div>
              )}
            </div>
            <div className="bg-gray-50 relative w-full p-3 text-black font-bold">
              <div className="absolute left-0 top-0 w-1 h-full bg-[#E17A1B] rounded-t transition-all duration-700 origin-top z-1 scale-y-100 "></div>
              <h2 className="ml-5">Service Details</h2>
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
              <span className="font-bold">5</span> images per service. if you
              will upload more images then first{" "}
              <span className="font-bold">5</span> images will be attached to
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
            <div className="flex flex-col gap-10 w-full mb-10">
              <div className="bg-gray-50 relative w-full p-3  flex justify-between items-center">
                <div className="absolute left-0 top-0 w-1 h-full bg-[#E17A1B] rounded-t transition-all duration-700 origin-top z-1 scale-y-100 "></div>
                <h2 className="ml-5 text-black font-bold">Service FAQ</h2>
                <p className="text-blue-500 text-sm cursor-pointer">
                  + Add service FAQ
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

export default PostService;
