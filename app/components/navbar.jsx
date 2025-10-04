'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

function Navbar() {
  const [isAtTop, setIsAtTop] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsAtTop(currentScrollY <= 20);
      
      // Close mobile menu when scrolling
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.mobile-menu-container')) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (href) => {
    // Extract the section ID from href (e.g., "#about" -> "about")
    const sectionId = href.replace('#', '');
    console.log('Navigating to section:', sectionId);
    
    // Add a small delay to ensure smooth scrolling works properly
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      console.log('Element found:', element);
      if (element) {
        const navHeight = 80; // Account for navbar height
        const elementPosition = element.offsetTop - navHeight;
        
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
    
    // Close mobile menu after clicking
    setIsMobileMenuOpen(false);
  };

  const menuItems = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 transform ${
      isAtTop ? 'translate-y-0' : '-translate-y-full'
    } bg-[#0a0f1c]/98 backdrop-blur-md border-b border-[#1b2c68]/60 shadow-lg shadow-[#0d1224]/30`}>
      <div className="max-w-[92rem] mx-auto px-6 sm:px-12">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between py-4 lg:py-6">
          <div className="flex flex-shrink-0 items-center">
            <Link
              href="/"
              className="relative group cursor-pointer transform transition-all duration-700 hover:scale-105 premium-header"
            >
              <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-black tracking-wider relative luxury-text">
                {/* Main text with enhanced gradient and effects */}
                <span className="gradient-text
                               drop-shadow-[0_0_15px_rgba(22,242,179,0.4)] 
                               hover:drop-shadow-[0_0_30px_rgba(22,242,179,0.7)]
                               transition-all duration-700
                               font-black tracking-[0.12em] lg:tracking-[0.18em]
                               relative z-10">
                  ARINDAM GUPTA
                </span>
                
                {/* Enhanced glow effect */}
                <span className="absolute inset-0 gradient-text blur-sm opacity-30 
                               group-hover:opacity-60 transition-all duration-700
                               font-black tracking-[0.12em] lg:tracking-[0.18em]
                               animate-pulse">
                  ARINDAM GUPTA
                </span>
                
                {/* Premium animated underline */}
                <div className="absolute -bottom-3 left-0 right-0 h-[4px] 
                              bg-gradient-to-r from-transparent via-[#16f2b3] via-[#00d4ff] to-transparent 
                              opacity-0 group-hover:opacity-100 transition-all duration-700 
                              transform scale-x-0 group-hover:scale-x-100 rounded-full
                              shadow-[0_0_15px_rgba(22,242,179,0.5)]"></div>
                
                {/* Luxury side accents */}
                <div className="absolute top-1/2 -left-12 w-8 h-[2px] 
                              bg-gradient-to-r from-[#16f2b3] via-[#00d4ff] to-transparent 
                              opacity-0 group-hover:opacity-100 transition-all duration-700 delay-150 
                              transform -translate-y-1/2 -translate-x-4 group-hover:translate-x-0
                              rounded-full shadow-[0_0_10px_rgba(22,242,179,0.4)]"></div>
                <div className="absolute top-1/2 -right-12 w-8 h-[2px] 
                              bg-gradient-to-l from-[#16f2b3] via-[#00d4ff] to-transparent 
                              opacity-0 group-hover:opacity-100 transition-all duration-700 delay-150 
                              transform -translate-y-1/2 translate-x-4 group-hover:translate-x-0
                              rounded-full shadow-[0_0_10px_rgba(22,242,179,0.4)]"></div>
                
                {/* Floating particles effect */}
                <div className="absolute -top-2 left-1/4 w-1 h-1 bg-[#16f2b3] rounded-full 
                              opacity-0 group-hover:opacity-100 transition-all duration-1000 delay-300
                              animate-bounce"></div>
                <div className="absolute -top-1 right-1/3 w-1 h-1 bg-[#00d4ff] rounded-full 
                              opacity-0 group-hover:opacity-100 transition-all duration-1000 delay-500
                              animate-bounce" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute -bottom-2 right-1/4 w-1 h-1 bg-[#ff6ec7] rounded-full 
                              opacity-0 group-hover:opacity-100 transition-all duration-1000 delay-700
                              animate-bounce" style={{animationDelay: '1s'}}></div>
              </div>
            </Link>
          </div>
          <ul className="flex flex-row items-center space-x-2 lg:space-x-4">
            {menuItems.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => handleNavClick(item.href)}
                  className="group relative block px-3 lg:px-4 py-2 no-underline outline-none hover:no-underline bg-transparent border-none cursor-pointer"
                >
                  <div className="text-sm lg:text-base text-white transition-all duration-300 group-hover:text-[#16f2b3] relative">
                    {item.label}
                    <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#16f2b3] to-pink-500 group-hover:w-full transition-all duration-300"></div>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden mobile-menu-container">
          <div className="flex items-center justify-between py-4">
            <Link
              href="/"
              className="relative group cursor-pointer transform transition-all duration-700 hover:scale-105 premium-header"
            >
              <div className="text-lg sm:text-xl font-black tracking-wider relative luxury-text">
                {/* Main text with enhanced gradient for mobile */}
                <span className="gradient-text
                               drop-shadow-[0_0_12px_rgba(22,242,179,0.4)] 
                               hover:drop-shadow-[0_0_20px_rgba(22,242,179,0.6)]
                               transition-all duration-700
                               font-black tracking-[0.1em] sm:tracking-[0.12em]
                               relative z-10">
                  ARINDAM GUPTA
                </span>
                
                {/* Enhanced glow effect for mobile */}
                <span className="absolute inset-0 gradient-text blur-sm opacity-25 
                               group-hover:opacity-50 transition-all duration-700
                               font-black tracking-[0.1em] sm:tracking-[0.12em]
                               animate-pulse">
                  ARINDAM GUPTA
                </span>
                
                {/* Premium underline for mobile */}
                <div className="absolute -bottom-2 left-0 right-0 h-[3px] 
                              bg-gradient-to-r from-transparent via-[#16f2b3] via-[#00d4ff] to-transparent 
                              opacity-0 group-hover:opacity-100 transition-all duration-700 
                              transform scale-x-0 group-hover:scale-x-100 rounded-full
                              shadow-[0_0_10px_rgba(22,242,179,0.4)]"></div>
                
                {/* Mobile floating particles */}
                <div className="absolute -top-1 left-1/4 w-0.5 h-0.5 bg-[#16f2b3] rounded-full 
                              opacity-0 group-hover:opacity-100 transition-all duration-1000 delay-200
                              animate-bounce"></div>
                <div className="absolute -bottom-1 right-1/3 w-0.5 h-0.5 bg-[#ff6ec7] rounded-full 
                              opacity-0 group-hover:opacity-100 transition-all duration-1000 delay-400
                              animate-bounce" style={{animationDelay: '0.3s'}}></div>
              </div>
            </Link>
            
            {/* Hamburger Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative w-10 h-10 flex flex-col justify-center items-center space-y-1 group bg-[#1b2c68]/20 hover:bg-[#1b2c68]/40 rounded-lg border border-[#1b2c68]/30 hover:border-[#16f2b3]/50 transition-all duration-300"
              aria-label="Toggle mobile menu"
            >
              <span className={`block w-6 h-0.5 bg-white group-hover:bg-[#16f2b3] transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}></span>
              <span className={`block w-6 h-0.5 bg-white group-hover:bg-[#16f2b3] transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}></span>
              <span className={`block w-6 h-0.5 bg-white group-hover:bg-[#16f2b3] transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}></span>
              
              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#16f2b3]/10 to-[#00d4ff]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          <div className={`absolute top-full left-0 right-0 bg-[#0a0f1c] backdrop-blur-md border border-[#1b2c68]/50 shadow-2xl shadow-[#0d1224]/50 transform transition-all duration-300 ${
            isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
          }`}>
            <div className="px-6 py-6 space-y-3">
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleNavClick(item.href)}
                  className="group block w-full text-left px-5 py-4 text-white hover:text-[#16f2b3] bg-gradient-to-r from-transparent to-transparent hover:from-[#16f2b3]/10 hover:to-[#00d4ff]/5 rounded-xl transition-all duration-300 border border-[#1b2c68]/30 hover:border-[#16f2b3]/50 relative overflow-hidden"
                >
                  <span className="relative z-10 font-medium tracking-wide">{item.label}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#16f2b3]/5 to-[#00d4ff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#16f2b3] to-[#00d4ff] group-hover:w-full transition-all duration-300"></div>
                </button>
              ))}
            </div>
            
            {/* Decorative gradient line at bottom */}
            <div className="h-1 bg-gradient-to-r from-transparent via-[#16f2b3] to-transparent opacity-30"></div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
