import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="relative w-full h-[30vh] bg-cover bg-center featured-bg-image">
      <div className="container pt-4 mx-auto flex justify-between items-start h-full px-4">
        <div className="flex items-start">
          <Link to="/">
            <img src="/logo.svg" alt="Logo" className="h-12" />
          </Link>
        </div>

        <div className="flex items-start space-x-4">
          <Link to="/articles">
            <button className="text-white font-bold">Articles</button>
          </Link>
          <div className="relative">
            <button className="text-white font-bold" onClick={toggleDropdown}>
              Categories
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2">
                <Link
                  to="/category1"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Category 1
                </Link>
                <Link
                  to="/category2"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Category 2
                </Link>
                <Link
                  to="/category3"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Category 3
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
