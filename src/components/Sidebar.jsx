import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import {
  FaDesktop,
  FaCheckSquare,
  FaPencilAlt,
  FaBriefcase,
  FaHeart,
  FaTag,
  FaBars,
} from "react-icons/fa";
import { FaShield } from "react-icons/fa6";
import { HiChevronRight } from "react-icons/hi";
import { NavLink, Link } from "react-router-dom";

const Sidebar = ({ closeBar, handleClose }) => {
  const [barDrop, setBarDrop] = useState([]);
  const [hoverSide, setHoverSide] = useState(null);
  const timeoutRef = useRef(null);

  const handleToggle = (index) => {
    if (barDrop.includes(index)) {
      setBarDrop(barDrop.filter((i) => i !== index));
    } else {
      setBarDrop([...barDrop, index]);
    }
  };

  const handleMouseEnter = (index) => {
    clearTimeout(timeoutRef.current);
    setHoverSide(index);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHoverSide(null);
    }, 100);
  };

  const currentUser = useSelector((state) => state.user.currentUser);

  const sidebarContent = [
    {
      id: 1,
      title: "View my Profile",
      img: <FaDesktop />,
    },
    {
      id: 2,
      title: "Identity Verification",
      img: <FaCheckSquare />,
      to: "/dashboard/identity-verification",
    },
    {
      id: 3,
      title: "Manage Portfolios",
      img: <FaPencilAlt />,
      subContent: [
        { name: "Add Portfolio", to: "/dashboard/portfolio/add-portfolio" },
        {
          name: "Portfolio Listings",
          to: "/dashboard/portfolio/portfolio-listings",
        },
      ],
    },
    {
      id: 4,
      title: "Manage Projects",
      img: <FaBriefcase />,
      subContent: [
        { name: "Proposals", to: "/dashboard/projects/proposal" },
        {
          name: "Ongoing Projects",
          to: "/dashboard/projects/ongoing-projects",
        },
        {
          name: "Completed Projects",
          to: "/dashboard/projects/completed-projects",
        },
        {
          name: "Cancelled Projects",
          to: "/dashboard/projects/cancelled-projects",
        },
      ],
    },
    {
      id: 5,
      title: "Manage Services",
      img: <FaPencilAlt />,
      subContent: [
        { name: "Post a Service", to: "/dashboard/services/post-a-service" },
        { name: "Posted Services", to: "/dashboard/services/posted-services" },
        {
          name: "Ongoing Services",
          to: "/dashboard/services/ongoing-services",
        },
        {
          name: "Completed Services",
          to: "/dashboard/services/completed-services",
        },
        {
          name: "Cancelled Services",
          to: "/dashboard/services/cancelled-services",
        },
      ],
    },
    {
      id: 6,
      title: "Saved Items",
      img: <FaHeart />,
      to: "/dashboard/saved-items",
    },
    {
      id: 7,
      title: "Dispute",
      img: <FaShield />,
      to: "/dashboard/dispute",
    },
    {
      id: 8,
      title: "Help and Support",
      img: <FaTag />,
      to: "/dashboard/help-and-support",
    },
  ];

  return (
    <div
      className={`bg-white h-full fixed z-1000000  ${
        closeBar ? "w-15" : "w-70"
      }  transition-all ease-in-out duration-600 shadow-2xl/40`}
    >
      <div
        className={`w-full h-40 bg-[#323232] relative overflow-hidden ${
          closeBar && "opacity-60"
        }`}
      >
        {!closeBar && (
          <div className="absolute inset-0 z-0 opacity-40 bg-[url(https://2am.ng/wp-content/themes/workreap/images/frbanner-352x200.jpg)] bg-no-repeat bg-cover bg-center"></div>
        )}
      </div>
      <div
        onClick={handleClose}
        className="absolute right-[-20px] top-5 p-3 bg-white rounded-full z-999999 shadow-[0_0_15px_rgba(0,0,0,0.25)] cursor-pointer"
      >
        <FaBars />
      </div>
      <div
        className={`flex flex-col justify-center items-center gap-6 ${
          closeBar ? "-translate-y-6" : "-translate-y-15"
        } `}
      >
        <div
          className={` rounded-full bg-white   ${
            closeBar
              ? "h-13 w-13 p-1 drop-shadow-2xl/20"
              : "h-30 w-30 p-2 shadow-2xl/30"
          }`}
        >
          <img
            src="https://2am.ng/wp-content/uploads/2024/08/360_F_417452781_3zAgEnknPGOhnpoM78VWK7G1zd9JKgvD-150x150.jpg"
            alt="profile"
            className="flex rounded-full h-full w-full"
          />
        </div>
        {!closeBar && (
          <div className="flex flex-col justify-center items-center gap-2">
            <h1 className="font-medium text-lg hover:text-[#E17A1B] cursor-pointer transition-all ease-in-out duration-300">
              {currentUser?.name || "Guest"}
            </h1>
            <Link
              to="/dashboard/post-service"
              className="bg-[#E17A1B] px-10 py-4 text-white hover:shadow-2xl/40 cursor-pointer rounded-md text-sm font-semibold transition-all ease-in-out duration-400"
            >
              Post a Service
            </Link>
          </div>
        )}
      </div>
      <div>
        {sidebarContent.map((content, index) =>
          content.to ? (
            <NavLink
              to={content.to ? content.to : `/talents/${currentUser.name}`}
              key={content.id}
              onClick={() =>
                !closeBar && content.subContent && handleToggle(index)
              }
              className={({ isActive }) =>
                `flex gap-5 p-3  cursor-pointer transition-all ease-in-out duration-200 text-sm  ${
                  closeBar && "justify-center items-center"
                } ${
                  isActive
                    ? "text-[#E17A1B] bg-gray-100"
                    : "hover:text-black hover:bg-gray-100 text-gray-400"
                }`
              }
            >
              <span className="w-5 h-5 flex justify-center items-center">
                {content.img}
              </span>
              {!closeBar && <h1>{content.title}</h1>}
            </NavLink>
          ) : (
            <div
              key={content.id}
              onClick={() =>
                !closeBar && content.subContent && handleToggle(index)
              }
              onMouseEnter={() =>
                closeBar && content.subContent && handleMouseEnter(index)
              }
              onMouseLeave={() =>
                closeBar && content.subContent && handleMouseLeave()
              }
              className={` flex flex-col p-2 hover:text-black hover:bg-gray-100 text-gray-400 cursor-pointer transition-all ease-in-out duration-200 text-sm ${
                closeBar && "justify-center items-center"
              }`}
            >
              <div
                className={`flex items-center p-1 ${
                  !closeBar && "justify-between"
                }`}
              >
                <div
                  className={`relative flex justify-center items-center gap-5 ${
                    closeBar && "w-full"
                  }`}
                >
                  <span className="flex items-center justify-center w-5 h-5">
                    {content.img}
                  </span>
                  {!closeBar && <h1>{content.title}</h1>}
                  {closeBar && content.subContent && (
                    <div className="relative flex items-center group">
                      {/* Arrow */}
                      <div
                        className={`absolute top-1/2 left-full -translate-y-1/2 ml-4 w-0 h-0 transform transition-all duration-600 whitespace-nowrap
                          ${hoverSide === index ? "opacity-100" : "opacity-0"}
                          border-t-8 border-b-8 border-r-8 border-t-transparent border-b-transparent border-r-black`}
                      />
                      {/* Tooltip */}
                      <div
                        className={`absolute flex flex-col left-full top-1/2 -translate-y-1/2 ml-4 bg-black text-white text-sm rounded shadow-lg whitespace-nowrap z-10
                          transition-all duration-600 transform w-64
                          ${
                            hoverSide === index
                              ? "opacity-100 scale-100 translate-x-2"
                              : "opacity-0 scale-95  -translate-x-1 pointer-events-none"
                          }`}
                      >
                        {content.subContent.map((subItems, subIndex) => (
                          <NavLink
                            key={subIndex}
                            to={subItems.to}
                            className="px-4 py-2 hover:bg-gray-700 border-b border-gray-700 cursor-pointer"
                          >
                            {subItems.name}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                {!closeBar && (
                  <div>
                    {content.subContent && (
                      <p>
                        <HiChevronRight
                          className={`transition-transform duration-300 ${
                            barDrop.includes(index) && "rotate-90"
                          }`}
                        />
                      </p>
                    )}
                  </div>
                )}
              </div>
              {!closeBar && (
                <div
                  className={`transition-all duration-700 ease-in-out overflow-hidden ${
                    barDrop.includes(index)
                      ? "max-h-[400px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {Array.isArray(content.subContent) &&
                    content.subContent.map((subItems, subIndex) => (
                      <NavLink
                        key={subIndex}
                        to={subItems.to}
                        className={({ isActive }) =>
                          `py-2 ml-10 border-l border-dashed border-gray-300 ${
                            isActive
                              ? "text-[#E17A1B]"
                              : " hover:text-black text-gray-500"
                          }`
                        }
                      >
                        <ul className="flex items-center gap-2 ml-10">
                          <div className="h-[1px] w-2 border border-dashed border-gray-300"></div>
                          <li>{subItems.name}</li>
                        </ul>
                      </NavLink>
                    ))}
                </div>
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Sidebar;
