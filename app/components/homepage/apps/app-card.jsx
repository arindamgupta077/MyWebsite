import Image from 'next/image';
import Link from 'next/link';
import { HiExternalLink, HiStar } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';

const AppCard = ({ app }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-[#0d1224] to-[#0a0e27] border border-[#1b2c68a0] transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/10">
      {/* Featured Badge */}
      {app.featured && (
        <div className="absolute top-3 right-3 z-10 flex items-center gap-1 bg-gradient-to-r from-pink-500 to-violet-500 text-white text-xs px-2 py-1 rounded-full">
          <HiStar className="w-3 h-3" />
          Featured
        </div>
      )}

      {/* Thumbnail */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={app.thumbnail}
          alt={app.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category */}
        <div className="mb-2">
          <span className="inline-block bg-[#16f2b3]/10 text-[#16f2b3] text-xs px-2 py-1 rounded-full border border-[#16f2b3]/20">
            {app.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-pink-500 transition-colors duration-300">
          {app.name}
        </h3>

        {/* Description */}
        <p className="text-gray-300 text-sm mb-4 h-12 overflow-hidden">
          {app.description.length > 100 ? `${app.description.substring(0, 100)}...` : app.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {app.technologies.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="text-xs bg-[#1e293b] text-gray-300 px-2 py-1 rounded border border-[#334155]"
            >
              {tech}
            </span>
          ))}
          {app.technologies.length > 3 && (
            <span className="text-xs text-gray-400">
              +{app.technologies.length - 3} more
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          {/* GitHub Link */}
          <Link
            href={app.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 bg-[#1e293b] text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-[#334155] hover:shadow-lg hover:shadow-gray-500/25 border border-[#334155]"
          >
            <FaGithub className="w-4 h-4" />
            <span>GitHub</span>
          </Link>

          {/* Live App Link */}
          <Link
            href={app.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-violet-500 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/25 hover:scale-105"
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