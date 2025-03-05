// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState(null); // Track authenticated user
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Track dropdown state
  const navigate = useNavigate();

  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      setIsDropdownOpen(false);
      navigate('/login'); // Redirect to login after logout
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
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

        {/* User Avatar or Join Us Button (Desktop) */}
        <div className="hidden md:block relative">
          {user ? (
            <div className="relative">
              <img
                src={user.photoURL || 'https://via.placeholder.com/40'} // Increased size to 40x40 (2px more than 38x38)
                alt="User Avatar"
                className="w-10 h-10 rounded-full object-cover cursor-pointer"
                onClick={toggleDropdown}
              />
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg z-50">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-gray-800 hover:bg-pink-500 hover:text-white"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Profile
                  </Link>
                  <Link
                    to="/settings"
                    className="block px-4 py-2 text-gray-800 hover:bg-pink-500 hover:text-white"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Settings
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-pink-500 hover:text-white"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button className="bg-transparent border-2 border-pink-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-pink-500 hover:text-black hover:border-transparent transition-all duration-300">
              <Link to="/login">Join Us</Link>
            </button>
          )}
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
            {user ? (
              <div className="relative block hover:rounded-lg">
                <img
                  src={user.photoURL || 'https://via.placeholder.com/40'}
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full object-cover cursor-pointer"
                  onClick={toggleDropdown}
                />
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white hover:rounded-lg rounded-lg shadow-lg z-50">
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-gray-800 hover:bg-pink-500 hover:text-white"
                      onClick={() => {
                        setIsDropdownOpen(false);
                        toggleMobileMenu(); // Close mobile menu if open
                      }}
                    >
                      Profile
                    </Link>
                    <Link
                      to="/settings"
                      className="block px-4 py-2 text-gray-800 hover:bg-pink-500 hover:text-white"
                      onClick={() => {
                        setIsDropdownOpen(false);
                        toggleMobileMenu(); // Close mobile menu if open
                      }}
                    >
                      Settings
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-pink-500 hover:text-white"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button className="bg-transparent border-2 border-pink-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-pink-500 hover:text-black hover:border-transparent transition-all duration-300">
                <Link to="/login" onClick={toggleMobileMenu}>
                  Join Us
                </Link>
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;