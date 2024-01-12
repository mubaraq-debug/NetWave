import React, { useState } from 'react'
import logo from '../assets/logo.PNG'
import { FiChevronDown, FiMenu } from "react-icons/fi";

function Navbar() {

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu  = () => {
    setMenuOpen(!isMenuOpen);
  }

  return (
    <div className="lg:p-10 md:p-5 md:flex md:flex-row md:items-center md:justify-between flex flex-row p-6 items-center">
      <div className="logo flex flex-row items-center lg:gap-2 md:flex md:flex-row md:items-center md:gap-2">
        <div className="img">
          <img src={logo} alt="logo-img" />
        </div>
        <h2 className="lg:text-3xl font-bold text-2xl">
          Netwave.
        </h2>
      </div>

      {/* mobile screen navbar */}
      <div className="hamburger md:hidden ml-auto">
        <FiMenu size={25} onClick={toggleMenu} />

        <div className={`nav-list ${isMenuOpen ? "block" : "hidden"}`}>
          <ul className="flex flex-col gap-4 md:static absolute top-18 right-0 border mr-5 border-solid px-6 py-2 w-5/12 rounded-md font-semibold bg-textColor text-white">
            <li className="cursor-pointer flex items-center gap-3">
              Projects <FiChevronDown />
            </li>
            <li className="cursor-pointer  flex items-center gap-3">
              Careers <FiChevronDown />
            </li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Contact</li>
            <li className="cursor-pointer">Blog</li>
          </ul>
        </div>
      </div>

      <div className={`nav-list`}>
        <ul className="md:flex md:flex-row md:items-center lg:gap-8 md:font-semibold md:gap-6 md:static hidden">
          <li className="md:flex md:flex-row md:items-center md:gap-1 cursor-pointer">
            Projects <FiChevronDown />
          </li>
          <li className="md:flex md:flex-row md:items-center md:gap-1 cursor-pointer">
            Careers <FiChevronDown />
          </li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Contact</li>
          <li className="cursor-pointer">Blog</li>
        </ul>
      </div>
      <div className="btn">
        <button className="md:border lg:px-4 lg:py-3 md:border-none text-white bg-textColor md:py-2 md:px-3 md:block hidden">
          Get in touch
        </button>
      </div>
    </div>
  );
}

export default Navbar