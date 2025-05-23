import React, { useState } from "react";
import ToggleSwitch from "../components/ToggleSwitch";
import SearchableDiv from "../components/SearchableDiv";
import { country } from "../components/country";
import { HiOutlineChevronDown } from "react-icons/hi";
import { FaLock } from "react-icons/fa";
import { useSelector } from "react-redux";

const AccountSettings = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    address: "",
    country: "",
    city: "",
    zipcode: "",
    phone: "",
    email: "",
    currentPassword: "",
    newPassword: "",
    password: "",
    retypePassword: "",
    reasons: "",
    description: "",
  });
  const [isActive, setIsActive] = useState(0);
  const [openDropdown, setOpenDropdown] = useState("");
  const [notifications, setNotifications] = useState(true);
  const [disableAccount, setDisableAccount] = useState(false);
  const [hideRate, setHideRate] = useState(false);
  const currentUser = useSelector((state) => state.user.currentUser);

  const reasons = ["Not satisfied", "Support is not good", "Others"];

  return (
    <div className="flex shadow-[0_0_15px_rgba(0,0,0,0.25)] h-full w-[75%]">
      <div className="flex flex-col bg-gray-50 w-[30%]">
        {[
          "Manage Account",
          "Billing Address",
          "Password",
          "Email Notifications",
          "Delete Account",
        ].map((items, index) => (
          <div
            key={index}
            onClick={() => setIsActive(index)}
            className="group relative"
          >
            <ul
              className={`flex  ${
                isActive === index
                  ? "bg-white text-black"
                  : "text-gray-400 hover:text-black hover:bg-white"
              } transition-all ease-in-out duration-700`}
            >
              <div
                className={`absolute left-0 top-0 w-1 h-full bg-[#E17A1B] rounded-t transition-all duration-700 scale-y-0 origin-top group-hover:scale-y-100 z-1 ${
                  isActive === index && "scale-y-100"
                }`}
              ></div>
              <li className="p-4 pl-9 w-full cursor-pointer">{items}</li>
            </ul>
          </div>
        ))}
      </div>
      <div className="h-full min-h-[600px] p-8 w-[70%]">
        {isActive === 0 && (
          <div className="flex flex-col gap-10">
            <div className="bg-gray-50 relative w-full p-3 text-black font-bold">
              <div className="absolute left-0 top-0 w-1 h-full bg-[#E17A1B] rounded-t transition-all duration-700 origin-top z-1 scale-y-100 "></div>
              <h2 className="ml-5">Manage Account</h2>
            </div>
            <div className="flex flex-col gap-y-5 px-6 text-sm">
              <p>
                To hide your profile all over the site you can disable your
                profile temporarily
              </p>
              <div className="grid grid-cols-2 gap-y-7 gap-x-4 text-lg">
                <ToggleSwitch
                  label="Disable my account temporarily"
                  checked={disableAccount}
                  onChange={() => setDisableAccount(!disableAccount)}
                />
                <ToggleSwitch
                  label="Disable hourly rate on frontend"
                  checked={hideRate}
                  onChange={() => setHideRate(!hideRate)}
                />
                <ToggleSwitch
                  label="New project notifications"
                  checked={notifications}
                  onChange={() => setNotifications(!notifications)}
                />
              </div>
              <button className="bg-[#E17A1B] w-[40%] text-white font-bold px-8 py-4 rounded transition duration-300 ease-in-out transform hover:bg-[#E17A1B] hover:shadow-2xl/10 hover:scale-105 cursor-pointer">
                Save Account Settings
              </button>
            </div>
          </div>
        )}
        {isActive === 1 && (
          <div className="flex flex-col gap-10">
            <div className="bg-gray-50 relative w-full p-3 text-black font-bold">
              <div className="absolute left-0 top-0 w-1 h-full bg-[#E17A1B] rounded-t transition-all duration-700 origin-top z-1 scale-y-100 "></div>
              <h2 className="ml-5">Billing details</h2>
            </div>
            <form className="grid grid-cols-2 gap-4">
              <input
                name="firstName"
                type="text"
                value={formData.firstName}
                placeholder="First Name"
                className="border border-gray-300 w-full p-3 pl-6 rounded  outline-none focus:border-[#E17A1B] transition-all ease-in-out duration-400"
              />
              <input
                name="lastName"
                type="text"
                value={formData.lastName}
                placeholder="Last Name"
                className="border border-gray-300 w-full p-3 pl-6 rounded  outline-none focus:border-[#E17A1B] transition-all ease-in-out duration-400"
              />
              <input
                name="companyName"
                type="text"
                value={formData.companyName}
                placeholder="Company Name"
                className="border border-gray-300 w-full p-3 pl-6 rounded  outline-none focus:border-[#E17A1B] transition-all ease-in-out duration-400"
              />
              <input
                name="address"
                type="text"
                value={formData.address}
                placeholder="Your Address"
                className="border border-gray-300 w-full p-3 pl-6 rounded  outline-none focus:border-[#E17A1B] transition-all ease-in-out duration-400"
              />
              <div className="w-full relative">
                <input
                  name="country"
                  type="text"
                  value={formData.country}
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === "country" ? false : "country"
                    )
                  }
                  placeholder="Select country..."
                  className="border border-gray-300 w-full p-3 pl-6 rounded outline-none focus:border-[#E17A1B] transition-all ease-in-out duration-400 cursor-pointer"
                  readOnly
                />
                <HiOutlineChevronDown
                  size={20}
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === "country" ? false : "country"
                    )
                  }
                  className="absolute top-4 right-3 text-gray-400 cursor-pointer"
                />
                {openDropdown === "country" && (
                  <div className="absolute top-14 left-0 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10 p-1 transition-all duration-300 ease-in-out">
                    <SearchableDiv
                      content={country}
                      onSelect={(selected) => {
                        setFormData((prev) => ({
                          ...prev,
                          country: selected,
                        }));
                        setOpenDropdown(false);
                      }}
                    />
                  </div>
                )}
              </div>
              <input
                name="city"
                type="text"
                value={formData.city}
                placeholder="City"
                className="border border-gray-300 w-full p-3 pl-6 rounded  outline-none focus:border-[#E17A1B] transition-all ease-in-out duration-400"
              />

              <input
                name="zipcode"
                type="number"
                value={formData.zipcode}
                placeholder="Zipcode"
                className="border border-gray-300 w-full p-3 pl-6 rounded  outline-none focus:border-[#E17A1B] transition-all ease-in-out duration-400"
              />
              <input
                name="phone"
                type="tel"
                value={formData.phone}
                placeholder="Phone"
                className="border border-gray-300 w-full p-3 pl-6 rounded  outline-none focus:border-[#E17A1B] transition-all ease-in-out duration-400"
              />
              <input
                name="email"
                type="email"
                value={formData.email}
                placeholder="Your email Address"
                className="border border-gray-300 w-full p-3 pl-6 rounded  outline-none focus:border-[#E17A1B] transition-all ease-in-out duration-400"
              />
              <button className="bg-[#E17A1B] w-[70%] text-white font-bold px-8 py-4 rounded transition duration-300 ease-in-out transform hover:bg-[#E17A1B] hover:shadow-2xl/10 hover:scale-105 cursor-pointer">
                Update billing detail
              </button>
            </form>
          </div>
        )}
        {isActive === 2 && (
          <div className="flex flex-col gap-10">
            <div className="bg-gray-50 relative w-full p-3 text-black font-bold">
              <div className="absolute left-0 top-0 w-1 h-full bg-[#E17A1B] rounded-t transition-all duration-700 origin-top z-1 scale-y-100 "></div>
              <h2 className="ml-5">Billing details</h2>
            </div>
            <form className="grid grid-cols-2 gap-4">
              <input
                name="currentPassword"
                type="password"
                value={formData.currentPassword}
                placeholder="Your Current Password"
                className="border border-gray-300 w-full p-3 pl-6 rounded  outline-none focus:border-[#E17A1B] transition-all ease-in-out duration-400"
              />
              <input
                name="newPassword"
                type="password"
                value={formData.newPassword}
                placeholder="New Password"
                className="border border-gray-300 w-full p-3 pl-6 rounded  outline-none focus:border-[#E17A1B] transition-all ease-in-out duration-400"
              />
              <button className="bg-[#E17A1B] w-[70%] text-white font-bold px-8 py-4 rounded transition duration-300 ease-in-out transform hover:bg-[#E17A1B] hover:shadow-2xl/10 hover:scale-105 cursor-pointer">
                Change Password
              </button>
            </form>
          </div>
        )}
        {isActive === 3 && (
          <div className="flex flex-col gap-10">
            <div className="bg-gray-50 relative w-full p-3 text-black font-bold">
              <div className="absolute left-0 top-0 w-1 h-full bg-[#E17A1B] rounded-t transition-all duration-700 origin-top z-1 scale-y-100 "></div>
              <h2 className="ml-5">Email Notifications</h2>
            </div>
            <div className="flex flex-col gap-4 px-8">
              <p className="text-sm">
                All the emails will be sent to the below email address
              </p>
              <div className="relative">
                <input
                  type="email"
                  value={currentUser.email}
                  placeholder={currentUser.email}
                  className="border border-gray-300 w-full p-3 pl-6 rounded  outline-none focus:border-[#E17A1B] transition-all ease-in-out duration-400"
                />
                <div className="absolute top-4 right-3 group inline-flex items-center">
                  <FaLock />
                </div>
              </div>

              <button className="bg-[#E17A1B] w-[40%] text-white font-bold px-8 py-4 rounded transition duration-300 ease-in-out transform hover:bg-[#E17A1B] hover:shadow-2xl/10 hover:scale-105 cursor-pointer">
                Change Email
              </button>
            </div>
          </div>
        )}
        {isActive === 4 && (
          <div className="flex flex-col gap-10">
            <div className="bg-gray-50 relative w-full p-3 text-black font-bold">
              <div className="absolute left-0 top-0 w-1 h-full bg-[#E17A1B] rounded-t transition-all duration-700 origin-top z-1 scale-y-100 "></div>
              <h2 className="ml-5">Delete Account</h2>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input
                name="password"
                type="pasword"
                value={formData.password}
                placeholder="Enter Password"
                className="border border-gray-300 w-full p-3 pl-6 rounded  outline-none focus:border-[#E17A1B] transition-all ease-in-out duration-400"
              />
              <input
                name="retypePassword"
                type="password"
                value={formData.retypePassword}
                placeholder="Retype Password"
                className="border border-gray-300 w-full p-3 pl-6 rounded  outline-none focus:border-[#E17A1B] transition-all ease-in-out duration-400"
              />
              <div className="w-full relative col-span-2">
                <input
                  name="reasons"
                  type="text"
                  value={formData.reasons}
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === "reasons" ? false : "reasons"
                    )
                  }
                  placeholder="Select Reason to leave"
                  className="border border-gray-300 w-full p-3 pl-6 rounded outline-none focus:border-[#E17A1B] transition-all ease-in-out duration-400 cursor-pointer"
                  readOnly
                />
                <HiOutlineChevronDown
                  size={20}
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === "reasons" ? false : "reasons"
                    )
                  }
                  className="absolute top-4 right-3 text-gray-400 cursor-pointer"
                />
                {openDropdown === "reasons" && (
                  <div className="absolute top-14 left-0 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10 p-1 transition-all duration-300 ease-in-out">
                    <SearchableDiv
                      content={reasons}
                      onSelect={(selected) => {
                        setFormData((prev) => ({
                          ...prev,
                          reasons: selected,
                        }));
                        setOpenDropdown(false);
                      }}
                    />
                  </div>
                )}
              </div>
              <input
                name="description"
                type="text"
                value={formData.description}
                placeholder="Description {optional)"
                className="col-span-2 h-50 border border-gray-300 w-full p-3 pl-6 rounded  outline-none focus:border-[#E17A1B] transition-all ease-in-out duration-400"
              />
              <button className="bg-[#E17A1B] w-[6 0%] text-white font-bold px-8 py-4 rounded transition duration-300 ease-in-out transform hover:bg-[#E17A1B] hover:shadow-2xl/10 hover:scale-105 cursor-pointer">
                Delete Account
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AccountSettings;
