import React, { useState } from "react";
import { FaFilter } from "react-icons/fa";
import { helpSupport } from "../components/helpSupport";
import SearchableDiv from "../components/SearchableDiv";
import { HiOutlineChevronDown } from "react-icons/hi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Support = () => {
  const [formData, setFormData] = useState({
    queryType: "",
    message: "",
  });
  const [dropdownOpen, setDropdownOpen] = useState([]);
  const [openDropdown, setOpenDropdown] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDropdown = (index) => {
    if (dropdownOpen.includes(index)) {
      setDropdownOpen(dropdownOpen.filter((i) => i !== index));
    } else {
      setDropdownOpen([...dropdownOpen, index]);
    }
    console.log("Clicked");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { queryType, message } = formData;

    if (!queryType || !message) {
      toast.error("Please fill in all fields", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    if (queryType && message) {
      toast.success("Logged in successfully!", {
        position: "top-right",
        autoClose: 2000,
      });

      setFormData({
        queryType: "",
        message: "",
      });
    }
  };

  const queryType = ["Query", "Query Type"];

  return (
    <div className="flex gap-5 h-full min-h-[300px]">
      <div className="flex shadow-[0_0_15px_rgba(0,0,0,0.25)] h-auto w-[50%]">
        <div className="flex flex-col w-full">
          <div className="flex justify-between items-center border-b border-gray-300 px-5 py-3">
            <h1 className="text-xl">Help & Support</h1>
            <div className="flex items-center w-70 border border-gray-300 rounded-sm ">
              <div className="flex items-center h-12 w-full text-md">
                <input
                  type="text"
                  placeholder="Search Query"
                  className="pl-4 w-50 outline-none"
                />
              </div>
              <button className="h-12 px-5 flex items-center bg-[#E17A1B] text-white cursor-pointer rounded-r">
                <FaFilter />
              </button>
            </div>
          </div>
          <div className="p-7">
            <div>
              <div className="bg-gray-50 relative w-full p-3  flex justify-between items-center">
                <div className="absolute left-0 top-0 w-1 h-full bg-[#E17A1B] rounded-t transition-all duration-700 origin-top z-1 scale-y-100 "></div>
                <h2 className="ml-5 text-black font-bold">Get Help</h2>
              </div>
            </div>
            <div className="flex flex-col gap-6 p-5">
              <div>
                <h2 className="text-gray-400">
                  Welcome to the 2am.ng Help and Support Center! We're here to
                  assist you with any questions you may have about finding the
                  perfect talent or launching your career on our platform.
                  Whether you're an employer seeking top-tier professionals or a
                  skilled individual looking for exciting opportunities, we've
                  compiled a comprehensive collection of resources to guide you.
                  This page provides answers to frequently asked questions,
                  helpful articles, and video tutorials. If you can't find the
                  answer you're looking for, feel free to contact our friendly
                  support team directly. We're always happy to help!
                </h2>
              </div>
              <div className="flex flex-col gap-1 px-3">
                {helpSupport.map((item, index) => (
                  <div className="w-full ">
                    <div
                      key={index}
                      className="bg-gray-100 w-full h-full p-4 text-sm cursor-pointer"
                      onClick={() => handleDropdown(index)}
                    >
                      <h3>{item.title}</h3>
                    </div>
                    <div
                      className={`bg-gray-50 flex flex-col gap-3  w-full overflow-hidden transition-all origin-top ease-in-out duration-300 ${
                        dropdownOpen.includes(index)
                          ? "max-h-90 opacity-100 p-4"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <h2 className="text-xl">{item.contentTitle}</h2>
                      <p className="text-md">{item.contentBody}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col shadow-[0_0_15px_rgba(0,0,0,0.25)] w-[50%]">
        <div className="flex flex-col w-full">
          <div className="flex justify-between items-center border-b border-gray-300 px-5 py-6">
            <h1 className="text-xl">Didn't find your solution?</h1>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 p-7 ">
          <div>
            <div className="bg-gray-50 relative w-full p-3  flex justify-between items-center">
              <div className="absolute left-0 top-0 w-1 h-full bg-[#E17A1B] rounded-t transition-all duration-700 origin-top z-1 scale-y-100 "></div>
              <h2 className="ml-5 text-black font-bold">Get Help</h2>
            </div>
          </div>
          <div className="flex flex-col gap-3 px-3">
            <div className="w-full relative">
              <input
                name="queryType"
                type="text"
                value={formData.queryType}
                onChange={handleChange}
                onClick={() =>
                  setOpenDropdown(
                    openDropdown === "queryType" ? false : "queryType"
                  )
                }
                placeholder="Select Query Type"
                className="border border-gray-300 w-full p-3 pl-6 rounded outline-none focus:border-[#E17A1B] transition-all ease-in-out duration-400 cursor-pointer"
                readOnly
              />
              <HiOutlineChevronDown
                size={20}
                onClick={() =>
                  setOpenDropdown(
                    openDropdown === "queryType" ? false : "queryType"
                  )
                }
                className="absolute top-4 right-3 text-gray-400 cursor-pointer"
              />
              {openDropdown === "queryType" && (
                <div className="absolute top-14 left-0 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10 p-1 transition-all duration-300 ease-in-out">
                  <SearchableDiv
                    content={queryType}
                    onSelect={(selected) => {
                      setFormData((prev) => ({
                        ...prev,
                        queryType: selected,
                      }));
                      setOpenDropdown(false);
                    }}
                  />
                </div>
              )}
            </div>
            <div className="w-full">
              <input
                name="message"
                type="text"
                value={formData.message}
                onChange={handleChange}
                className="border border-gray-300 w-full h-60 p-3 pl-6 rounded outline-none focus:border-[#E17A1B] transition-all ease-in-out duration-400"
              />
            </div>
            <div>
              <button className="bg-[#E17A1B] rounded font-bold text-white px-10 py-4 transition duration-300 ease-in-out transform hover:shadow-2xl/20  cursor-pointer ">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Support;
