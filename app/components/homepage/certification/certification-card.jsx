// @flow strict
import { skillsImage } from '@/utils/skill-image';
import Image from 'next/image';
import Link from 'next/link';
import { FaExternalLinkAlt, FaCalendarAlt } from 'react-icons/fa';

function CertificationCard({ certification }) {
  const getIconForCertification = (title) => {
    const lowerTitle = title.toLowerCase();
    if (lowerTitle.includes('oracle') || lowerTitle.includes('ocp')) {
      return skillsImage('oracle database');
    } else if (lowerTitle.includes('aws')) {
      return skillsImage('aws');
    } else if (lowerTitle.includes('gcp') || lowerTitle.includes('google cloud') || lowerTitle.includes('associate cloud engineer')) {
      return skillsImage('gcp');
    } else if (lowerTitle.includes('itil')) {
      return skillsImage('microsoft office'); // Generic icon for ITIL
    }
    return skillsImage('microsoft office'); // Default icon
  };

  return (
    <div className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group p-4 lg:p-6">
      <div className="flex items-start gap-4">
        {/* Certification Icon */}
        <div className="flex-shrink-0">
          <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-violet-600 to-pink-500 rounded-full flex items-center justify-center">
            <Image
              src={getIconForCertification(certification.title)}
              alt={certification.title}
              width={40}
              height={40}
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Certification Details */}
        <div className="flex-1">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-lg lg:text-xl font-semibold text-white group-hover:text-violet-500 transition-colors duration-300">
              {certification.title}
            </h3>
            {certification.verificationLink && certification.verificationLink !== "#" && (
              <Link 
                href={certification.verificationLink} 
                target="_blank"
                className="text-[#16f2b3] hover:text-violet-500 transition-colors duration-300"
              >
                <FaExternalLinkAlt size={16} />
              </Link>
            )}
          </div>

          <div className="flex items-center gap-2 mb-3">
            <span className="text-[#16f2b3] font-medium">{certification.issuer}</span>
            {certification.date && (
              <>
                <span className="text-gray-400">•</span>
                <div className="flex items-center gap-1 text-gray-400 text-sm">
                  <FaCalendarAlt size={12} />
                  <span>{certification.date}</span>
                </div>
              </>
            )}
          </div>

          <p className="text-sm lg:text-base text-[#d3d8e8] line-clamp-3">
            {certification.description}
          </p>

          {certification.verificationLink && certification.verificationLink !== "#" && (
            <div className="mt-4">
              <Link 
                href={certification.verificationLink} 
                target="_blank"
                className="inline-flex items-center gap-2 text-xs lg:text-sm text-[#16f2b3] hover:text-violet-500 transition-colors duration-300"
              >
                <span>Verify Certification</span>
                <FaExternalLinkAlt size={12} />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CertificationCard;