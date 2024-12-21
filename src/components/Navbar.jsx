import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ onLinkClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track menu visibility
  const navigate = useNavigate();

  // Function to handle smooth scrolling
  const handleNavigation = (section) => {
    if (onLinkClick) {
      onLinkClick(section);
    }

    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const target = document.getElementById(section);
        target?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const target = document.getElementById(section);
      target?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-black text-white w-full transition-all duration-300 ease-in-out lg:px-12">
      {/* Logo Section */}
      <div className="flex items-center">
        <button onClick={() => handleNavigation("home")}>
          <img
            src="/img/Ballers_black_white.png"
            alt="Ballers Logo"
            className="h-12 w-auto cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out sm:h-16"
          />
        </button>
      </div>

      {/* Navigation Links for Desktop */}
      <ul className="hidden md:flex gap-6 lg:gap-10 text-base lg:text-lg font-semibold">
        <li>
          <button
            onClick={() => handleNavigation("home")}
            className="hover:text-gray-400 transition-colors duration-300"
          >
            Home
          </button>
        </li>
        <li>
          <Link
            to="/about"
            className="hover:text-gray-400 transition-colors duration-300"
          >
            About Us
          </Link>
        </li>
        <li>
          <button
            onClick={() => handleNavigation("investments")}
            className="hover:text-gray-400 transition-colors duration-300"
          >
            Investments
          </button>
        </li>
        <li>
          <button
            onClick={() => handleNavigation("philanthropy")}
            className="hover:text-gray-400 transition-colors duration-300"
          >
            Philanthropy
          </button>
        </li>
        <li>
          <button
            onClick={() => handleNavigation("community")}
            className="hover:text-gray-400 transition-colors duration-300"
          >
            Community
          </button>
        </li>
      </ul>

      {/* Login Button */}
      <Link
        to="/login"
        className="hidden md:inline-block px-6 py-3 bg-lime-500 text-black font-bold text-sm lg:text-lg rounded-full hover:bg-lime-600 hover:text-white transition-all duration-300"
      >
        Login
      </Link>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle menu visibility
          className="text-white focus:outline-none"
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

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black text-white z-10 flex flex-col items-start p-4 space-y-4">
          <button
            onClick={() => {
              handleNavigation("home");
              setIsMenuOpen(false);
            }}
            className="hover:text-gray-400"
          >
            Home
          </button>
          <Link
            to="/about"
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-gray-400"
          >
            About Us
          </Link>
          <button
            onClick={() => {
              handleNavigation("investments");
              setIsMenuOpen(false);
            }}
            className="hover:text-gray-400"
          >
            Investments
          </button>
          <button
            onClick={() => {
              handleNavigation("philanthropy");
              setIsMenuOpen(false);
            }}
            className="hover:text-gray-400"
          >
            Philanthropy
          </button>
          <button
            onClick={() => {
              handleNavigation("community");
              setIsMenuOpen(false);
            }}
            className="hover:text-gray-400"
          >
            Community
          </button>
          <Link
            to="/login"
            onClick={() => setIsMenuOpen(false)}
            className="px-4 py-2 bg-lime-500 text-black font-bold rounded-full hover:bg-lime-600 hover:text-white"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
