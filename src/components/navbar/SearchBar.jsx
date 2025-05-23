import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const SearchBar = ({isHome}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Talents');
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Navigate based on selection
  const handleSearch = () => {
    if (selectedOption === 'Talents') {
      navigate('/find-talents');
    } else if (selectedOption === 'Jobs') {
      navigate('/jobs');
    }
  };

  return (
    isHome ? (
    <div className='flex items-center w-full'>
      <div className='flex items-center rounded-l-md shadow-xl bg-white h-16 w-full text-xl'>
        <input
          type='text'
          placeholder="I'm looking for"
          className='px-4 py-2 w-50 outline-none'
        />
      </div>
      <Link
        to='/talents'
        className='bg-[#E17A1B] px-6 py-2 h-16 flex items-center text-white rounded-r-md shadow-xl cursor-pointer'
      >
        <FaSearch />
      </Link>
    </div>
    )
    : (
      <div className='flex items-center'>
      <div className='flex items-center rounded-l-md shadow-xl bg-white h-13'>
        <input
          type='text'
          placeholder="I'm looking for"
          className='px-4 py-2 w-50 outline-none'
        />
        
         <div className='relative' ref={dropdownRef}>
          <div
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className='cursor-pointer px-4 py-2 flex items-center bg-white border-l border-gray-400 w-60 justify-between'
          >
            {selectedOption} <FiChevronDown />
          </div>

          {/* Dropdown menu */}
          <div
            className={`absolute top-11 left-0 flex flex-col bg-white border-t border-gray-400 shadow-md rounded-b-md w-60 z-20 transition-all duration-200 ease-in-out ${
              dropdownOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
            }`}
          >
            <div
              onClick={() => {
                setSelectedOption('Talents');
                setDropdownOpen(false);
              }}
              className='px-4 py-2 hover:bg-gray-100 flex items-center cursor-pointer justify-between'
            >
              Talents {selectedOption === 'Talents' && <span className='text-green-500 font-bold'>✓</span>}
            </div>
            <div
              onClick={() => {
                setSelectedOption('Jobs');
                setDropdownOpen(false);
              }}
              className='px-4 py-2 hover:bg-gray-100 flex items-center cursor-pointer justify-between'
            >
              Jobs {selectedOption === 'Jobs' && <span className='text-green-500 font-bold'>✓</span>}
            </div>
          </div>
        </div>
        
      </div>
      

      {/* Search Button */}
      <button
        onClick={handleSearch}
        className='bg-[#E17A1B] px-4 py-2 h-13 flex items-center text-white rounded-r-md shadow-xl'
      >
        <FaSearch />
      </button>
    </div>
    ))
  }

  ;

export default SearchBar;
