import React, { useState, useEffect } from "react";

function SearchableDiv({ onSelect, content }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(content);

  useEffect(() => {
    if (searchTerm.trim()) {
      const regex = new RegExp(searchTerm.trim(), "i");
      const filtered = content.filter((loc) => regex.test(loc));
      setFilteredOptions(filtered);
    } else {
      setFilteredOptions(content);
    }
  }, [searchTerm, content]);


  return (
    <div className="w-full">
      <input
        type="text"
        placeholder="Search here..."
        className="w-full border border-gray-300 p-2 mb-2 rounded text-sm outline-none focus:border-[#E17A1B] transition-all"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="flex flex-col max-h-40 overflow-y-auto">
        {filteredOptions.length > 0 ? (
          filteredOptions.map((label) => (
            <button
              key={label}
              type="button"
              value={label}
              onMouseDown={() => onSelect(label)}
              className="text-left p-3 hover:bg-gray-100 hover:text-black transition-colors duration-200"
            >
              {label}
            </button>
          ))
        ) : 
        (
          <p className="text-gray-400 p-2">No matches found for..{searchTerm}</p>
        )}
      </div>
    </div>
  );
}

export default SearchableDiv;
