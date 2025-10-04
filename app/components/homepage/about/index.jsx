// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";


function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      
      {/* Mobile section title */}
      <div className="lg:hidden mb-8">
        <div className="flex items-center justify-center relative">
          <span className="bg-[#1a1443] w-fit text-white px-3 py-2 text-sm font-medium rounded-md whitespace-nowrap">
            ABOUT ME
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="font-medium mb-4 sm:mb-5 text-[#16f2b3] text-lg sm:text-xl uppercase">
            Who I am?
          </p>
          <p className="text-gray-200 text-sm sm:text-base lg:text-lg leading-relaxed">
            {personalData.description}
          </p>
        </div>
        <div className="flex justify-center order-1 lg:order-2">
          <Image
            src={personalData.profile}
            width={240}
            height={360}
            alt="Arindam Gupta"
            className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer w-[200px] h-[320px] sm:w-[240px] sm:h-[380px] lg:w-[280px] lg:h-[420px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;