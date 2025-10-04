import { appsData } from '@/utils/data/apps-data';
import AppCard from './app-card';

const MyApps = () => {
  return (
    <div id='apps' className="relative z-50 my-8 sm:my-12 lg:my-24">
      <div className="sticky top-8 sm:top-10">
        <div className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl opacity-30"></div>
        <div className="flex items-center justify-start relative">
          <span className="bg-[#1a1443] absolute left-0 w-fit text-white px-3 py-2 sm:px-5 sm:py-3 text-lg sm:text-xl rounded-md">
            MY APPS
          </span>
          <span className="w-full h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="pt-8 sm:pt-12 lg:pt-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 items-stretch px-2 sm:px-0">
          {appsData.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyApps;