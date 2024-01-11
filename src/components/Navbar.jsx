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
        <h2 className="lg:text-3xl font-bold md:text-2xl text-base">Netwave.</h2>
      </div>

      <div className="hamburger md:hidden ml-auto">
        <FiMenu size={25} onClick={toggleMenu} />
      </div>

      <div className={`nav-list ${isMenuOpen ? "block" : "hidden"}`}>
        <ul className="md:flex md:flex-row md:items-center lg:gap-8 md:font-semibold md:gap-6 md:static absolute">
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
        <div className="btn absolute">
          <button className="md:border lg:px-4 lg:py-3 md:border-none text-white bg-textColor md:py-2 md:px-3 md:hidden block">
            Get in touch
          </button>
        </div>
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