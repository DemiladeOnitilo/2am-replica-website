import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../store/userSlice";
import { FaHome, FaComment, FaDesktop, FaPen, FaDatabase, FaFile, FaArrowRight } from "react-icons/fa";
import SearchBar from "./navbar/SearchBar";
import NavDropdown from "./navbar/NavDropdown";
import NavItem from "./navbar/NavItem";
import { browsejob } from "./navbar/browsejob";
import { solutions } from "./navbar/solutions";
import { FaGear } from "react-icons/fa6";

const NavBar = ({ openLogin, openSignup }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const lastScrollY = useRef(0);
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isHome = location.pathname === "/";
  const isTalents = location.pathname === "/find-talents";
  const isJobs = location.pathname === "/jobs";
  const isDashboard = location.pathname.startsWith("/dashboard");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 0);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    dispatch(logoutUser());
    localStorage.removeItem("persist:root");
    localStorage.removeItem("user");
    navigate("/"); 
  };

  const signedin = [
  {
    id: 1,
    name: "Dashboard",
    img: <FaDatabase />,
    route: "dashboard/insights",
  },
  {
    id: 2,
    name: "Post a Service",
    img: <FaPen />,
    route: "dashboard/post-service",
  },
  {
    id: 3,
    name: "View My Profile",
    img: <FaDesktop />,
    route: "talents",
  },
  {
    id: 4,
    name: "Settings",
    img: <FaGear />,
    subContent: [
        { 
            subName: "Edit my profile",
            subRoute: "dashboard/settings/edit-profile", 
        },
        {
            subName: "Payouts Settings",
            subRoute: "dashboard/settings/payouts-settings"
        },
        {
            subName: "Account Settings",
            subRoute: "dashboard/settings/account-settings"
        }
    ],
  },
  {
    id: 5,
    name: "Invoice",
    img: <FaFile />,
    route: "dashboard/invoices"
  },
  {
    id: 6,
    img: <FaArrowRight />,
    name: "Logout",
  }
];


  return (
    <nav
      className={`
        top-0 left-0 h-20 w-full z-9999 px-6 py-4 transition-all duration-300 flex justify-between items-center border-b border-gray-300 ${
          isDashboard ? "static" : "fixed"
        }
        ${
          (isHome || isTalents || isJobs) && !isScrolled
            ? "bg-transparent inset-shadow-xl"
            : "bg-white shadow-md"
        }
      `}
    >
      <div className="flex justify-center items-center gap-4">
        <Link to="/">
          <img
            src={`${
              (isHome || isTalents || isJobs) && !isScrolled
                ? "https://2am.ng/wp-content/uploads/2024/07/logo-removebg-White.png"
                : "https://2am.ng/wp-content/uploads/2024/07/logo-removebg-preview-1.png"
            }`}
            alt="Logo"
            className="h-10"
          />
        </Link>

        {!isDashboard && (
          <div
            className={` ${
              (isHome || isTalents || isJobs) && !isScrolled
                ? "bg-white"
                : "bg-gray-300"
            } h-10 w-px mx-2`}
          ></div>
        )}

        {isDashboard ? null : <SearchBar />}
      </div>

      {currentUser ? (
        <div className="flex items-center gap-6 mr-10">
          <div
            className={`flex gap-6 items-center text-lg ${
              (isHome || isTalents || isJobs) && !isScrolled
                ? "text-white"
                : "text-gray-600"
            }`}
          >
            <NavItem
              to="/"
              label="Home"
              isHome={isHome}
              isTalents={isTalents}
              isJobs={isJobs}
              isScrolled={isScrolled}
            />
            <NavItem
              to="/jobs/all-jobs"
              label="Search Jobs"
              isHome={isHome}
              isTalents={isTalents}
              isJobs={isJobs}
              isScrolled={isScrolled}
            />
          </div>
          <div className="flex items-center gap-5 hoverpointer">
            <NavDropdown name={currentUser?.name || "Guest"} content={signedin} handleLogout={handleLogout}/>
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-6">
          <ul
            className={`flex gap-6 items-center text-lg ${
              (isHome || isTalents || isJobs) && !isScrolled
                ? "text-white"
                : "text-gray-600"
            }`}
          >
            <NavItem
              to="/"
              icon={<FaHome />}
              isHome={isHome}
              isTalents={isTalents}
              isJobs={isJobs}
              isScrolled={isScrolled}
            />
            <NavItem
              label={<NavDropdown name="Solutions" content={solutions} />}
              isHome={isHome}
              isTalents={isTalents}
              isJobs={isJobs}
              isScrolled={isScrolled}
            />
            <NavItem
              to="/how-it-works"
              label="How it works"
              isHome={isHome}
              isTalents={isTalents}
              isJobs={isJobs}
              isScrolled={isScrolled}
            />
            <NavItem
              to="/search-talents"
              label="Find Talents"
              isHome={isHome}
              isTalents={isTalents}
              isJobs={isJobs}
              isScrolled={isScrolled}
            />
            <NavItem
              label={<NavDropdown name="Browse Jobs" content={browsejob} />}
              isHome={isHome}
              isTalents={isTalents}
              isJobs={isJobs}
              isScrolled={isScrolled}
            />
            <NavItem
              to="/contact-us"
              icon={<FaComment />}
              isHome={isHome}
              isTalents={isTalents}
              isJobs={isJobs}
              isScrolled={isScrolled}
            />
            {/* <button
              onClick={() => {
                persistor.purge().then(() => {
                  localStorage.clear(); // Clear all local storage
                  window.location.reload(); // Refresh the app state
                  console.log("Redux Persist data and local storage cleared");
                });
              }}
              className="bg-red-500 text-white p-2 rounded cursor-pointer"
            >
              Reset Users
            </button> */}
          </ul>

          <div className="flex gap-3 justify-center items-center text-center text-sm font-bold">
            <button
              onClick={openLogin}
              className="bg-green-600 text-white px-6 py-2 rounded transition duration-300 ease-in-out transform hover:bg-[#E17A1B] hover:shadow-2xl/40 hover:scale-105"
            >
              Sign In
            </button>
            <button
              onClick={openSignup}
              className="bg-red-600 text-white px-6 py-2 rounded transition duration-300 ease-in-out transform hover:bg-red-700 hover:shadow-2xl/40 hover:scale-105"
            >
              Join Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
