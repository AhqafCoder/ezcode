import React, { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../Firebase"; // Correct path to firebase.js
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password); // Log in with email/password
      navigate("/dashboard"); // Redirect to the dashboard
    } catch (error) {
      console.error("Error logging in:", error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider); // Log in with Google
      navigate("/dashboard"); // Redirect to the dashboard
    } catch (error) {
      console.error("Error signing in with Google:", error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="bg-black border-1 border-white p-8 rounded-lg ml-2 mr-2 shadow-lg w-full max-w-md">
        <h2 className="text-4xl font-bold text-center text-white mb-6"><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Login</span></h2>

        {/* Email/Password Login Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-white">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 mt-1  bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 mt-1 border  bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center bg-pink-500 text-black font-semibold border-2 hover:border-pink-500 hover:bg-black hover:text-white py-2 rounded-lg transition-colors duration-300"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="mx-4 text-white">OR</span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        {/* Google Sign-In Button */}
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center bg-pink-500 text-black font-semibold border-2 hover:border-pink-500 hover:bg-black hover:text-white py-2 rounded-lg transition-colors duration-300"
        >
          <img
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            alt="Google Logo"
            className="w-6 h-6 mr-2"
          />
          Log in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;