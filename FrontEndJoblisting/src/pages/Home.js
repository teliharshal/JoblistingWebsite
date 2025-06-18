import React from "react";
import { useState , useEffect } from "react";
// import { Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "../App.css"

const Home = () => {
    const [showWelcome, setShowWelcome] = useState(true);

    useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {showWelcome ? (
        <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-500 to-sky-300 text-white text-4xl font-bold animate-fadeIn">
          Welcome to JobListing Website 🚀
        </div>
      ) : (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#e6efff] to-[#fdfdfd] px-4">
  <div className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl rounded-xl py-16 px-6 w-full max-w-3xl text-center">
    <h1 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-10 leading-snug">
      Get Hired or Hire Talent — Absolutely Free!
    </h1>

    <div className="flex flex-col md:flex-row justify-center items-center gap-6">
      <Link to="/employer/dashboard">
        <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-lg font-semibold px-8 py-3 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
          Hire Talent
        </button>
      </Link>

      <Link to="/employee/feed">
        <button className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white text-lg font-semibold px-8 py-3 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
          Get Job Now
        </button>
      </Link>
    </div>
  </div>
</div>

      )}
    </div>
  );
};

export default Home;