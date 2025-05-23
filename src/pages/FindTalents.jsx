import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import DropdownFilter from "../components/DropdownFilter";
import { HiOutlineChevronUp } from "react-icons/hi";
import { talents } from "../components/home/talents";
import { FaFlag, FaMoneyBill, FaHeart, FaStar } from "react-icons/fa";
import { location } from "../components/location";
import { skill } from "../components/skills";
import { specialization } from "../components/specialization";

const FindTalents = () => {
  const slicedTalents = talents.slice(6, 7);

  return (
    <div>
      <div className="relative h-[40vh] overflow-hidden flex justify-center items-center text-white bg-black">
        <div className="absolute inset-0 z-0 bg-[url(https://2am.ng/wp-content/uploads/2024/09/images-2021-02-22T174600.703.jpeg)] bg-no-repeat bg-cover opacity-10 "></div>
        <div className="mt-20">
          <h1 className="text-5xl font-extrabold">Discover The Right Talent</h1>
        </div>
      </div>

      <div className="h-auto flex flex-col items-center gap-20 mb-40">
        <div className="text-center mt-15">
          <h2 className="text-4xl font-semibold flex flex-col gap-3">
            <span className="text-[#E17A1B]">Start Hiring!</span> Search for the
            right talent
          </h2>
        </div>

        <div className="flex gap-10 text-sm w-full max-w-6xl">
          <div className="border border-gray-100 w-[35%]">
            <div className="p-5 pl-8 border border-gray-100">
              <h3 className="font-semibold">Filter talents by</h3>
            </div>
            <div className="p-5 pl-8 flex flex-col gap-3 border border-gray-100">
              <h3 className="font-semibold">Start Your Search</h3>
              <div className="flex items-center w-full border border-gray-300 rounded-sm px-2">
                <div className="flex items-center h-12 w-full text-md">
                  <input
                    type="text"
                    placeholder="Type keyword"
                    className="p-3 pl-4 w-50 outline-none"
                  />
                </div>
                <Link
                  to="/find-talents"
                  className="px-2 h-12 flex items-center text-[#E17A1B] cursor-pointer"
                >
                  <FaSearch />
                </Link>
              </div>
            </div>
            <DropdownFilter title="Specialization" contents={specialization} />
            <DropdownFilter title="Skills" contents={skill} />
            <DropdownFilter title="Location" contents={location} />
            <div className="flex flex-col justify-center items-center gap-5 text-center p-5 pl-8 border border-gray-100">
              <div className="w-[60%]">
                <p className="text-[#676767]">
                  Click “Apply Filter” to apply latest changes made by you.
                </p>
              </div>
              <Link
                to="/find-talents"
                className="flex items-center justify-center gap-4 bg-[#E17A1B] rounded text-white font-bold  px-4 py-2 hover:shadow-2xl/20 transition duration-300 w-full"
              >
                Apply Filters
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-10 w-[65%]">
            <div className="flex gap-5 text-xs">
              <Link
                to="/find-talents"
                className="border border-gray-200 rounded-full px-6 py-1 font-medium hover:border-[#E17A1B] hover:text-[#E17A1B] transition duration-200 flex items-center justify-center whitespace-nowrap"
              >
                Sort By A-Z
              </Link>
              <Link
                className="border border-gray-200 rounded-full px-6 py-1 font-medium hover:border-[#E17A1B] hover:text-[#E17A1B] transition duration-200 flex items-center justify-center gap-2 whitespace-nowrap "
                to="/find-talents"
              >
                <HiOutlineChevronUp /> Sort By Rating DESC
              </Link>
            </div>
            <div className="border border-gray-200 flex flex-col gap-10 p-8 hover:shadow-xl/40 transition duration-400">
              {slicedTalents.map((talent, index) => (
                <div key={index} className="flex gap-7 items-center w-full ">
                  <div className="relative w-25">
                    <div className="absolute left-22 bottom-22 group inline-flex items-center">
                      <div className="h-5 w-5 bg-white rounded-full flex justify-center items-center">
                        <div className="h-3 w-3 rounded-full bg-[#E17A1B]"></div>
                      </div>
                      <div className="pointer-events-none absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-red-500 text-white text-sm px-8 py-2 rounded shadow-lg whitespace-nowrap z-10">
                        <h1>Offline</h1>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-red-500" />
                      </div>
                    </div>
                    <Link to={`/talents/${talent.id}`}>
                      <img
                        src={
                          talent.image
                            ? talent.image
                            : "https://2am.ng/wp-content/uploads/2024/08/360_F_417452781_3zAgEnknPGOhnpoM78VWK7G1zd9JKgvD-225x225.jpg"
                        }
                        alt=""
                        className="h-25 w-full cursor-pointer"
                      />
                    </Link>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <div className="relative group inline-flex items-center h-5">
                        <img
                          src="https://2am.ng/wp-content/uploads/2024/08/emails.png"
                          alt="email verified"
                          className="h-5"
                        />
                        <div className="pointer-events-none absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-red-500 text-white text-sm px-8 py-2 rounded shadow-lg whitespace-nowrap z-10">
                          <h1>Email Verified</h1>
                          <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-red-500" />
                        </div>
                      </div>
                      <div className="relative group inline-flex items-center h-5">
                        <img
                          src="https://2am.ng/wp-content/uploads/2024/08/verified.png"
                          alt="identity verified"
                          className="h-5"
                        />
                        <div className="pointer-events-none absolute bottom-full mb-2 left-1/5 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-red-500 text-white text-sm px-8 py-2 rounded shadow-lg whitespace-nowrap z-10">
                          <h1>Identity Verified</h1>
                          <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-red-500" />
                        </div>
                      </div>

                      <Link to={`/talents/${talent.id}`}>{talent.name}</Link>
                    </div>
                    <div className="pb-3">
                      <Link to={`/talents/${talent.id}`} className="text-xl hover:text-[#E17A1B] cursor-pointer">
                        {talent.skills?.length > 40
                          ? `${talent.skills.slice(0, 40)}...`
                          : talent.skills}
                      </Link>
                    </div>
                    <div className="flex gap-3 items-center text-sm text-gray-500">
                      <div className="flex gap-1 items-center">
                        <FaMoneyBill />
                        <p>{talent.salary}</p>
                      </div>
                      <div className="flex gap-1 items-center">
                        <FaFlag />
                        <p>{talent.country}</p>
                      </div>
                      <div className="flex gap-1 items-center cursor-pointer">
                        <FaHeart className="hover:text-red-500" />
                        <p>Save</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center text-sm cursor-pointer">
                    <div className="flex gap-1 items-center text-xl">
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                    </div>
                    <p className="flex flex-col items-center">
                      <span className="text-lg">
                        <span className="text-2xl">0</span>/5
                      </span>

                      <span className="text-blue-500 text-xs">
                        (0 Feedback)
                      </span>
                    </p>
                  </div>
                </div>
              ))}
              <div className="flex justify-center items-center gap-2 text-xs cursor-pointer">
                {[
                  "Mobile UI/UX Design",
                  "Product Lifecycle Management",
                  "Responsive Design",
                  "Scrum Framework",
                ].map((item, index) => (
                  <Link
                    key={index}
                    to="/find-talents"
                    className="border border-gray-200 rounded-full px-6 py-2 font-medium hover:border-[#E17A1B] hover:bg-[#E17A1B] hover:text-white transition duration-200 flex items-center justify-center whitespace-nowrap"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindTalents;
