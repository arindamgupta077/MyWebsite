// @flow strict
"use client";

import { experiences } from "@/utils/data/experience";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import experience from '../../../assets/lottie/code.json';
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";
import { useState } from "react";
import Modal from "../../helper/modal";

function Experience() {
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  // Calculate total experience
  const startDate = new Date('2021-01-07');
  const currentDate = new Date();
  
  let diffMonths = (currentDate.getFullYear() - startDate.getFullYear()) * 12 + (currentDate.getMonth() - startDate.getMonth());
  if (currentDate.getDate() < startDate.getDate()) {
      diffMonths--;
  }
  
  const years = Math.floor(diffMonths / 12);
  const months = diffMonths % 12;

  const handleOpenModal = (experience) => {
    setSelectedExperience(experience);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedExperience(null);
  };

  return (
    <div id="experience" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center gap-4">
          <span className="w-24 h-[2px] bg-gradient-to-r from-transparent to-violet-500 rounded-full"></span>
          <span className="text-white text-2xl lg:text-3xl font-bold uppercase tracking-widest relative">
            Experiences
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-violet-500 to-pink-500 opacity-50 blur-sm"></span>
          </span>
          <span className="w-24 h-[2px] bg-gradient-to-l from-transparent to-pink-500 rounded-full"></span>
        </div>
      </div>

      <div className="flex justify-center mb-5 lg:mb-8 -mt-4">
        <div className="bg-[#1a1443] rounded-full px-4 py-1 border border-[#25213b]">
          <p className="text-white text-sm lg:text-base">
            Total Experience: <span className="text-[#16f2b3] font-bold">{years} Years {months} Months</span>
          </p>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex justify-center items-start">
            <div className="w-full h-full">
              <AnimationLottie animationPath={experience} />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-6">
              {
                experiences.map(experience => (
                  <div key={experience.id} onClick={() => handleOpenModal(experience)} className="cursor-pointer group">
                    <GlowCard identifier={`experience-${experience.id}`}>
                      <div className="p-3 relative overflow-hidden">
                        <Image
                          src="/blur-23.svg"
                          alt="Hero"
                          width={1080}
                          height={200}
                          className="absolute bottom-0 opacity-80"
                        />
                        <div className="flex justify-center">
                          <p className="text-xs sm:text-sm text-[#16f2b3]">
                            {experience.duration}
                          </p>
                        </div>
                        <div className="flex items-center gap-x-8 px-3 py-5">
                          <div className="text-violet-500  transition-all duration-300 hover:scale-125">
                            {
                              experience.logo ? (
                                <div className="relative w-24 h-12 lg:w-28 lg:h-16">
                                  <Image
                                    src={experience.logo}
                                    alt={experience.company}
                                    fill
                                    className="rounded-lg object-contain"
                                  />
                                </div>
                              ) : (
                                <BsPersonWorkspace size={36} />
                              )
                            }
                          </div>
                          <div>
                            <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                              {experience.title}
                            </p>
                            <p className="text-sm sm:text-base text-amber-300">
                              {experience.company}
                            </p>
                          </div>
                        </div>
                      </div>
                    </GlowCard>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>

      {/* Experience Modal */}
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        title={selectedExperience?.title || "Experience Details"}
      >
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-x-4 text-sm text-[#16f2b3] mb-2">
            <span className="bg-[#1a1443] px-3 py-1 rounded-full">{selectedExperience?.company}</span>
            <span>{selectedExperience?.duration}</span>
          </div>
          
          <div className="whitespace-pre-wrap text-base leading-relaxed text-gray-200">
            {selectedExperience?.description ? (
              selectedExperience.description
            ) : (
              <p className="italic text-gray-400">No detailed description available for this role.</p>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Experience;