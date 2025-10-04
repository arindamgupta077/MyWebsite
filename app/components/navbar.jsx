// @flow strict
"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaCode } from "react-icons/fa";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle active section detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'skills', 'education', 'certification', 'projects', 'apps'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: "/#about", label: "ABOUT", id: "about" },
    { href: "/#experience", label: "EXPERIENCE", id: "experience" },
    { href: "/#skills", label: "SKILLS", id: "skills" },
    { href: "/#education", label: "EDUCATION", id: "education" },
    { href: "/#certification", label: "CERTIFICATION", id: "certification" },
    { href: "/#projects", label: "PROJECTS", id: "projects" },
    { href: "/#apps", label: "MY APPS", id: "apps" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#0d1224]/95 backdrop-blur-lg border-b border-[#1b2c68a0] shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="flex items-center justify-between py-4">
          {/* Logo/Brand */}
          <div className="flex flex-shrink-0 items-center">
            <Link
              href="/"
              className="flex items-center space-x-2 group transition-all duration-300"
            >
              <div className="p-2 rounded-lg bg-gradient-to-r from-[#16f2b3] to-[#1e40af] group-hover:scale-110 transition-transform duration-300">
                <FaCode className="text-white text-lg" />
              </div>
              <div className="flex flex-col">
                <span className="text-[#16f2b3] text-lg sm:text-xl lg:text-2xl font-bold tracking-wide">
                  ARINDAM GUPTA
                </span>
                <span className="text-gray-400 text-xs hidden sm:block">
                  Oracle DBA & Data Engineer
                </span>
              </div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg bg-[#1b2c68a0] text-white hover:text-[#16f2b3] hover:bg-[#16f2b3]/10 transition-all duration-300 transform hover:scale-105"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
            </button>
          </div>

          {/* Desktop menu */}
          <ul className="hidden md:flex md:flex-row md:space-x-1 bg-[#1b2c68a0]/50 backdrop-blur-sm rounded-full px-2 py-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link 
                  className={`block px-4 py-2 rounded-full no-underline outline-none transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-[#16f2b3] to-[#1e40af] text-white shadow-lg'
                      : 'hover:bg-[#16f2b3]/10 hover:text-[#16f2b3]'
                  }`}
                  href={item.href} 
                  onClick={closeMenu}
                >
                  <div className="text-sm font-medium transition-colors duration-300">
                    {item.label}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300" 
          onClick={closeMenu}
        />
      )}

      {/* Mobile menu */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-[#0d1224]/95 backdrop-blur-lg border-l border-[#1b2c68a0] shadow-2xl transform transition-all duration-300 ease-in-out z-50 md:hidden ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex items-center justify-between p-6 border-b border-[#1b2c68a0]">
          <div className="flex items-center space-x-2">
            <div className="p-2 rounded-lg bg-gradient-to-r from-[#16f2b3] to-[#1e40af]">
              <FaCode className="text-white text-lg" />
            </div>
            <span className="text-[#16f2b3] text-lg font-bold">Menu</span>
          </div>
          <button
            onClick={closeMenu}
            className="p-2 rounded-lg bg-[#1b2c68a0] text-white hover:text-[#16f2b3] hover:bg-[#16f2b3]/10 transition-all duration-300"
          >
            <HiX size={24} />
          </button>
        </div>
        
        <div className="p-4">
          <ul className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link 
                  className={`flex items-center px-4 py-3 rounded-lg no-underline outline-none transition-all duration-300 group ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-[#16f2b3] to-[#1e40af] text-white shadow-lg'
                      : 'hover:bg-[#1b2c68a0] hover:translate-x-2'
                  }`}
                  href={item.href} 
                  onClick={closeMenu}
                >
                  <div className="text-sm font-medium transition-colors duration-300">
                    {item.label}
                  </div>
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-2 h-2 rounded-full bg-[#16f2b3]" />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          
          {/* Additional mobile menu footer */}
          <div className="mt-8 pt-6 border-t border-[#1b2c68a0]">
            <div className="text-center">
              <p className="text-gray-400 text-sm">Oracle Database Professional</p>
              <p className="text-[#16f2b3] text-xs mt-1">Building the future with data</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;