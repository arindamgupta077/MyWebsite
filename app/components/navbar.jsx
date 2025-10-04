// @flow strict
"use client";
import Link from "next/link";
import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-transparent relative z-50">
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
          <Link
            href="/"
            className="text-[#16f2b3] text-xl sm:text-2xl lg:text-3xl font-bold">
            ARINDAM GUPTA
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white hover:text-pink-500 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
          </button>
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex md:flex-row md:space-x-1" id="navbar-default">
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#about" onClick={closeMenu}>
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">ABOUT</div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#experience" onClick={closeMenu}><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EXPERIENCE</div></Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#skills" onClick={closeMenu}><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">SKILLS</div></Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#education" onClick={closeMenu}><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EDUCATION</div></Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#certification" onClick={closeMenu}><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">CERTIFICATION</div></Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#projects" onClick={closeMenu}><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">PROJECTS</div></Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#apps" onClick={closeMenu}><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">MY APPS</div></Link>
          </li>
        </ul>

        {/* Mobile menu overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={closeMenu}></div>
        )}

        {/* Mobile menu */}
        <div className={`fixed top-0 right-0 h-full w-64 bg-[#0d1224] border-l border-[#1b2c68a0] transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex items-center justify-between p-5 border-b border-[#1b2c68a0]">
            <span className="text-[#16f2b3] text-lg font-bold">Menu</span>
            <button
              onClick={closeMenu}
              className="text-white hover:text-pink-500 transition-colors duration-300"
            >
              <HiX size={24} />
            </button>
          </div>
          <ul className="flex flex-col py-4">
            <li>
              <Link className="block px-6 py-3 no-underline outline-none hover:no-underline hover:bg-[#1b2c68a0]" href="/#about" onClick={closeMenu}>
                <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">ABOUT</div>
              </Link>
            </li>
            <li>
              <Link className="block px-6 py-3 no-underline outline-none hover:no-underline hover:bg-[#1b2c68a0]" href="/#experience" onClick={closeMenu}>
                <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EXPERIENCE</div>
              </Link>
            </li>
            <li>
              <Link className="block px-6 py-3 no-underline outline-none hover:no-underline hover:bg-[#1b2c68a0]" href="/#skills" onClick={closeMenu}>
                <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">SKILLS</div>
              </Link>
            </li>
            <li>
              <Link className="block px-6 py-3 no-underline outline-none hover:no-underline hover:bg-[#1b2c68a0]" href="/#education" onClick={closeMenu}>
                <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EDUCATION</div>
              </Link>
            </li>
            <li>
              <Link className="block px-6 py-3 no-underline outline-none hover:no-underline hover:bg-[#1b2c68a0]" href="/#certification" onClick={closeMenu}>
                <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">CERTIFICATION</div>
              </Link>
            </li>
            <li>
              <Link className="block px-6 py-3 no-underline outline-none hover:no-underline hover:bg-[#1b2c68a0]" href="/#projects" onClick={closeMenu}>
                <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">PROJECTS</div>
              </Link>
            </li>
            <li>
              <Link className="block px-6 py-3 no-underline outline-none hover:no-underline hover:bg-[#1b2c68a0]" href="/#apps" onClick={closeMenu}>
                <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">MY APPS</div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;