/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { BiSolidSun, BiPhoneCall, BiSolidMoon } from "react-icons/bi";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import { FaCaretDown } from "react-icons/fa";
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar2 = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
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

  return (
    <>
      <header 
        className="w-full border-b border-primary/50 bg-gradient-to-l from-violet-900 via-violet-800 to-violet-900 text-white shadow-lg"
      >
        <nav className="max-w-[1440px] w-full mx-auto flex items-center justify-between px-4 py-2">
          <div className="text-2xl text-white md:text-3xl">
            <a href="/#home">
              COZ
              <span className="inline-block font-bold text-primary">WEB</span>
            </a>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-10">
              {/* Menu Items */}
              <li className="group relative cursor-pointer">
                <a
                  href="/#home"
                  className="flex h-[72px] items-center gap-[2px]"
                >
                  Home
                  <span>
                    <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                  </span>
                </a>
                <div className="absolute left-0 hidden w-[150px] rounded-md bg-white p-2 text-black group-hover:block z-50">
                  <ul className="space-y-3">
                    <li className="p-2 hover:bg-violet-200">Services</li>
                    <li className="p-2 hover:bg-violet-200">About us</li>
                    <li className="p-2 hover:bg-violet-200">Privacy policy</li>
                  </ul>
                </div>
              </li>
              <li className="group relative cursor-pointer">
                <a
                  href="/#home"
                  className="flex h-[72px] items-center gap-[2px]"
                >
                  Services
                  <span>
                    <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                  </span>
                </a>
                <div className="absolute left-0 hidden w-[150px] rounded-md bg-white p-2 text-black group-hover:block z-50">
                  <ul className="space-y-3">
                    <li className="p-2 hover:bg-violet-200">Web Development</li>
                    <li className="p-2 hover:bg-violet-200">Design</li>
                    <li className="p-2 hover:bg-violet-200">Consulting</li>
                  </ul>
                </div>
              </li>
              <li className="cursor-pointer">
                <a href="/#contact">About us</a>
              </li>
              {/* Phone number section */}
              <div className="flex items-center gap-4">
                <li>
                  <BiPhoneCall className="h-10 w-10 rounded-md bg-primary p-2 text-2xl text-white hover:bg-primary/90" />
                </li>
                <li>
                  <div>
                    <p className="text-sm">Call us on</p>
                    <p className="text-lg">
                      <a href="tel:+91123456789">+91 123456789</a>
                    </p>
                  </div>
                </li>
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