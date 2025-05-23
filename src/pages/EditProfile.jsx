import React, { useState, useEffect } from "react";
import { HiOutlineChevronDown } from "react-icons/hi";
import { FaQuestionCircle } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import SearchableDiv from "../components/SearchableDiv";
import { updateUser } from "../store/userSlice";
import { languages } from "../components/languages";
import { location } from "../components/location";
import { skill } from "../components/skills";
import { specialization } from "../components/specialization";
import { industrialExperience } from "../components/solutions/industrialexperience";
import { FaCrosshairs } from "react-icons/fa";
import GoogleMaps from "../components/GoogleMaps";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import WordEditor from "../components/WordEditor";

const EditProfile = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    name: "",
    title: "",
    email: "",
    phone: "",
    password: "",
    retypePassword: "",
    type: "",
    terms: false,
    location: "",
    minimumRate: "",
    maximumRate: "",
    tagline: "",
    description: "",
    language: "",
    englishLevel: "",
    talentType: "",
    geolocation: "",
    longitude: "",
    latitude: "",
    skill: "",
    percentageValue: "",
  });
  const [openAdd, setOpenAdd] = useState(0);
  const [isActive, setIsActive] = useState(0);
  const [openDropdown, setOpenDropdown] = useState("");
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      setFormData((prev) => ({
        ...prev,
        ...currentUser,
      }));
    }
  }, [currentUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser(formData));

    toast.success("Profile updated successfully!", {
      position: "top-right",
      autoClose: 2000,
    });

    navigate("/dashboard/settings/edit-profile");
  };

  const titles = ["Mr", "Mrs", "Miss"];
  const englishLevel = [
    "Basic",
    "Conversational",
    "Fluent",
    "Native or Bilingual",
    "Professional",
  ];
  const talentType = [
    "Full-Time Hybrid",
    "Full-Time Remote",
    "Part-Time Hybrid",
    "Part-Time Remote",
  ];

  console.log(formData);

  return (
    <div>
      <form onSubmit={handleSubmit} className=" flex flex-col gap-5">
        <div className="flex shadow-[0_0_15px_rgba(0,0,0,0.25)] h-full w-[75%]">
          <div className="flex flex-col bg-gray-50 w-[30%]">
            {[
              "Personal Details and Skills",
              "Experience and Education",
              "Projects",
              "Awards/Certifications",
              "Profile Videos",
              "Specialization",
              "Industrial Experience",
              "Profile FAQ",
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
                  {/* Animated colored bar */}
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
          <div className="h-full min-h-[600px] p-8 w-[70%] ">
            {isActive === 0 && (
              <div className="flex flex-col gap-10 w-full ">
                <div className="bg-gray-50 relative w-full p-3 text-black font-bold">
                  <div className="absolute left-0 top-0 w-1 h-full bg-[#E17A1B] rounded-t transition-all duration-700 origin-top z-1 scale-y-100 "></div>
                  <h2 className="ml-5">Your Basics</h2>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="w-full relative">
                    <input
                      name="title"
                      type="text"
                      value={formData.title}
                      onClick={() =>
                        setOpenDropdown(openDropdown === "title" ? "" : "title")
                      }
                      onChange={handleChange}
                      placeholder="Select title"
                      className="border border-gray-300 w-full p-3 pl-6 rounded outline-none focus:border-[#E17A1B] transition-all ease-in-out duration-400 cursor-pointer"
                      readOnly
                    />
                    <HiOutlineChevronDown
                      size={20}
                      onClick={() =>
                        setOpenDropdown(openDropdown === "title" ? "" : "title")
                      }
                      className="absolute top-4 right-3 text-gray-400 cursor-pointer"
                    />
                    {openDropdown === "title" && (
                      <div className="absolute top-14 left-0 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10 p-1 transition-all duration-300 ease-in-out">
                        <SearchableDiv
                          content={titles}
                          onSelect={(selected) => {
                            setFormData((prev) => ({
                              ...prev,
                              title: selected,
                            }));
                            setOpenDropdown("");
                          }}
                        />
                      </div>
                    )}
                  </div>
                  <div className="w-full relative">
                    <input
                      name="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="First Name"
                      className="border border-gray-300 w-full p-3 pl-6 rounded outline-none focus:border-[#E17A1B] transition-all ease-in-out duration-400"
                    />
                    <div className="absolute top-4 right-3 group inline-flex items-center">
                      <FaQuestionCircle />
                      <div className="pointer-events-none absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-red-500 text-white text-sm px-8 py-2 rounded shadow-lg whitespace-nowrap z-10">
                        <h1>Add your first name</h1>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-red-500" />
                      </div>
                    </div>
                  </div>
                  <div className="w-full relative">
                    <input
                      name="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last Name"
                      className="border border-gray-300 w-full p-3 pl-6 rounded outline-none focus:border-[#E17A1B] transition-all ease-in-out duration-400"
                    />
                    <div className="absolute top-4 right-3 group inline-flex items-center">
                      <FaQuestionCircle />
                      <div className="pointer-events-none absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-red-500 text-white text-sm px-8 py-2 rounded shadow-lg whitespace-nowrap z-10">
                        <h1>Add your last name</h1>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-red-500" />
                      </div>
                    </div>
                  </div>
                  <div className="w-full relative">
                    <input
                      name="fullName"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Display Name"
                      className="border border-gray-300 w-full p-3 pl-6 rounded outline-none focus:border-[#E17A1B] transition-all ease-in-out duration-400"
                    />
                    <div className="absolute top-4 right-3 group inline-flex items-center">
                      <FaQuestionCircle />
                      <div className="pointer-events-none absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-red-500 text-white text-sm px-8 py-2 rounded shadow-lg whitespace-nowrap z-10">
                        <h1>This will be your display name on the site</h1>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-red-500" />
                      </div>
                    </div>
                  </div>
                  <div className="w-full relative">
                    <input
                      name="minimumRate"
                      type="number"
                      value={formData.minimumRate}
                      onChange={handleChange}
                      placeholder="Your service minimum hourly rate (₦)"
                      className="border border-gray-300 w-full p-3 pl-6 rounded outline-none focus:border-[#E17A1B] transition-all ease-in-out duration-400"
                    />
                    <div className="absolute top-4 right-3 group inline-flex items-center">
                      <FaQuestionCircle />
                      <div className="pointer-events-none absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-red-500 text-white text-sm px-8 py-2 rounded shadow-lg whitespace-nowrap z-10">
                        <h1>Add your per hour rate</h1>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-red-500" />
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <input
                      name="maximumRate"
                      type="number"
                      value={formData.maximumRate}
                      onChange={handleChange}
                      placeholder="Your service maximum hourly rate (₦)"
                      className="border border-gray-300 w-full p-3 pl-6 rounded outline-none focus:border-[#E17A1B] transition-all ease-in-out duration-400"
                    />
                  </div>
                  <div className="w-full col-span-2">
                    <input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      className="border border-gray-300 w-full p-3 pl-6 rounded outline-none focus:border-[#E17A1B] transition-all ease-in-out duration-400"
                    />
                  </div>
                  <div className="w-full col-span-2 relative">
                    <input
                      name="tagline"
                      type="text"
                      value={formData.tagline}
                      onChange={handleChange}
                      placeholder="Add your tagline here"
                      className="border border-gray-300 w-full p-3 pl-6 rounded  outline-none focus:border-[#E17A1B] transition-all ease-in-out duration-400"
                    />
                    <div className="absolute top-4 right-3 group inline-flex items-center">
                      <FaQuestionCircle />
                      <div className="pointer-events-none absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-red-500 text-white text-sm px-8 py-2 rounded shadow-lg whitespace-nowrap z-10">
                        <h1>Your tagline goes here</h1>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-red-500" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 relative w-full p-3 text-black font-bold">
                  <div className="absolute left-0 top-0 w-1 h-full bg-[#E17A1B] rounded-t transition-all duration-700 origin-top z-1 scale-y-100 "></div>
                  <h2 className="ml-5">Add brief details</h2>
                </div>
                <div>
                  <WordEditor />
                </div>
                <div className="bg-gray-50 relative w-full p-3 text-black font-bold">
                  <div className="absolute left-0 top-0 w-1 h-full bg-[#E17A1B] rounded-t transition-all duration-700 origin-top z-1 scale-y-100 "></div>
                  <h2 className="ml-5">Languages you can speak</h2>
                </div>
                <div className="w-full relative">
                  <input
                    name="language"
                    type="text"
                    value={formData.language}
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown === "language" ? false : "language"
                      )
                    }
                    onChange={handleChange}
                    placeholder="Select languages..."
                    className="border border-gray-300 w-full p-3 pl-6 rounded outline-none focus:border-[#E17A1B] transition-all ease-in-out duration-400 cursor-pointer"
                    readOnly
                  />
                  <HiOutlineChevronDown
                    size={20}
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown === "language" ? false : "language"
                      )
                    }
                    className="absolute top-4 right-3 text-gray-400 cursor-pointer"
                  />
                  {openDropdown === "language" && (
                    <div className="absolute top-14 left-0 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10 p-1 transition-all duration-300 ease-in-out">
                      <SearchableDiv
                        content={languages}
                        onSelect={(selected) => {
                          setFormData((prev) => ({
                            ...prev,
                            language: selected,
                          }));
                          setOpenDropdown(false);
                        }}
                      />
                    </div>
                  )}
                </div>
                <div className="bg-gray-50 relative w-full p-3 text-black font-bold">
                  <div className="absolute left-0 top-0 w-1 h-full bg-[#E17A1B] rounded-t transition-all duration-700 origin-top z-1 scale-y-100 "></div>
                  <h2 className="ml-5">Your english level</h2>
                </div>
                <div className="w-full relative">
                  <input
                    name="englishLevel"
                    type="text"
                    value={formData.englishLevel}
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown === "englishLevel" ? false : "englishLevel"
                      )
                    }
                    onChange={handleChange}
                    placeholder="Select English Level..."
                    className="border border-gray-300 w-full p-3 pl-6 rounded outline-none focus:border-[#E17A1B] transition-all ease-in-out duration-400 cursor-pointer"
                    readOnly
                  />
                  <HiOutlineChevronDown
                    size={20}
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown === "englishLevel" ? false : "englishLevel"
                      )
                    }
                    className="absolute top-4 right-3 text-gray-400 cursor-pointer"
                  />
                  {openDropdown === "englishLevel" && (
                    <div className="absolute top-14 left-0 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10 p-1 transition-all duration-300 ease-in-out">
                      <SearchableDiv
                        content={englishLevel}
                        onSelect={(selected) => {
                          setFormData((prev) => ({
                            ...prev,
                            englishLevel: selected,
                          }));
                          setOpenDropdown(false);
                        }}
                      />
                    </div>
                  )}
                </div>
                <div className="bg-gray-50 relative w-full p-3 text-black font-bold">
                  <div className="absolute left-0 top-0 w-1 h-full bg-[#E17A1B] rounded-t transition-all duration-700 origin-top z-1 scale-y-100 "></div>
                  <h2 className="ml-5">Type of talent you are</h2>
                </div>
                <div className="w-full relative">
                  <input
                    name="talentType"
                    type="text"
                    value={formData.talentType}
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown === "talentType" ? false : "talentType"
                      )
                    }
                    onChange={handleChange}
                    placeholder="Select Freelance Type..."
                    className="border border-gray-300 w-full p-3 pl-6 rounded outline-none focus:border-[#E17A1B] transition-all ease-in-out duration-400 cursor-pointer"
                    readOnly
                  />
                  <HiOutlineChevronDown
                    size={20}
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown === "talentType" ? false : "talentType"
                      )
                    }
                    className="absolute top-4 right-3 text-gray-400 cursor-pointer"
                  />
                  {openDropdown === "talentType" && (
                    <div className="absolute top-14 left-0 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10 p-1 transition-all duration-300 ease-in-out">
                      <SearchableDiv
                        content={talentType}
                        onSelect={(selected) => {
                          setFormData((prev) => ({
                            ...prev,
                            talentType: selected,
                          }));
                          setOpenDropdown(false);
                        }}
                      />
                    </div>
                  )}
                </div>
                <div className="bg-gray-50 relative w-full p-3 text-black font-bold">
                  <div className="absolute left-0 top-0 w-1 h-full bg-[#E17A1B] rounded-t transition-all duration-700 origin-top z-1 scale-y-100 "></div>
                  <h2 className="ml-5">Profile Photo</h2>
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
                  <div className="border border-gray-400 h-auto p-5">
                    <img src="" alt="" />
                    <p></p>
                    <p></p>
                    <input
                      id="img"
                      type="file"
                      accept="image/*"
                      className="hidden"
                    />
                  </div>
                </div>
                <div className="bg-gray-50 relative w-full p-3 text-black font-bold">
                  <div className="absolute left-0 top-0 w-1 h-full bg-[#E17A1B] rounded-t transition-all duration-700 origin-top z-1 scale-y-100 "></div>
                  <h2 className="ml-5">Banner Photo</h2>
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
                  <div className="border border-gray-400 h-auto p-5">
                    <img src="" alt="" />
                    <p></p>
                    <p></p>
                    <input
                      id="img"
                      type="file"
                      accept="image/*"
                      className="hidden"
                    />
                  </div>
                </div>
                <div className="bg-gray-50 relative w-full p-3 text-black font-bold">
                  <div className="absolute left-0 top-0 w-1 h-full bg-[#E17A1B] rounded-t transition-all duration-700 origin-top z-1 scale-y-100 "></div>
                  <h2 className="ml-5">Upload Resume</h2>
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
                  <div className="border border-gray-400 h-auto p-5">
                    <img src="" alt="" />
                    <p></p>
                    <p></p>
                    <input
                      id="img"
                      type="file"
                      accept="image/*"
                      className="hidden"
                    />
                  </div>
                </div>
                <div className="bg-gray-50 relative w-full p-3 text-black font-bold">
                  <div className="absolute left-0 top-0 w-1 h-full bg-[#E17A1B] rounded-t transition-all duration-700 origin-top z-1 scale-y-100 "></div>
                  <h2 className="ml-5">Your Location</h2>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="w-full relative">
                    <input
                      name="location"
                      type="text"
                      value={formData.location}
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === "location" ? false : "location"
                        )
                      }
                      onChange={handleChange}
                      placeholder="Select Location..."
                      className="border border-gray-300 w-full p-3 pl-6 rounded outline-none focus:border-[#E17A1B] transition-all ease-in-out duration-400 cursor-pointer"
                      readOnly
                    />
                    <HiOutlineChevronDown
                      size={20}
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === "location" ? false : "location"
                        )
                      }
                      className="absolute top-4 right-3 text-gray-400 cursor-pointer"
                    />
                    {openDropdown === "location" && (
                      <div className="absolute top-14 left-0 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10 p-1 transition-all duration-300 ease-in-out">
                        <SearchableDiv
                          content={location}
                          onSelect={(selected) => {
                            setFormData((prev) => ({
                              ...prev,
                              location: selected,
                            }));
                            setOpenDropdown(false);
                          }}
                        />
                      </div>
                    )}
                  </div>
                  <div className="relative">
                    <input
                      name="geolocation"
                      type="text"
                      placeholder="Your Address"
                      value={formData.geolocation}
                      onChange={handleChange}
                      className="border border-gray-300 w-full p-3 pl-6 rounded outline-none focus:border-[#E17A1B] transition-all ease-in-out duration-400 "
                    />
                    <FaCrosshairs className="absolute right-3 top-4 text-[#E17A1B] cursor-pointer" />
                  </div>
                  <div className="col-span-2 w-full">
                    <GoogleMaps />
                  </div>
                  <div className="w-full relative">
                    <input
                      name="longitude"
                      type="number"
                      placeholder="Enter Longitude"
                      value={formData.longitude}
                      onChange={handleChange}
                      className="border border-gray-300 w-full p-3 pl-6 rounded outline-none focus:border-[#E17A1B] transition-all ease-in-out duration-400"
                    />
                    <div className="absolute top-4 right-3 group inline-flex items-center">
                      <FaQuestionCircle />
                      <div className="pointer-events-none absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-red-500 text-white text-sm px-8 py-2 rounded shadow-lg whitespace-nowrap z-10">
                        <h1>Add longitude here</h1>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-red-500" />
                      </div>
                    </div>
                  </div>
                  <div className="w-full relative">
                    <input
                      name="latitude"
                      type="number"
                      placeholder="Enter Latitude"
                      value={formData.latitude}
                      onChange={handleChange}
                      className="border border-gray-300 w-full p-3 pl-6 rounded outline-none focus:border-[#E17A1B] transition-all ease-in-out duration-400"
                    />
                    <div className="absolute top-4 right-3 group inline-flex items-center">
                      <FaQuestionCircle />
                      <div className="pointer-events-none absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-red-500 text-white text-sm px-8 py-2 rounded shadow-lg whitespace-nowrap z-10">
                        <h1>Add latitude here</h1>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-red-500" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 relative w-full p-3 text-black font-bold">
                  <div className="absolute left-0 top-0 w-1 h-full bg-[#E17A1B] rounded-t transition-all duration-700 origin-top z-1 scale-y-100 "></div>
                  <h2 className="ml-5">My Skills</h2>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="w-full relative">
                    <input
                      name="skill"
                      type="text"
                      value={formData.skill}
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === "skill" ? false : "skill"
                        )
                      }
                      onChange={handleChange}
                      placeholder="Select a Skill..."
                      className="border border-gray-300 w-full p-3 pl-6 rounded outline-none focus:border-[#E17A1B] transition-all ease-in-out duration-400 cursor-pointer"
                      readOnly
                    />
                    <HiOutlineChevronDown
                      size={20}
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === "skill" ? false : "skill"
                        )
                      }
                      className="absolute top-4 right-3 text-gray-400 cursor-pointer"
                    />
                    {openDropdown === "skill" && (
                      <div className="absolute top-14 left-0 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10 p-1 transition-all duration-300 ease-in-out">
                        <SearchableDiv
                          content={skill}
                          onSelect={(selected) => {
                            setFormData((prev) => ({
                              ...prev,
                              skill: selected,
                            }));
                            setOpenDropdown(false);
                          }}
                        />
                      </div>
                    )}
                  </div>
                  <div>
                    <input
                      name="percentageValue"
                      type="number"
                      placeholder="add % value e.g. 95"
                      value={formData.percentageValue}
                      onChange={handleChange}
                      min={0}
                      max={100}
                      className="border border-gray-300 w-full p-3 pl-6 rounded outline-none focus:border-[#E17A1B] transition-all ease-in-out duration-400 "
                    />
                  </div>
                  <button className="px-7 py-4 bg-[#E17A1B] text-sm font-bold text-white rounded cursor-pointer hover:shadow-2xl/30 w-[50%] ">
                    Add Skills
                  </button>
                </div>
              </div>
            )}
            {isActive === 1 && (
              <div className="flex flex-col gap-10 w-full ">
                <div className="bg-gray-50 relative w-full p-3  flex justify-between items-center">
                  <div className="absolute left-0 top-0 w-1 h-full bg-[#E17A1B] rounded-t transition-all duration-700 origin-top z-1 scale-y-100 "></div>
                  <h2 className="ml-5 text-black font-bold">
                    Add Your Experience
                  </h2>
                  <p
                    className="text-blue-500 text-sm cursor-pointer"
                    onClick={() => setOpenAdd(index)}
                  >
                    + Add Experience
                  </p>
                </div>
                <div
                  className={`${
                    openAdd === 0 ? "hidden" : "flex bg-[#E17A1B] p-5"
                  }`}
                >
                  Hello
                  <button className="text-2xl" onClick={() => setOpenAdd(0)}>
                    x
                  </button>
                </div>
                <div className="bg-gray-50 relative w-full p-3  flex justify-between items-center">
                  <div className="absolute left-0 top-0 w-1 h-full bg-[#E17A1B] rounded-t transition-all duration-700 origin-top z-1 scale-y-100 "></div>
                  <h2 className="ml-5 text-black font-bold">
                    Add Your Education
                  </h2>
                  <p className="text-blue-500 text-sm cursor-pointer">
                    + Add Education
                  </p>
                </div>
              </div>
            )}
            {isActive === 2 && (
              <div className="flex flex-col gap-10 w-full ">
                <div className="bg-gray-50 relative w-full p-3  flex justify-between items-center">
                  <div className="absolute left-0 top-0 w-1 h-full bg-[#E17A1B] rounded-t transition-all duration-700 origin-top z-1 scale-y-100 "></div>
                  <h2 className="ml-5 text-black font-bold">
                    Add Your Projects
                  </h2>
                  <p
                    className="text-blue-500 text-sm cursor-pointer"
                    onClick={() => setOpenAdd(index)}
                  >
                    + Add Projects
                  </p>
                </div>
                <div
                  className={`${
                    openAdd === 0 ? "hidden" : "flex bg-[#E17A1B] p-5"
                  }`}
                >
                  Hello
                  <button className="text-2xl" onClick={() => setOpenAdd(0)}>
                    x
                  </button>
                </div>
              </div>
            )}
            {isActive === 3 && (
              <div className="flex flex-col gap-10 w-full ">
                <div className="bg-gray-50 relative w-full p-3  flex justify-between items-center">
                  <div className="absolute left-0 top-0 w-1 h-full bg-[#E17A1B] rounded-t transition-all duration-700 origin-top z-1 scale-y-100 "></div>
                  <h2 className="ml-5 text-black font-bold">
                    Add Your Awards/Certifications
                  </h2>
                  <p
                    className="text-blue-500 text-sm cursor-pointer"
                    onClick={() => setOpenAdd(index)}
                  >
                    + Add Award
                  </p>
                </div>
                <div
                  className={`${
                    openAdd === 0 ? "hidden" : "flex bg-[#E17A1B] p-5"
                  }`}
                >
                  Hello
                  <button className="text-2xl" onClick={() => setOpenAdd(0)}>
                    x
                  </button>
                </div>
              </div>
            )}
            {isActive === 4 && (
              <div className="flex flex-col gap-10 w-full ">
                <div className="bg-gray-50 relative w-full p-3  flex justify-between items-center">
                  <div className="absolute left-0 top-0 w-1 h-full bg-[#E17A1B] rounded-t transition-all duration-700 origin-top z-1 scale-y-100 "></div>
                  <h2 className="ml-5 text-black font-bold">Add Your Videos</h2>
                  <p
                    className="text-blue-500 text-sm cursor-pointer"
                    onClick={() => setOpenAdd(index)}
                  >
                    + Add Video Url
                  </p>
                </div>
                <div
                  className={`${
                    openAdd === 0 ? "hidden" : "flex bg-[#E17A1B] p-5"
                  }`}
                >
                  Hello
                  <button className="text-2xl" onClick={() => setOpenAdd(0)}>
                    x
                  </button>
                </div>
              </div>
            )}
            {isActive === 5 && (
              <div className="flex flex-col gap-5 w-full ">
                <div className="bg-gray-50 relative w-full p-3  flex justify-between items-center">
                  <div className="absolute left-0 top-0 w-1 h-full bg-[#E17A1B] rounded-t transition-all duration-700 origin-top z-1 scale-y-100 "></div>
                  <h2 className="ml-5 text-black font-bold">Specialization</h2>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="w-full relative">
                    <input
                      name="specialization"
                      type="text"
                      value={formData.specialization}
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === "specialization" ? false : "specialization"
                        )
                      }
                      onChange={handleChange}
                      placeholder="Select a specialization..."
                      className="border border-gray-300 w-full p-3 pl-6 rounded outline-none focus:border-[#E17A1B] transition-all ease-in-out duration-400 cursor-pointer"
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
                  <div>
                    <input
                      name="percentageValue"
                      type="number"
                      placeholder="add % value e.g. 95"
                      value={formData.percentageValue}
                      onChange={handleChange}
                      min={0}
                      max={100}
                      className="border border-gray-300 w-full p-3 pl-6 rounded outline-none focus:border-[#E17A1B] transition-all ease-in-out duration-400 "
                    />
                  </div>
                  <button type="button" className="px-7 py-4 bg-[#E17A1B] text-sm font-bold text-white rounded cursor-pointer hover:shadow-2xl/30 w-[70%] ">
                    Add specialization
                  </button>
                </div>
              </div>
            )}
            {isActive === 6 && (
              <div className="flex flex-col gap-5 w-full ">
                <div className="bg-gray-50 relative w-full p-3  flex justify-between items-center">
                  <div className="absolute left-0 top-0 w-1 h-full bg-[#E17A1B] rounded-t transition-all duration-700 origin-top z-1 scale-y-100 "></div>
                  <h2 className="ml-5 text-black font-bold">Your industrial experience</h2>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="w-full relative">
                    <input
                      name="industrialExperience"
                      type="text"
                      value={formData.industrialExperience}
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === "industrialExperience" ? false : "industrialExperience"
                        )
                      }
                      onChange={handleChange}
                      placeholder="Select your industrial experience..."
                      className="border border-gray-300 w-full p-3 pl-6 rounded outline-none focus:border-[#E17A1B] transition-all ease-in-out duration-400 cursor-pointer"
                      readOnly
                    />
                    <HiOutlineChevronDown
                      size={20}
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === "industrialExperience" ? false : "industrialExperience"
                        )
                      }
                      className="absolute top-4 right-3 text-gray-400 cursor-pointer"
                    />
                    {openDropdown === "industrialExperience" && (
                      <div className="absolute top-14 left-0 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10 p-1 transition-all duration-300 ease-in-out">
                        <SearchableDiv
                          content={industrialExperience}
                          onSelect={(selected) => {
                            setFormData((prev) => ({
                              ...prev,
                              industrialExperience: selected,
                            }));
                            setOpenDropdown(false);
                          }}
                        />
                      </div>
                    )}
                  </div>
                  <div>
                    <input
                      name="percentageValue"
                      type="number"
                      placeholder="add % value e.g. 95"
                      value={formData.percentageValue}
                      onChange={handleChange}
                      min={0}
                      max={100}
                      className="border border-gray-300 w-full p-3 pl-6 rounded outline-none focus:border-[#E17A1B] transition-all ease-in-out duration-400 "
                    />
                  </div>
                  <button type="button" className="px-7 py-4 bg-[#E17A1B] text-sm font-bold text-white rounded cursor-pointer hover:shadow-2xl/30 w-[70%] ">
                    Add industrial experience
                  </button>
                </div>
              </div>
            )}
            {isActive === 7 && (
              <div className="flex flex-col gap-10 w-full ">
                <div className="bg-gray-50 relative w-full p-3  flex justify-between items-center">
                  <div className="absolute left-0 top-0 w-1 h-full bg-[#E17A1B] rounded-t transition-all duration-700 origin-top z-1 scale-y-100 "></div>
                  <h2 className="ml-5 text-black font-bold">
                    FAQ list
                  </h2>
                  <p
                    className="text-blue-500 text-sm cursor-pointer"
                    onClick={() => setOpenAdd(index)}
                  >
                    + Add profile FAQ
                  </p>
                </div>
                <div
                  className={`${
                    openAdd === 0 ? "hidden" : "flex bg-[#E17A1B] p-5"
                  }`}
                >
                  Hello
                  <button className="text-2xl" onClick={() => setOpenAdd(0)}>
                    x
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="h-auto p-8 shadow-[0_0_15px_rgba(0,0,0,0.25)] w-[75%] flex justify-between items-center ">
          <h2 className="text-xl">
            Update all the latest changes made by you, by just clicking on “Save
            & Update button.
          </h2>
          <button className="px-7 py-4 bg-[#E17A1B] text-sm font-bold text-white rounded cursor-pointer hover:shadow-2xl/30 ">
            Save & Update
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default EditProfile;
