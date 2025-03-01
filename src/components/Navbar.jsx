import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed w-full z-50 bg-transparent backdrop-blur-sm top-0 left-0 right-0 border-b border-white shadow-lg">
      <div className="mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo and EZCODE Text */}
        <div className="flex items-center space-x-3 ml-4">
          <img
            src="/logo.png" // Replace with your logo path
            alt="EzCode Logo"
            className="h-10"
          />
          <span className="text-white text-2xl font-bold">EZCODE</span>
        </div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex space-x-8 text-white">
          <Link
            to="/"
            className="relative font-semibold transition duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-pink-500 after:transition-all after:duration-300 hover:after:w-full"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="relative font-semibold transition duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-pink-500 after:transition-all after:duration-300 hover:after:w-full"
          >
            About
          </Link>
          <Link
            to="/events"
            className="relative font-semibold transition duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-pink-500 after:transition-all after:duration-300 hover:after:w-full"
          >
            Events
          </Link>
          <Link
            to="#blogs"
            className="relative font-semibold transition duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-pink-500 after:transition-all after:duration-300 hover:after:w-full"
          >
            Blogs
          </Link>
          <Link
            to="#contact"
            className="relative font-semibold transition duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-pink-500 after:transition-all after:duration-300 hover:after:w-full"
          >
            Contact
          </Link>
        </div>

        {/* Join Us Button (Desktop) */}
        <div className="hidden md:block">
          <button className="bg-transparent border-2 border-pink-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-pink-500 hover:text-black hover:border-transparent transition-all duration-300">
            <Link to="/login">Join Us</Link>
          </button>
        </div>

        {/* Mobile Menu Button (Hidden on Desktop) */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
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
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (Hidden by Default) */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black bg-opacity-95 backdrop-blur-sm">
          <div className="flex flex-col space-y-4 px-6 py-4">
            <Link
              to="/"
              className="text-white font-semibold hover:text-pink-500 transition-colors duration-300"
              onClick={toggleMobileMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white font-semibold hover:text-pink-500 transition-colors duration-300"
              onClick={toggleMobileMenu}
            >
              About
            </Link>
            <Link
              to="/events"
              className="text-white font-semibold hover:text-pink-500 transition-colors duration-300"
              onClick={toggleMobileMenu}
            >
              Events
            </Link>
            <Link
              to="#blogs"
              className="text-white font-semibold hover:text-pink-500 transition-colors duration-300"
              onClick={toggleMobileMenu}
            >
              Blogs
            </Link>
            <Link
              to="#contact"
              className="text-white font-semibold hover:text-pink-500 transition-colors duration-300"
              onClick={toggleMobileMenu}
            >
              Contact
            </Link>
            <button className="bg-transparent border-2 border-pink-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-pink-500 hover:text-black hover:border-transparent transition-all duration-300">
              <Link to="/login" onClick={toggleMobileMenu}>
                Join Us
              </Link>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;