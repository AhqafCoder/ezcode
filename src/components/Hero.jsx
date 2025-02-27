import React from "react";
import '../index.css';

const Hero = () => {
  return (
    <section 
      className="text-white min-h-screen flex flex-col justify-center ">
      <div className="container mx-auto px-4">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-left md:pl-8">
          Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">EZCODE</span>
        </h1>

        {/* Description */}
        <p className="text-sm md:text-base mb-12 max-w-2xl text-left md:pl-8">
          EzCode Community is a place for beginner-level developers, especially BTech 1st and 2nd-year students, to kickstart their journey in web development. Learn the basics, build projects, and grow with us!
        </p>

        {/* Buttons Container */}
        <div className="flex space-x-4 text-left md:pl-8">
          {/* Button 1 */}
          <button className="bg-pink-500 border-2 border-pink-500 text-black px-6 py-2 rounded-lg font-semibold hover:bg-black hover:text-white hover:border-pink-500  transition-all duration-300">
            Join Now
          </button>

          {/* Button 2 */}
          <button className="bg-transparent border-2 border-pink-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-pink-500 hover:text-black hover:border-transparent  transition-all duration-300">
            Explore Resources
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;