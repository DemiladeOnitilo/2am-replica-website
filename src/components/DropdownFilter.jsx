import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiOutlineChevronDown } from "react-icons/hi";

const DropdownFilter = ({ title, contents, isJobs }) => {
  const [openIndexes, setOpenIndexes] = useState([]);
  const [selected, setSelected] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredContents, setFilteredContents] = useState(contents);

  const handleToggle = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  const handleCheckboxChange = (value) => {
    setSelected((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  React.useEffect(() => {
    if (searchTerm.trim()) {
      const regex = new RegExp(searchTerm.trim(), "i");
      setFilteredContents(
        contents.filter((item) => {
          if (typeof item === "string") {
            return regex.test(item);
          } else if (item.main && regex.test(item.main)) {
            return true;
          } else if (item.sub && Array.isArray(item.sub)) {
            return item.sub.some((sub) => regex.test(sub));
          }
          return false;
        })
      );
    } else {
      setFilteredContents(contents);
    }
  }, [searchTerm, contents]);

  return (
    <div className="p-5 pl-8 border border-gray-100">
      <div
        className="flex justify-between items-center gap-3 cursor-pointer"
        onClick={() => handleToggle(0)}
      >
        <div className="flex items-center gap-3">
          <h3 className="text-sm font-semibold">{title}:</h3>
          <p className="text-blue-400 text-xs">({selected.length} selected)</p>
        </div>
        <HiOutlineChevronDown
          className={`transition-transform duration-300 ${
            openIndexes.includes(0) ? "rotate-180" : ""
          }`}
        />
      </div>

      <div
        className={`transition-all duration-700 ease-in-out overflow-hidden ${
          openIndexes.includes(0)
            ? "max-h-[400px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-3 mt-4">
          <div className="flex items-center w-full border border-gray-300 rounded-sm px-2">
            <input
              type="text"
              placeholder={`Search ${title}`}
              className="p-3 pl-4 w-full outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Link
              to={isJobs ? "/jobs" : "/find-talents"}
              className="px-2 h-12 flex items-center text-[#E17A1B] cursor-pointer"
            >
              <FaSearch />
            </Link>
          </div>
          <div className="mt-4 flex flex-col gap-3 text-sm pl-2 max-h-40 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-400">
            {filteredContents.map((content, index) => {
              if (typeof content === "string") {
                return (
                  <label key={index} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="accent-green-500 transition-all ease-in-out duration-500 scale-100 checked:scale-110"
                      checked={selected.includes(content)}
                      onChange={() => handleCheckboxChange(content)}
                    />
                    {content}
                  </label>
                );
              }

              return (
                <div key={index} className="flex flex-col gap-1">
                  <label className="flex items-center gap-2 font-semibold">
                    <input
                      type="checkbox"
                      className="accent-green-500 scale-100 checked:scale-110"
                      checked={selected.includes(content.main)}
                      onChange={() => handleCheckboxChange(content.main)}
                    />
                    {content.main}
                  </label>
                  <div className="pl-6 flex flex-col gap-1">
                    {Array.isArray(content.sub) &&
                      content.sub.filter((subItem) => subItem.toLowerCase().includes(searchTerm.toLowerCase())).map((subItem, subIndex) => (
                        <label
                          key={`${index}-${subIndex}`}
                          className="flex items-center gap-2 text-gray-600 text-sm"
                        >
                          <input
                            type="checkbox"
                            className="accent-green-500 scale-100 checked:scale-110"
                            checked={selected.includes(subItem)}
                            onChange={() => handleCheckboxChange(subItem)}
                          />
                          {subItem}
                        </label>
                      ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownFilter;
