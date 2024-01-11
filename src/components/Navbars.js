// Navbar.js

import React, { useState } from "react";
import { Link } from "react-router-dom"; // If you are using React Router

const Navbars = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-white text-xl font-bold">
            Your Logo
          </Link>
        </div>

        {/* Hamburger menu for mobile */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
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

        {/* Navbar items */}
        <div
          className={`lg:flex items-center ${isMenuOpen ? "block" : "hidden"}`}
        >
          <Link to="/" className="text-white px-4 py-2 hover:bg-gray-700">
            Home
          </Link>
          <Link to="/about" className="text-white px-4 py-2 hover:bg-gray-700">
            About
          </Link>

          {/* Dropdown example */}
          <div className="relative group">
            <button className="text-white px-4 py-2 hover:bg-gray-700 focus:outline-none">
              Dropdown
            </button>
            <div className="absolute hidden bg-gray-800 py-2 space-y-2">
              <Link
                to="/dropdown-item-1"
                className="block px-4 py-2 text-white"
              >
                Item 1
              </Link>
              <Link
                to="/dropdown-item-2"
                className="block px-4 py-2 text-white"
              >
                Item 2
              </Link>
            </div>
          </div>

          {/* Add more items as needed */}
        </div>
      </div>
    </nav>
  );
};

export default Navbars;
