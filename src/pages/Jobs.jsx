import React, { useState } from "react";
import { Link, useParams, useOutletContext } from "react-router-dom";
import { FaSearch, FaCrosshairs, FaFlag } from "react-icons/fa";
import { FiFilePlus } from "react-icons/fi";
import DropdownFilter from "../components/DropdownFilter";
import { HiOutlineChevronDown } from "react-icons/hi";
import { useSelector } from "react-redux";
import { skill } from "../components/skills";

const Jobs = ({ isJobs = true }) => {
  const [geolocation, setGeolocation] = useState(false);
  const [distance, setDistance] = useState(0);

  const handleClick = () => {
    setGeolocation(!geolocation);
  };

  const { category } = useParams();
  const selectedCategory = useSelector((state) => state.jobs.selectedCategory);
  const currentCategory = category || selectedCategory || "All Jobs";
  const currentUser = useSelector((state) => state.user.currentUser);
  const { openSignup } = useOutletContext()

  const jobType = ["Onsite", "Partial Onsite", "Remote"];

  const talentType = [
    "Full-Time Hybrid",
    "Full-time Remote",
    "Part-time Hybrid",
    "Part-time Remote",
  ];

  const categories = [
    "APIGEE API",
    {
      main: "Data and Analytics",
      sub: ["Data Engineering", "Data Science and Analytics"],
    },
    { main: "Database Management", sub: ["Database Administration"] },
    {
      main: "Design and User Experience",
      sub: ["Front End Design", "UI/UX Design"],
    },
    {
      main: "Infrastructure and DevOps",
      sub: ["Cloud Infrastructure", "DevOps"],
    },
    "Product/Program Management",
    { main: "Quality Assurance and Testing", sub: ["Software Testing"] },
    "Scrum/Agile",
    {
      main: "Software Development",
      sub: [
        "Backend Development",
        "Enterprise Application Developm",
        "Frontend Development",
        "Fullstack Development",
        "Mobile App Development",
        "Web Development",
      ],
    },
    "Swagger Spec Development",
  ];

  return (
    <div>
      <div className="relative h-[40vh] overflow-hidden flex justify-center items-center text-white bg-black">
        <div className="absolute inset-0 z-0 bg-[url('//2am.ng/wp-content/uploads/2024/09/IT-Jobs-1.jpg')] bg-no-repeat bg-cover opacity-10 "></div>
        <div className="mt-20">
          <h1 className="text-5xl font-extrabold">Find The Right Project</h1>
        </div>
      </div>

      <div className="h-auto flex flex-col items-center gap-20 mb-40">
        <div className="text-center mt-15">
          <h2 className="text-4xl font-semibold flex flex-col gap-3">
            <span className="text-[#E17A1B]">Start your journey!</span>
            Search from available projects
          </h2>
        </div>

        <div className="flex gap-10 text-sm w-full max-w-6xl">
          <div className="border border-gray-100 w-[30%] h-auto">
            <div className="p-5 pl-8 border border-gray-100">
              <h3 className="font-semibold">Filter Projects by</h3>
            </div>
            <div className="relative p-5 pl-8 flex flex-col gap-3 border border-gray-100 border-b-0">
              <h3 className="font-semibold">Search By Geo Location</h3>
              <div className="flex items-center w-full border border-gray-300 rounded-sm px-2">
                <div className="flex items-center h-12 w-full text-md">
                  <input
                    type="text"
                    placeholder="Geo Location"
                    className="p-3 pl-4 w-50 outline-none"
                  />
                </div>
                <div className="flex justify-center items-center gap-1 ">
                  <button
                    className="px-2 h-12 flex items-center text-[#E17A1B] cursor-pointer"
                  >
                    <FaCrosshairs />
                  </button>
                  <HiOutlineChevronDown
                    className="text-gray-500 cursor-pointer"
                    onClick={handleClick}
                  />
                </div>
              </div>
              {geolocation && (
                <div className="absolute top-25 bg-white p-5 pl-8 w-85 flex flex-col gap-3 border border-gray-400">
                  <label>Distance in ( Miles ) {distance}</label>
                  <input
                    type="range"
                    min="1"
                    max="300"
                    value={distance}
                    onChange={(e) => setDistance(e.target.value)}
                    className="w-full h-2 rounded-lg cursor-pointer"
                  />
                </div>
              )}
            </div>
            <div className="p-5 pl-8 flex flex-col gap-3 border border-gray-100 border-t-0">
              <h3 className="font-semibold">Start Your Search</h3>
              <div className="flex items-center w-full border border-gray-300 rounded-sm px-2">
                <div className="flex items-center h-12 w-full text-md">
                  <input
                    type="text"
                    placeholder="Type keyword"
                    className="p-3 pl-4 w-50 outline-none"
                  />
                </div>
                <button
                  className="px-2 h-12 flex items-center text-[#E17A1B] cursor-pointer"
                >
                  <FaSearch />
                </button>
              </div>
            </div>
            <DropdownFilter
              title="Job Type"
              contents={jobType}
              isJobs={isJobs}
            />
            <DropdownFilter
              title="Talent Type"
              contents={talentType}
              isJobs={isJobs}
            />
            <DropdownFilter
              title="Category"
              contents={categories}
              isJobs={isJobs}
            />
            <DropdownFilter title="Skills" contents={skill} isJobs={isJobs} />
            <div className="flex flex-col justify-center items-center gap-5 text-center p-5 pl-8 border border-gray-100">
              <div className="w-[60%]">
                <p className="text-[#676767]">
                  Click “Apply Filter” to apply latest changes made by you.
                </p>
              </div>
              <button
                className="flex items-center justify-center gap-4 bg-[#E17A1B] rounded text-white font-bold  px-4 py-2 hover:shadow-2xl/20 transition duration-300 w-full"
              >
                Apply Filters
              </button>
            </div>
          </div>
          <div className="w-[70%]">
            {currentCategory === "all-jobs" && (
              <div
                className={`relative w-full max-h-4xl flex gap-5 border border-gray-100 ${
                  currentUser ? "" : "pointer-events-none"
                } `}
              >
                <div className="flex flex-col gap-5 p-5 w-[70%] border-r border-gray-100">
                  <div>
                    <div className="flex gap-2 items-center">
                      <div className="flex items-center h-5">
                        <img
                          src="https://2am.ng/wp-content/uploads/2024/08/emails.png"
                          alt="email verified"
                          className="h-5"
                        />
                      </div>
                      <div className="flex items-center h-5">
                        <img
                          src="https://2am.ng/wp-content/uploads/2024/08/verified.png"
                          alt="identity verified"
                          className="h-5"
                        />
                      </div>
                      <div>
                        <h3>2AM Tech Limited</h3>
                      </div>
                    </div>
                    <div>
                      <h2 className="text-xl">
                        Full Stack Developer (Golang & PHP)
                      </h2>
                    </div>
                  </div>
                  <div>
                    <p className="flex items-center gap-2">
                      <img
                        src="https://2am.ng/wp-content/themes/workreap/images/job-cost.png"
                        alt="Job Cost"
                        className="h-5"
                      />
                      Cost{" "}
                      <span className="text-gray-500 font-semibold">
                        ₦400,000.00 - ₦500,000.00
                      </span>
                    </p>
                  </div>
                  <div>
                    <p>
                      About the Role: 2AM Tech Limited is actively seeking a
                      skilled Full Stack Developer with strong expertise in
                      Golang and solid PHP knowledge, especially in
                      multinational environments. This full-time role...
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <Link
                      to="/find-talents"
                      className="border border-gray-200 rounded-full px-6 py-2 font-medium hover:border-[#E17A1B] hover:bg-[#E17A1B] hover:text-white transition duration-200 flex items-center justify-center whitespace-nowrap"
                    >
                      Frontend Technologies
                    </Link>
                    <Link
                      to="/find-talents"
                      className="border border-gray-200 rounded-full px-6 py-2 font-medium hover:border-[#E17A1B] hover:bg-[#E17A1B] hover:text-white transition duration-200 flex items-center justify-center whitespace-nowrap"
                    >
                      Backend Technologies
                    </Link>
                  </div>
                </div>
                <div className="w-[30%] p-5 flex flex-col gap-4">
                  <p className="flex items-center gap-2">
                    <img
                      src="https://2am.ng/wp-content/themes/workreap/images/job-level.png"
                      alt="job level"
                      className="h-5"
                    />
                    Experienced
                  </p>
                  <p className="flex items-center gap-2">
                    <img
                      src="https://2am.ng/wp-content/themes/workreap/images/job-duration.png"
                      alt="job duration"
                      className="h-5"
                    />
                    Full Time
                  </p>
                  <p className="flex items-center gap-2">
                    <img
                      src="https://2am.ng/wp-content/themes/workreap/images/office-job-location.png"
                      alt="office job location"
                      className="h-5"
                    />
                    Job Type: Partial Onsite
                  </p>
                  <p className="flex items-center gap-2">
                    <img
                      src="https://2am.ng/wp-content/themes/workreap/images/job-type.png"
                      alt="job type"
                      className="h-5"
                    />{" "}
                    Project Type: Fixed Price
                  </p>
                  <p className="flex items-center gap-2">
                    <FaFlag /> Nigeria
                  </p>
                  <p className="flex items-center gap-2">
                    <img
                      src="https://2am.ng/wp-content/themes/workreap/images/favorite.png"
                      alt="Heart"
                      className="h-5"
                    />{" "}
                    Save
                  </p>
                  <Link
                    to="/talents"
                    className="flex items-center justify-center gap-4 bg-[#E17A1B] rounded text-white font-bold  px-4 py-2 hover:shadow-2xl/20 transition duration-300 w-full"
                  >
                    View Job
                  </Link>
                </div>
                {currentUser ? null : (
                  <div className="pointer-events-none absolute bottom-0 left-0 w-full h-90 bg-gradient-to-t from-white via-white/80 to-transparent opacity-90"></div>
                )}
              </div>
            )}
            {currentCategory !== "all-jobs" && currentCategory !== "" && (
              <div
                className={`relative w-full max-h-4xl p-10 flex flex-col items-center justify-center gap-5 border border-dashed border-gray-100 ${
                  currentUser ? "" : "pointer-events-none"
                } `}
              >
                <FiFilePlus className="text-[#E17A1B]" size={200} />
                <p className="text-xl text-gray-600">No Projects Found</p>
                {currentUser ? null : (
                  <div className="pointer-events-none absolute bottom-0 left-0 w-full h-90 bg-gradient-to-t from-white via-white/80 to-transparent opacity-90"></div>
                )}
              </div>
            )}
            {currentUser ? null : (
              <div className="flex flex-col justify-center items-center gap-5 text-center p-8 border border-gray-100 shadow-2xl/40">
                <h1 className="text-3xl font-bold">
                  Join now to view and apply for projects
                </h1>
                <button
                  onClick={openSignup}
                  className="bg-red-600 text-white px-15 py-2 rounded font-bold transition duration-300 ease-in-out transform hover:shadow-2xl/40 hover:scale-105"
                >
                  Sign In
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
