import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const isScroll = scrolling ? "py-4" : "py-8";
  console.log(isScroll);
  return (
    <nav
      className={`bg-[#2C3E50] dark:bg-gray-900 fixed w-full z-20 top-0 start-0  ${isScroll} transition-all duration-500 ease-in-out `}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto transition-all ease-in-out duration-500 px-6 sm:px-10 lg:px-12">
        {/* Logo */}
        <NavLink
          to=""
          className="flex items-center space-x-2 rtl:space-x-reverse primary"
        >
          <span className="self-center text-2xl md:text-4xl font-bold whitespace-nowrap text-white bg-[#2C3E50] ">
            START FRAMEWORK
          </span>
        </NavLink>
        {/* Button */}
        <div className="flex md:order-1 ">
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-3 w-12 h-10 justify-center text-[#242C33] border border-[#253544]  rounded-lg md:hidden focus:outline-none focus:ring-1 focus:ring-[#253544] "
            aria-controls="navbar-sticky"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-8 h-6  "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              ></path>
            </svg>
          </button>
        </div>
        {/* Links */}
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isOpen ? "block" : "hidden"
          }`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-bold rounded-lg bg-[#2C3E50] md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:bg-[#2C3E50] text-white text-lg">
            <li>
              <NavLink to="about" className="block  rounded px-2 py-1  ">
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink to="portfolio" className="block  rounded px-2 py-1  ">
                PORTFOLIO
              </NavLink>
            </li>
            <li>
              <NavLink to="contact" className="block rounded px-2 py-1 ">
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
