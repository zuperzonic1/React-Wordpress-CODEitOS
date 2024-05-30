import { useState } from "react";
import { Link } from "react-router-dom";

const Dropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative">
      <button
        className="text-white mt-1 font-bold flex items-center"
        onClick={toggleDropdown}
      >
        CATEGORIES
        <svg
          className={`w-4 h-4 ml-1 transition-transform ${isDropdownOpen ? "transform rotate-180" : ""}`}
          fill="none"
          stroke="#FF3D00"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-black text-white rounded-md shadow-lg py-2">
          <Link
            to="/category1"
            className="block px-4 py-2 text-gray-300 hover:bg-gray-700"
          >
            Category 1
          </Link>
          <Link
            to="/category2"
            className="block px-4 py-2 text-gray-300 hover:bg-gray-700"
          >
            Category 2
          </Link>
          <Link
            to="/category3"
            className="block px-4 py-2 text-gray-300 hover:bg-gray-700"
          >
            Category 3
          </Link>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
