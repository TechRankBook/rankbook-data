import React, { useState } from "react";
import { Link } from "react-router-dom";
import sklogo from "../assets/sklogo.png"

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-green-700 to-emerald-900 shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={sklogo} // Replace with the path to your logo
            alt="Logo"
            className="w-10 h-10 mr-2"
          />
          <span className="text-white text-2xl font-bold">RankBook</span>
        </Link>

        {/* Hamburger Menu for Small Screens */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Links */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:flex lg:items-center lg:space-x-6`}
        >
          <Link
            to="/ug"
            className="block mt-2 lg:mt-0 text-white hover:text-green-200 lg:inline"
          >
            UG
          </Link>
          <Link
            to="/pg"
            className="block mt-2 lg:mt-0 text-white hover:text-green-200 lg:inline"
          >
            PG
          </Link>
          <Link
            to="/engineering"
            className="block mt-2 lg:mt-0 text-white hover:text-green-200 lg:inline"
          >
            Engineering
          </Link>
          <Link
            to="/diploma"
            className="block mt-2 lg:mt-0 text-white hover:text-green-200 lg:inline"
          >
            Diploma
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
