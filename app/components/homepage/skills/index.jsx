// @flow strict
"use client";

import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { useState, useEffect, useRef } from "react";

function Skills() {
  const [isMobile, setIsMobile] = useState(false);
  const scrollRef1 = useRef(null);
  const scrollRef2 = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-scroll logic (with requestAnimationFrame for smoothness)
  useEffect(() => {
    if (!isMobile) return;

    let animationFrameId;
    let isPaused = false;

    // Initialize position for row 2 to end if we want to scroll reverse, or just 0 for both regular
    // For simplicity and robustness, let's scroll both LTR for now.
    
    const animate = () => {
      if (!isPaused) {
        [scrollRef1.current, scrollRef2.current].forEach((container) => {
          if (container) {
             // Use 1px movement for reliable scrolling across devices
             // If this is too fast, we'd need to skip frames, but 1px @ 60fps is 60px/s which is reasonable
             if (container.scrollLeft >= (container.scrollWidth - container.clientWidth)) {
                container.scrollLeft = 0;
             } else {
                container.scrollLeft += 1;
             }
          }
        });
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    const startAnimation = () => {
      isPaused = false;
    };

    const pauseAnimation = () => {
        isPaused = true;
    };
    
    // Attach listeners
    [scrollRef1.current, scrollRef2.current].forEach(el => {
        if (el) {
            el.addEventListener('touchstart', pauseAnimation, { passive: true });
            el.addEventListener('touchend', startAnimation, { passive: true });
            // Mouse events for desktop testing if screen width < 768
            el.addEventListener('mouseenter', pauseAnimation);
            el.addEventListener('mouseleave', startAnimation);
        }
    });

    // Start loop
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
      [scrollRef1.current, scrollRef2.current].forEach(el => {
        if (el) {
            el.removeEventListener('touchstart', pauseAnimation);
            el.removeEventListener('touchend', startAnimation);
            el.removeEventListener('mouseenter', pauseAnimation);
            el.removeEventListener('mouseleave', startAnimation);
        }
    });
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
        <div className="flex  items-center gap-4">
          <span className="w-24 h-[2px] bg-gradient-to-r from-transparent to-violet-500 rounded-full"></span>
          <span className="text-white text-2xl lg:text-3xl font-bold uppercase tracking-widest relative">
            Skills
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-violet-500 to-pink-500 opacity-50 blur-sm"></span>
          </span>
          <span className="w-24 h-[2px] bg-gradient-to-l from-transparent to-pink-500 rounded-full"></span>
        </div>
      </div>

      <div className="w-full my-12">
        {/* Desktop: Marquee animation */}
        {!isMobile ? (
          <div className="flex flex-col gap-6">
            <Marquee
              gradient={false}
              speed={80}
              pauseOnHover={true}
              pauseOnClick={true}
              delay={0}
              play={true}
              direction="right"
            >
              {skillsData.slice(0, Math.ceil(skillsData.length / 2)).map((skill, id) => (
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

            <Marquee
              gradient={false}
              speed={80}
              pauseOnHover={true}
              pauseOnClick={true}
              delay={0}
              play={true}
              direction="right"
            >
              {skillsData.slice(Math.ceil(skillsData.length / 2)).map((skill, id) => (
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
          </div>
        ) : (
          /* Mobile: Manual horizontal scroll with Auto Animation */
          <div className="flex flex-col gap-6">
            <div 
              ref={scrollRef1}
              className="flex overflow-x-auto scrollbar-hide gap-3 px-4 pb-4"
              style={{
                
                WebkitOverflowScrolling: 'touch',
                scrollBehavior: 'auto' // Must be auto for smooth JS animation
              }}>
              {/* Duplicate date for loop illusion if needed, but for now standard list */}
              {[...skillsData.slice(0, Math.ceil(skillsData.length / 2)), ...skillsData.slice(0, Math.ceil(skillsData.length / 2))].map((skill, id) => (
                <div className="w-36 min-w-[9rem] h-fit flex flex-col items-center justify-center transition-all duration-500 rounded-lg group relative cursor-pointer"
                  key={id} style={{  }}>
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

            <div 
              ref={scrollRef2}
              className="flex overflow-x-auto scrollbar-hide gap-3 px-4 pb-4"
              style={{
                
                WebkitOverflowScrolling: 'touch',
                scrollBehavior: 'auto'
              }}>
              {/* Duplicate for longer scroll */}
              {[...skillsData.slice(Math.ceil(skillsData.length / 2)), ...skillsData.slice(Math.ceil(skillsData.length / 2))].map((skill, id) => (
                <div className="w-36 min-w-[9rem] h-fit flex flex-col items-center justify-center transition-all duration-500 rounded-lg group relative cursor-pointer"
                  key={id} style={{ }}>
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
            
            {/* Mobile swipe indicator */}
            <div className="flex justify-center -mt-2">
              <span className="text-xs text-violet-300/60 animate-pulse">Swipe left or right to explore more skills</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Skills;