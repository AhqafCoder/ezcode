// src/components/Navbar2.jsx
import React, { useState } from 'react';
import Sidebar from './Sidebar'; // Import the Sidebar component

const Navbar2 = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Navbar (Top Navigation - Fixed at the top with mt-15, including toggle button) */}
      <nav className="fixed top-17 left-0 w-full bg-pink-500 bg-opacity-50 text-white p-1 z-50">
        <div className="container mx-auto flex items-center">
          {/* Toggle Button for Sidebar (Visible only on small screens) */}
          <button
            onClick={toggleSidebar}
            className="text-2xl mr-4 hover:text-gray-400 md:hidden"
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

          {/* Logo */}
          <div className="text-xl font-semibold">HTML Tutorial</div>

          {/* Menu Items (Visible only on large screens) */}
          <div className="hidden md:flex gap-8 ml-8">
            <a href="#html" className="text-lg hover:text-gray-400">
              HTML
            </a>
            <a href="#css" className="text-lg hover:text-gray-400">
              CSS
            </a>
            <a href="#js" className="text-lg hover:text-gray-400">
              JS
            </a>
            <a href="#python" className="text-lg hover:text-gray-400">
              Python
            </a>
          </div>
        </div>
      </nav>

      {/* Sidebar (Rendered separately, controlled by Navbar2) */}
      <Sidebar isOpen={isSidebarOpen} onToggle={toggleSidebar} />
    </>
  );
};

export default Navbar2;