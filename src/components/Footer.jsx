import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-pink-500">EZCODE Community</h2>
            <p className="text-gray-300">
              EZCODE Community is the Community of Coding Enthusiasts. Together, we aim to explore the untouched world of technology and tremendous growth-making fields.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-pink-500">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-pink-500 transition duration-300">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-pink-500 transition duration-300">About</Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-300 hover:text-pink-500 transition duration-300">Team</Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-300 hover:text-pink-500 transition duration-300">Events</Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-gray-300 hover:text-pink-500 transition duration-300">Testimonials</Link>
              </li>
              <li>
                <Link to="/opportunities" className="text-gray-300 hover:text-pink-500 transition duration-300">Opportunities</Link>
              </li>
            </ul>
          </div>

          {/* Join Us Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-pink-500">Join Us</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/events" className="text-gray-300 hover:text-pink-500 transition duration-300">Events</Link>
              </li>
              <li>
                <Link to="/volunteer" className="text-gray-300 hover:text-pink-500 transition duration-300">Volunteer Group</Link>
              </li>
              <li>
                <Link to="/community" className="text-gray-300 hover:text-pink-500 transition duration-300">Community</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter and Contact in the Same Line */}
        <div className="mt-12 border-t items-center border-gray-700 pt-8 flex flex-col md:flex-row gap-8">
          {/* Newsletter Section */}
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-pink-500 mb-4">
              Want to stay updated? Subscribe to our Newsletter :)
            </h3>
            <form className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <button
                type="submit"
                className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Contact Section */}
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-pink-500 mb-4">Contact</h3>
            <div className="text-gray-300 space-y-2">
              <p>📞 Location: Aeansol India-713305</p>
              <p>📖 Email: ezcodecommunity@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-300">
          <p>Copyright © 2025 EZCODE Community. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;