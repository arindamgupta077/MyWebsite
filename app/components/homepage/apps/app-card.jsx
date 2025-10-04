"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { HiExternalLink, HiStar, HiChevronDown, HiChevronUp } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';

const AppCard = ({ app }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const characterLimit = 120; // Adjust this to control when truncation occurs
  
  const shouldTruncate = app.description.length > characterLimit;
  const displayDescription = isExpanded || !shouldTruncate 
    ? app.description 
    : `${app.description.substring(0, characterLimit)}...`;

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-[#0d1224] to-[#0a0e27] border border-[#1b2c68a0] transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/10 flex flex-col h-full">
      {/* Featured Badge */}
      {app.featured && (
        <div className="absolute top-2 right-2 sm:top-3 sm:right-3 z-10 flex items-center gap-1 bg-gradient-to-r from-pink-500 to-violet-500 text-white text-xs px-2 py-1 rounded-full">
          <HiStar className="w-3 h-3" />
          <span className="hidden sm:inline">Featured</span>
          <span className="sm:hidden">★</span>
        </div>
      )}

      {/* Thumbnail */}
      <div className="relative h-40 sm:h-48 overflow-hidden flex-shrink-0">
        <Image
          src={app.thumbnail}
          alt={app.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6 flex flex-col flex-grow">
        {/* Category */}
        <div className="mb-2">
          <span className="inline-block bg-[#16f2b3]/10 text-[#16f2b3] text-xs px-2 py-1 rounded-full border border-[#16f2b3]/20">
            {app.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-pink-500 transition-colors duration-300">
          {app.name}
        </h3>

        {/* Description */}
        <div className="mb-3 sm:mb-4 flex-grow">
          <p className="text-gray-300 text-sm leading-relaxed">
            {displayDescription}
          </p>
          {shouldTruncate && (
            <button
              onClick={toggleExpansion}
              className="flex items-center gap-1 mt-2 text-xs text-[#16f2b3] hover:text-pink-500 transition-colors duration-300 focus:outline-none active:scale-95 touch-manipulation"
            >
              <span>{isExpanded ? 'Show Less' : 'Read More'}</span>
              {isExpanded ? (
                <HiChevronUp className="w-3 h-3" />
              ) : (
                <HiChevronDown className="w-3 h-3" />
              )}
            </button>
          )}
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6 flex-shrink-0">
          {app.technologies.map((tech, index) => (
            <span
              key={index}
              className="text-xs bg-[#1e293b] text-gray-300 px-2 py-1 rounded border border-[#334155]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-auto flex-shrink-0">
          {/* GitHub Link */}
          <Link
            href={app.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 bg-[#1e293b] text-white px-3 sm:px-4 py-2.5 sm:py-2 rounded-lg font-medium transition-all duration-300 hover:bg-[#334155] hover:shadow-lg hover:shadow-gray-500/25 border border-[#334155] active:scale-95 touch-manipulation min-h-[44px]"
          >
            <FaGithub className="w-4 h-4" />
            <span>GitHub</span>
          </Link>

          {/* Live App Link */}
          <Link
            href={app.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-violet-500 text-white px-3 sm:px-4 py-2.5 sm:py-2 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/25 hover:scale-105 active:scale-95 touch-manipulation min-h-[44px]"
          >
            <span>Live App</span>
            <HiExternalLink className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-pink-500/0 to-violet-500/0 group-hover:from-pink-500/5 group-hover:to-violet-500/5 transition-all duration-300 pointer-events-none" />
    </div>
  );
};

export default AppCard;