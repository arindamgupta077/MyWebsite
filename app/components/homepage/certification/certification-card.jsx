// @flow strict
import { skillsImage } from '@/utils/skill-image';
import Image from 'next/image';
import Link from 'next/link';
import { FaExternalLinkAlt, FaCalendarAlt } from 'react-icons/fa';
import oracleLogo from '../../../assets/jpg/Oracle.png';
import databricksLogo from '../../../assets/jpg/Databricks.png';
import simplilearnLogo from '../../../assets/jpg/simplelearn.jpeg';
import GlowCard from '../../helper/glow-card';

function CertificationCard({ certification, identifier }) {
  const getIconForCertification = (certification) => {
    const issuer = certification.issuer ? certification.issuer.toLowerCase() : '';
    const lowerTitle = certification.title.toLowerCase();

    if (issuer === 'oracle') {
      return oracleLogo;
    } else if (issuer === 'databricks') {
      return databricksLogo;
    } else if (issuer === 'simplilearn') {
      return simplilearnLogo;
    }
    
    if (lowerTitle.includes('oracle') || lowerTitle.includes('ocp')) {
      return oracleLogo;
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
    <GlowCard identifier={identifier} className="shadow-[0_20px_40px_-10px_rgba(0,0,0,0.8)] translate-y-[-12px] z-10 hover:translate-y-[-16px] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.9)]">
      <a 
        href={certification.verificationLink || '#'} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block p-3 sm:p-4 lg:p-6 relative text-white h-full overflow-hidden no-underline"
      >
        <Image
          src="/blur-23.svg"
          alt="Hero"
          width={1080}
          height={200}
          className="absolute bottom-0 left-0 opacity-80 -z-10"
        />
        <div className="flex items-start gap-3 sm:gap-4 z-10 relative">
          {/* Certification Icon */}
          <div className="flex-shrink-0">
            <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-white rounded-full flex items-center justify-center">
              <Image
                src={getIconForCertification(certification)}
                alt={certification.title}
                width={60}
                height={60}
                className="rounded-lg w-8 h-8 sm:w-12 sm:h-12 lg:w-14 lg:h-14 transition-all duration-300"
              />
            </div>
          </div>

          {/* Certification Details */}
          <div className="flex-1">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-sm sm:text-base lg:text-xl font-semibold text-[#ec4899] group-hover:text-violet-500 transition-colors duration-300">
                {certification.title}
              </h3>
              {certification.verificationLink && certification.verificationLink !== "#" && (
                <div 
                  className="text-[#16f2b3] hover:text-violet-500 transition-colors duration-300"
                >
                  <FaExternalLinkAlt size={16} />
                </div>
              )}
            </div>

            <div className="flex items-center gap-2 mb-3 text-xs sm:text-sm">
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

            <p className="text-xs sm:text-sm lg:text-base text-[#d3d8e8] line-clamp-3">
              {certification.description}
            </p>
          </div>
        </div>
      </a>
    </GlowCard>
  );
};

export default CertificationCard;