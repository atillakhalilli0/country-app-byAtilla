import React, { useState } from "react";
import logo from "../../img/wired-gradient-27-globe-hover-rotate.png";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import './Navbar.css'

const Navbar = ({ country, setRegion }) => {
  const uniqueRegions = [...new Set(country.map((item) => item.region))];
  const [theme, setTheme] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  function handleTheme() {
    setTheme(!theme);
    document.documentElement.classList.toggle("dark");
  }

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm fixed top-0 w-full z-10">
      <div className="w-[85%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <img className="h-8 w-8 spin-logo" src={logo} alt="logo" />
            <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">
              Country App
            </span>
          </div>
          <div className="hidden md:flex space-x-4">
            <button
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
              onClick={() => setRegion("")}
            >
              All
            </button>
            {uniqueRegions.map((region) => (
              <button
                key={region}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
                onClick={() => setRegion(region)}
              >
                {region}
              </button>
            ))}
          </div>
          <div className="flex items-center">
            <button
              className="text-gray-800 dark:text-gray-200 transition mr-4"
              onClick={handleTheme}
            >
              {theme ? <FaMoon size={20} /> : <FaSun size={20} />}
            </button>
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-800 dark:text-gray-200 focus:outline-none"
              >
                {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
              </button>
            </div>
          </div>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-2 pt-2 pb-3 space-y-1">
          <button
            className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            onClick={() => {
              setRegion("");
              setMenuOpen(false);
            }}
          >
            All
          </button>
          {uniqueRegions.map((region) => (
            <button
              key={region}
              className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
              onClick={() => {
                setRegion(region);
                setMenuOpen(false);
              }}
            >
              {region}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
