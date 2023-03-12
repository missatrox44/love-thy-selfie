import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="z-[99999] fixed top-0 right-0 p-4 md:hidden lg:hidden">
      <button
        className="text-[#FFCE3A] hover:text-accent2 focus:outline-none focus:text-[#FFCE3A]"
        onClick={handleMenuClick}
      >
        <svg
          className="h-8 w-8 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={`${isOpen ? "hidden" : "block"}`}
            d="M4 6H20M4 12H20M4 18H20"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            className={`${isOpen ? "block" : "hidden"}`}
            d="M6 18L18 6M6 6l12 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } absolute right-2 mt-2 py-2 w-48 bg-white rounded-lg shadow-2xl z-20`}
      >
        <Link
          to="/"
          onClick={handleMenuClick}
          className="block px-4 py-2 text-gray-800 hover:bg-[#7643E5] hover:text-white"
        >
          Home
        </Link>
        <HashLink
          to="/#about"
          onClick={handleMenuClick}
          className="block px-4 py-2 text-gray-800 hover:bg-[#7643E5] hover:text-white"
        >
          About
        </HashLink>
        <HashLink
          to="/#reviews"
          onClick={handleMenuClick}
          className="block px-4 py-2 text-gray-800 hover:bg-[#7643E5] hover:text-white"
        >
          Reviews
        </HashLink>
        <HashLink
          to="/#photoGallery"
          onClick={handleMenuClick}
          className="block px-4 py-2 text-gray-800 hover:bg-[#7643E5] hover:text-white"
        >
          Gallery
        </HashLink>
        <Link
          to="/contact"
          onClick={handleMenuClick}
          className="block px-4 py-2 text-gray-800 hover:bg-[#7643E5] hover:text-white"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default HamburgerMenu;
