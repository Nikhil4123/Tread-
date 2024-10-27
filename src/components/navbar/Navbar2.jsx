/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom"; // Import useLocation for active link detection
import { BiSolidSun, BiPhoneCall, BiSolidMoon } from "react-icons/bi";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import { FaCaretDown } from "react-icons/fa";
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar2 = () => {
  const location = useLocation(); // Get current location
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light",
  );
  const [showMenu, setShowMenu] = useState(false);

  const element = document.documentElement;

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  // Function to check if the link is active based on current location
  const isActive = (path) => location.pathname === path;

  return (
    <>
      <header className="w-full border-b border-primary/50 bg-gradient-to-l from-violet-900 via-violet-800 to-violet-900 text-white shadow-lg">
        <nav className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-4 py-2">
          <div className="text-2xl text-white md:text-3xl">
            <Link to="/">
              COZ
              <span className="inline-block font-bold text-primary">WEB</span>
            </Link>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-6">
              {/* Previous menu items */}
              <ul className="flex space-x-8">
                <li
                  className={`group relative transition-all cursor-pointer ${
                    isActive("/") ? "border-b-2 border-primary bg-gray-500 text-white rounded-2xl "
                      : "hover:bg-gray-300 hover:rounded-2xl hover:text-black"
                  }`}
                >
                  <Link to="/" className="flex h-[72px] px-4 items-center gap-[2px]">
                    Home
                  </Link>
                </li>

                <li
                  className={`group relative cursor-pointer transition-all duration-300 ${
                    isActive("/services")
                      ? "border-b-2 border-primary  bg-gray-500 text-white rounded-2xl "
                      : "hover:bg-gray-300 hover:rounded-2xl hover:text-black"
                  }`}
                >
                  <Link
                    to="/services"
                    className="flex h-[72px] items-center px-4"
                  >
                    Services
                  </Link>
                </li>

                <li
                  className={`group relative cursor-pointer transition-all duration-300 ${
                    isActive("/about")
                      ? "border-b-2 border-primary bg-gray-500 text-white rounded-2xl "
                      : "hover:bg-gray-300 hover:rounded-2xl hover:text-black"
                  }`}
                >
                  <Link to="/about" className="flex h-[72px] items-center px-4">
                    About Us
                  </Link>
                </li>

                <li
                  className={`group relative cursor-pointer transition-all duration-300 ${
                    isActive("/privacypage")
                      ? "border-b-2 border-primary  bg-gray-500 text-white rounded-2xl "
                      : "hover:bg-gray-300 hover:rounded-2xl hover:text-black"
                  }`}
                >
                  <Link
                    to="/privacypage"
                    className="flex h-[72px] items-center px-4"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>

              {/* Other menu items... */}

              {/* Auth Buttons */}
              <div className="flex items-center gap-4">
                <Link
                  to="/login"
                  className="rounded-md bg-white px-4 py-2 text-violet-900 transition-colors hover:bg-violet-100"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="rounded-md bg-violet-600 px-4 py-2 text-white transition-colors hover:bg-violet-700"
                >
                  Sign Up
                </Link>
              </div>

              {/* Theme switcher */}
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2"
              >
                {theme === "dark" ? (
                  <BiSolidSun className="text-2xl" />
                ) : (
                  <BiSolidMoon className="text-2xl" />
                )}
              </button>
            </ul>
          </div>

          {/* Mobile view */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2"
            >
              {theme === "dark" ? (
                <BiSolidSun className="text-2xl" />
              ) : (
                <BiSolidMoon className="text-2xl" />
              )}
            </button>
            <button onClick={toggleMenu} className="p-2">
              {showMenu ? (
                <HiMenuAlt1 className="transition-all" size={30} />
              ) : (
                <HiMenuAlt3 className="transition-all" size={30} />
              )}
            </button>
          </div>
        </nav>
      </header>
      <ResponsiveMenu showMenu={showMenu} />
    </>
  );
};

export default Navbar2;
