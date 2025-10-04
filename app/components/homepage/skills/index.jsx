// @flow strict
"use client";

import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { useState, useEffect } from "react";

function Skills() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-scroll functionality for mobile
  useEffect(() => {
    if (!isMobile) return;

    const container = document.querySelector('.mobile-skills-scroll');
    if (!container) return;

    let isUserScrolling = false;
    let userScrollTimer;
    let autoScrollInterval;

    const startAutoScroll = () => {
      autoScrollInterval = setInterval(() => {
        if (!isUserScrolling && container) {
          const maxScroll = container.scrollWidth - container.clientWidth;
          const currentScroll = container.scrollLeft;
          
          // If we've reached the end, scroll back to start
          if (currentScroll >= maxScroll - 10) {
            container.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            // Auto-scroll by one card width (approximately 144px including gap)
            container.scrollBy({ left: 144, behavior: 'smooth' });
          }
        }
      }, 800); // Much faster scrolling - every 0.8 seconds
    };

    const handleUserScroll = () => {
      isUserScrolling = true;
      clearTimeout(userScrollTimer);
      clearInterval(autoScrollInterval);
      
      // Resume auto-scroll after user stops scrolling for 1.5 seconds (much faster resume)
      userScrollTimer = setTimeout(() => {
        isUserScrolling = false;
        startAutoScroll();
      }, 1500);
    };

    // Add scroll event listener
    container.addEventListener('scroll', handleUserScroll);
    
    // Start auto-scroll initially with very short delay
    const initialDelay = setTimeout(startAutoScroll, 300);

    return () => {
      clearInterval(autoScrollInterval);
      clearTimeout(userScrollTimer);
      clearTimeout(initialDelay);
      container?.removeEventListener('scroll', handleUserScroll);
    };
  }, [isMobile]);

  return (
    <div id="skills" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Skills
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="w-full my-12">
        {/* Desktop: Marquee animation */}
        {!isMobile && (
          <Marquee
            gradient={false}
            speed={80}
            pauseOnHover={true}
            pauseOnClick={true}
            delay={0}
            play={true}
            direction="left"
          >
            {skillsData.map((skill, id) => (
              <div className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
                key={id}>
                <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
                  <div className="flex -translate-y-[1px] justify-center">
                    <div className="w-3/4">
                      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-3 p-6">
                    <div className="h-8 sm:h-10">
                      <Image
                        src={skillsImage(skill)?.src}
                        alt={skill}
                        width={40}
                        height={40}
                        className="h-full w-auto rounded-lg"
                      />
                    </div>
                    <p className="text-white text-sm sm:text-lg">
                      {skill}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        )}

        {/* Mobile: Horizontal scroll container with auto-scroll */}
        {isMobile && (
          <div className="relative">
            <div 
              className="mobile-skills-scroll flex overflow-x-auto scrollbar-hide gap-4 px-4 py-2"
              style={{
                scrollSnapType: 'x mandatory',
                WebkitOverflowScrolling: 'touch',
                scrollBehavior: 'smooth'
              }}
            >
              {skillsData.map((skill, id) => (
                <div 
                  className="w-32 min-w-[128px] h-fit flex flex-col items-center justify-center transition-all duration-500 rounded-lg group relative active:scale-95 cursor-pointer"
                  key={id}
                  style={{ scrollSnapAlign: 'start' }}
                >
                  <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-active:border-violet-500 transition-all duration-300">
                    <div className="flex -translate-y-[1px] justify-center">
                      <div className="w-3/4">
                        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-3 p-4">
                      <div className="h-8">
                        <Image
                          src={skillsImage(skill)?.src}
                          alt={skill}
                          width={32}
                          height={32}
                          className="h-full w-auto rounded-lg"
                        />
                      </div>
                      <p className="text-white text-sm text-center">
                        {skill}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Mobile interaction indicator */}
            <div className="flex justify-center mt-4 space-x-2">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-violet-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-gray-400">Auto-scrolling • Swipe to control</span>
                <div className="w-2 h-2 bg-violet-500 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Skills;