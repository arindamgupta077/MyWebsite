// @flow strict
import { certifications } from '@/utils/data/certifications';
import CertificationCard from './certification-card';

function Certification() {
  return (
    <div id='certification' className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center gap-4">
          <span className="w-24 h-[2px] bg-gradient-to-r from-transparent to-violet-500 rounded-full"></span>
          <span className="text-white text-2xl lg:text-3xl font-bold uppercase tracking-widest relative">
            Certifications
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-violet-500 to-pink-500 opacity-50 blur-sm"></span>
          </span>
          <span className="w-24 h-[2px] bg-gradient-to-l from-transparent to-pink-500 rounded-full"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {
          certifications.map((cert, i) => (
            <CertificationCard certification={cert} key={i} />
          ))
        }
      </div>
    </div>
  );
};

export default Certification;