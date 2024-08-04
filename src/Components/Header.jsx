import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-400 via-teal-400 to-lime-400 shadow-lg py-4 px-8 flex items-center justify-between">
      {/* Left side: Logo and Website name */}
      <div className="flex items-center space-x-4">
        {/* Vibrant and Modern SVG Logo */}
        <svg
          className="w-12 h-12 text-red-600 transform scale-110"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#FF0000', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#FF6F6F', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="45" fill="url(#gradient1)" />
          <path
            d="M50 15 L85 85 H15 Z"
            fill="#FF0000"
          />
          <circle cx="50" cy="50" r="20" fill="#FF6F6F" />
        </svg>
        <div className="text-4xl font-extrabold font-kalnia text-dark-blue">
          AlumniConnect CVR
        </div>
      </div>

      {/* Center: Navigation links */}
      <nav className="flex space-x-8">
        <a
          href="#home"
          className="text-lg font-medium text-dark-blue hover:text-teal-200 transition duration-300"
        >
          Home
        </a>
        <a
          href="#dashboard"
          className="text-lg font-medium text-dark-blue hover:text-teal-200 transition duration-300"
        >
          DashBoard
        </a>
        <a
          href="#about"
          className="text-lg font-medium text-dark-blue hover:text-teal-200 transition duration-300"
        >
          About
        </a>
        <a
          href="#contact"
          className="text-lg font-medium text-dark-blue hover:text-teal-200 transition duration-300"
        >
          Contact Us
        </a>
      </nav>

      {/* Right side: Login and SignUp buttons */}
      <div className="flex space-x-4">
        <a
          href="#login"
          className="text-lg font-medium text-dark-blue border border-transparent px-4 py-2 rounded-md hover:bg-white hover:text-blue-500 transition duration-300"
        >
          Login
        </a>
        <a
          href="#signup"
          className="text-lg font-medium text-white bg-teal-400 px-4 py-2 rounded-md hover:bg-teal-500 transition duration-300"
        >
          SignUp
        </a>
      </div>
    </header>
  );
};

export default Header;
