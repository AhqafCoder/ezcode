import React from "react";

function Navbar() {
    return (
        <nav className="fixed w-full z-50 bg-transparent backdrop-blur-sm top-0 left-0 right-0 border-b border-white shadow-lg">
            <div className="mx-auto flex justify-between items-center px-6 py-4">
                {/* Logo and EZCODE Text (Moved slightly to the right) */}
                <div className="flex items-center space-x-3 ml-8"> {/* Added ml-8 for spacing */}
                    <img
                        src="/logo.png" // Replace with your logo path
                        alt="EzCode Logo"
                        className="h-10"
                    />
                    <span className="text-white text-xl font-bold">EZCODE</span>
                </div>

                {/* Navigation Links */}
                <div className="hidden md:flex space-x-8 text-white">
                    <a
                        href="#home"
                        className="relative font-bold transition duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
                    >
                        Home
                    </a>
                    <a
                        href="#about"
                        className="relative font-bold transition duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
                    >
                        About
                    </a>
                    <a
                        href="#events"
                        className="relative font-bold transition duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
                    >
                        Events
                    </a>
                    <a
                        href="#blogs"
                        className="relative font-bold transition duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
                    >
                        Blogs
                    </a>
                    <a
                        href="#contact"
                        className="relative font-bold transition duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
                    >
                        Contact
                    </a>
                </div>

                {/* Join Us Button */}
                <div className="hidden md:block">
                    <button className="bg-gradient-to-r from-purple-400 to-pink-500 font-semibold text-black  px-4 py-2 rounded-full transform transition-transform duration-300 hover:scale-105">
                        Join Us
                    </button>
                </div>

                {/* Mobile Menu Button (Hidden on Desktop) */}
                <div className="md:hidden">
                    <button className="text-white focus:outline-none">
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
        </nav>
    );
}

export default Navbar;