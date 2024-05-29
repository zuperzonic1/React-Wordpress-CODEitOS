import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="relative w-full h-[30vh] bg-cover bg-center featured-bg-image z-20">
      <div className="container pt-4 mx-auto flex justify-between items-start h-full px-4">
        <div className="flex items-start">
          <Link to="/">
            <img src="/logo.svg" alt="Logo" className="h-12" />
          </Link>
        </div>

        <div className="hidden md:flex items-start space-x-4 mt-3">
          <form action="" className="relative flex">
            <input
              type="search"
              className="text-xs text-white peer cursor-pointer relative z-10 h-8 w-10 rounded-lg border bg-transparent pr-6 outline-none focus:rounded-r-none focus:w-full focus:cursor-text focus:border-orange-500 focus:px-3"
              placeholder="Typing..."
            />
            <button className="absolute top-0 right-0 bottom-0 my-auto h-8 w-10 flex items-center justify-center bg-transparent border border-white rounded-lg peer-focus:relative peer-focus:rounded-l-none peer-focus:border-orange-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="20"
                viewBox="0 0 50 50"
                className="fill-white"
              >
                <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>
              </svg>
            </button>
          </form>

          <Link to="/articles">
            <button className="text-white mt-1 font-bold">CONTENT</button>
          </Link>
          <div className="relative">
            <button
              className="text-white mt-1 font-bold flex items-center"
              onClick={toggleDropdown}
            >
              CATEGORIES
              <svg
                className={`w-4 h-4 ml-1 transition-transform ${
                  isDropdownOpen ? "transform rotate-180" : ""
                }`}
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

        <button
          className="md:hidden text-white mt-1"
          onClick={toggleMobileMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="fixed top-0 left-0 w-64 h-full bg-black text-white z-30 transition-transform transform translate-x-0 md:hidden">
          <div className="p-4">
            <button
              className="text-white mb-4"
              onClick={toggleMobileMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <form action="" className="relative flex mb-4">
              <input
                type="search"
                className="text-xs text-white peer cursor-pointer relative z-10 h-8 w-full rounded-lg border bg-transparent pr-6 outline-none focus:cursor-text focus:border-Orange  px-3"
                placeholder="Typing..."
              />
              <button className="absolute top-0 right-0 bottom-0 my-auto h-8 w-10 flex items-center justify-center bg-transparent border border-white rounded-lg peer-focus:relative peer-focus:border-Orange">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="20"
                  height="20"
                  viewBox="0 0 50 50"
                  className="fill-white"
                >
                  <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>
                </svg>
              </button>
            </form>
            <Link to="/articles" className="block mb-2">
              <button className="text-white font-bold">CONTENT</button>
            </Link>
            <div className="relative">
              <button
                className="text-white font-bold flex items-center"
                onClick={toggleDropdown}
              >
                CATEGORIES
                <svg
                  className={`w-4 h-4 ml-1 transition-transform ${
                    isDropdownOpen ? "transform rotate-180" : ""
                  }`}
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
                <div className="mt-2 bg-white rounded-md shadow-lg py-2">
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
      )}
    </nav>
  );
};

export default Navbar;
