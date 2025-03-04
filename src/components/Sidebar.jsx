// src/components/Sidebar.jsx
import React from 'react';

const Sidebar = ({ isOpen, onToggle }) => {
  return (
    <>
      {/* Sidebar (Fixed on the left with mt-15, with scrollable content, toggleable on small screens, static on large screens) */}
      <div
        className={`
          fixed top-22 left-0 w-64 h-[calc(100vh-75px)] bg-black bg-opacity-50 p-4 z-40 overflow-y-auto transition-transform duration-300
          md:fixed md:w-64 md:h-[calc(100vh-32px)] md:bg-black md:bg-opacity-50 md:p-4 md:flex md:flex-col md:ml-0 md:mt-0
          ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}
      >
        

        {/* Scrollable Sidebar Content with Scrollbar on the Right */}
        <div className="overflow-y-auto h-[calc(100%-60px)] md:h-full scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent scrollbar-thumb-rounded-full" style={{ direction: 'ltr' }}>
          <div className="flex flex-col ml-2 gap-4">
            <a
              href="#home"
              className="block text-lg text-white py-2 px-4 rounded-lg hover:bg-gray-700 hover:bg-opacity-50 transition duration-300 md:hover:bg-transparent md:hover:text-gray-400"
            >
              HTML HOME
            </a>
            <a
              href="#introduction"
              className="block text-lg text-white py-2 px-4 rounded-lg hover:bg-gray-700 hover:bg-opacity-50 transition duration-300 md:hover:bg-transparent md:hover:text-gray-400"
            >
              HTML Introduction
            </a>
            <a
              href="#editors"
              className="block text-lg text-white py-2 px-4 rounded-lg hover:bg-gray-700 hover:bg-opacity-50 transition duration-300 md:hover:bg-transparent md:hover:text-gray-400"
            >
              HTML Editors
            </a>
            <a
              href="#basic"
              className="block text-lg text-white py-2 px-4 rounded-lg hover:bg-gray-700 hover:bg-opacity-50 transition duration-300 md:hover:bg-transparent md:hover:text-gray-400"
            >
              HTML Basic
            </a>
            <a
              href="#elements"
              className="block text-lg text-white py-2 px-4 rounded-lg hover:bg-gray-700 hover:bg-opacity-50 transition duration-300 md:hover:bg-transparent md:hover:text-gray-400"
            >
              HTML Elements
            </a>
            <a
              href="#attributes"
              className="block text-lg text-white py-2 px-4 rounded-lg hover:bg-gray-700 hover:bg-opacity-50 transition duration-300 md:hover:bg-transparent md:hover:text-gray-400"
            >
              HTML Attributes
            </a>
            <a
              href="#headings"
              className="block text-lg text-white py-2 px-4 rounded-lg hover:bg-gray-700 hover:bg-opacity-50 transition duration-300 md:hover:bg-transparent md:hover:text-gray-400"
            >
              HTML Headings
            </a>
            <a
              href="#paragraphs"
              className="block text-lg text-white py-2 px-4 rounded-lg hover:bg-gray-700 hover:bg-opacity-50 transition duration-300 md:hover:bg-transparent md:hover:text-gray-400"
            >
              HTML Paragraphs
            </a>
            <a
              href="#styles"
              className="block text-lg text-white py-2 px-4 rounded-lg hover:bg-gray-700 hover:bg-opacity-50 transition duration-300 md:hover:bg-transparent md:hover:text-gray-400"
            >
              HTML Styles
            </a>
            <a
              href="#formatting"
              className="block text-lg text-white py-2 px-4 rounded-lg hover:bg-gray-700 hover:bg-opacity-50 transition duration-300 md:hover:bg-transparent md:hover:text-gray-400"
            >
              HTML Formatting
            </a>
            <a
              href="#quotations"
              className="block text-lg text-white py-2 px-4 rounded-lg hover:bg-gray-700 hover:bg-opacity-50 transition duration-300 md:hover:bg-transparent md:hover:text-gray-400"
            >
              HTML Quotations
            </a>
            <a
              href="#comments"
              className="block text-lg text-white py-2 px-4 rounded-lg hover:bg-gray-700 hover:bg-opacity-50 transition duration-300 md:hover:bg-transparent md:hover:text-gray-400"
            >
              HTML Comments
            </a>
            <a
              href="#colors"
              className="block text-lg text-white py-2 px-4 rounded-lg hover:bg-gray-700 hover:bg-opacity-50 transition duration-300 md:hover:bg-transparent md:hover:text-gray-400"
            >
              HTML Colors
            </a>
            <a
              href="#css"
              className="block text-lg text-white py-2 px-4 rounded-lg hover:bg-gray-700 hover:bg-opacity-50 transition duration-300 md:hover:bg-transparent md:hover:text-gray-400"
            >
              HTML CSS
            </a>
            <a
              href="#links"
              className="block text-lg text-white py-2 px-4 rounded-lg hover:bg-gray-700 hover:bg-opacity-50 transition duration-300 md:hover:bg-transparent md:hover:text-gray-400"
            >
              HTML Links
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;