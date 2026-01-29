// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";


function AboutSection() {
  return (
    <div id="about" className="my-4 lg:my-16 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-gradient-to-r from-violet-600 to-indigo-600 w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md shadow-lg shadow-violet-500/20">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-gradient-to-b from-violet-600 to-transparent"></span>
      </div>
      
      {/* Mobile section title */}
      <div className="lg:hidden mb-2">
        <div className="flex items-center justify-center relative">
          <span className="bg-gradient-to-r from-violet-600 to-indigo-600 w-fit text-white px-5 py-3 text-xl rounded-full shadow-lg shadow-violet-500/20">
            ABOUT ME
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16">
        <div className="order-1 lg:order-1">
          <p className="font-medium mb-4 sm:mb-5 text-[#16f2b3] text-lg sm:text-xl uppercase">
            Who I am?
          </p>
          <p className="text-gray-200 text-sm sm:text-base lg:text-lg leading-relaxed">
            {personalData.description}
          </p>
        </div>
        <div className="flex justify-center order-2 lg:order-2">
          <Image
            src={personalData.profile}
            width={240}
            height={360}
            alt="Arindam Gupta"
            className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer w-[280px] h-[380px] sm:w-[300px] sm:h-[420px] lg:w-[280px] lg:h-[420px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;