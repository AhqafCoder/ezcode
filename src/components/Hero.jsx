import React from "react";
import BgImage from "../assets/bg.png";

function Hero() {
    return (
        <div
            className="relative h-screen flex items-center justify-start bg-cover bg-center"
            style={{
                backgroundImage: `url(${BgImage})`, // Replace with your background image path
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0  bg-opacity-50"></div>

            {/* Content */}
            <div className="relative z-10 text-white max-w-2xl px-6 md:px-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">ezCode</span>
                </h1>
                <p className="text-lg mb-8">
                    EzCode Community is a place for beginner-level developers, especially BTech 1st and 2nd-year students, to kickstart their journey in web development. Learn the basics, build projects, and grow with us!
                </p>
                <div className="flex gap-4">
                    <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300">
                        Join Us
                    </button>
                    <button className="bg-transparent border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition duration-300">
                        Explore
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Hero;