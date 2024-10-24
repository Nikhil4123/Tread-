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
      <header className="border-b-2 border-primary/50 bg-gradient-to-l from-violet-900 via-violet-800 to-violet-900 text-white shadow-lg">
        <nav className="container mx-auto flex h-[70px] items-center justify-between px-4 md:px-8">
          <div className="text-2xl text-white md:text-3xl">
            <a href="/#home" className="font-bold">
              COZ<span className="text-primary">WEB</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            <div className="group relative cursor-pointer">
              <a href="/#home" className="flex items-center gap-1">
                Home <FaCaretDown className="transition-transform duration-200 group-hover:rotate-180" />
              </a>
              <div className="left-0 mt-1 hidden w-[150px] rounded-md bg-white p-2 text-black shadow-lg group-hover:block">
                <ul className="space-y-2">
                  <li className="p-2 hover:bg-violet-200">Services</li>
                  <li className="p-2 hover:bg-violet-200">About us</li>
                  <li className="p-2 hover:bg-violet-200">Privacy policy</li>
                </ul>
              </div>
            </div>

            <div className="group relative cursor-pointer">
              <a href="/#services" className="flex items-center gap-1">
                Services <FaCaretDown className="transition-transform duration-200 group-hover:rotate-180" />
              </a>
              <div className="left-0 mt-1 hidden w-[300px] rounded-md bg-white p-2 text-black shadow-lg group-hover:block">
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-1">
                    <img
                      className="h-[150px] w-full rounded-md object-cover"
                      src="https://picsum.photos/200"
                      alt="Service"
                    />
                  </div>
                  <div className="col-span-2">
                    <h1 className="pb-2 text-xl font-semibold">Best Selling</h1>
                    <p className="text-sm text-gray-600">
                      Discover our top-notch development services to boost your business.
                    </p>
                    <div className="mt-3 grid grid-cols-2 gap-2">
                      <ul>
                        <h2 className="pb-1 font-semibold">Development</h2>
                        <li className="cursor-pointer hover:text-primary">Web Development</li>
                        <li className="cursor-pointer hover:text-primary">iOS Development</li>
                        <li className="cursor-pointer hover:text-primary">App Development</li>
                      </ul>
                      <ul>
                        <h2 className="pb-1 font-semibold">Other Services</h2>
                        <li className="cursor-pointer hover:text-primary">Cloud Services</li>
                        <li className="cursor-pointer hover:text-primary">Mobile App</li>
                        <li className="cursor-pointer hover:text-primary">App Development</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <a href="/#about" className="cursor-pointer">
              About Us
            </a>

            {/* Contact Section */}
            <div className="flex items-center gap-4">
              <a href="tel:+91123456789">
                <BiPhoneCall className="h-[40px] w-[40px] rounded-md bg-primary p-2 text-2xl text-white hover:bg-primary/90" />
              </a>
              <div>
                <p className="text-sm">Call us on</p>
                <p className="text-lg font-semibold">+91 123456789</p>
              </div>
            </div>

            {/* Light/Dark Mode Switcher */}
            {theme === "dark" ? (
              <BiSolidSun onClick={() => setTheme("light")} className="cursor-pointer text-2xl" />
            ) : (
              <BiSolidMoon onClick={() => setTheme("dark")} className="cursor-pointer text-2xl" />
            )}
          </div>

          {/* Mobile View */}
          <div className="flex items-center gap-4 md:hidden">
            {theme === "dark" ? (
              <BiSolidSun onClick={() => setTheme("light")} className="cursor-pointer text-2xl" />
            ) : (
              <BiSolidMoon onClick={() => setTheme("dark")} className="cursor-pointer text-2xl" />
            )}
            {showMenu ? (
              <HiMenuAlt1 onClick={toggleMenu} className="cursor-pointer text-2xl" />
            ) : (
              <HiMenuAlt3 onClick={toggleMenu} className="cursor-pointer text-2xl" />
            )}
          </div>
        </nav>
      </header>

      <ResponsiveMenu showMenu={showMenu} />
    </>
  );
};

export default Navbar2;
