import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { HiOutlineChevronDown, HiOutlineChevronRight } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../../store/jobsSlice";

const NavDropdown = ({ name, content, handleLogout }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const timeoutRef = useRef(null);
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.user.currentUser);

  const handleOptionClick = (route, categoryLabel) => {
    setDropdownOpen(false);
    navigate(`/${route}`);
    dispatch(setCategory(categoryLabel));
  };

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 100);
  };

  return (
    <div
      className="relative flex items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="cursor-pointer flex items-center gap-1"
      >
        {currentUser ? (
          <div className="flex items-center gap-5">
            <img
              src="https://2am.ng/wp-content/uploads/2024/08/360_F_417452781_3zAgEnknPGOhnpoM78VWK7G1zd9JKgvD-150x150.jpg"
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
            <h1>{name}</h1>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <h1>{name}</h1> <HiOutlineChevronDown />
          </div>
        )}
      </div>

      <div
        className={`
          absolute top-9 left-0 bg-white text-black shadow-md z-20
          transform transition-all duration-300 origin-top
          ${currentUser ? "w-60 top-10 left-0" : "w-72 top-9 left-0"}
          ${
            dropdownOpen
              ? "opacity-100 scale-100 translate-y-5"
              : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
          }
        `}
      >
        {content.map((item, index) => (
          <div key={index} className="relative group">
            <div
              onClick={
                currentUser && index === 5 && handleLogout
                  ? handleLogout
                  : () => handleOptionClick(item.route, item.name)
              }
              className="px-4 py-2 text-sm  hover:bg-gray-100 cursor-pointer border-b border-gray-200 flex justify-between items-center"
            >
              <div className="flex items-center gap-3 ">
                <span className="text-gray-400">{item.img}</span>
                <span>{item.name}</span>
              </div>

              {item.subContent && <HiOutlineChevronRight />}
            </div>
            {item.subContent && (
              <div className="absolute right-full top-0 bg-white shadow-md min-w-[180px] z-30 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-200">
                {item.subContent.map((sub, subIdx) => (
                  <div
                    key={subIdx}
                    onClick={() => {
                      setDropdownOpen(false);
                      navigate(`/${sub.subRoute}`);
                    }}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b border-gray-200"
                  >
                    {sub.subName}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavDropdown;
