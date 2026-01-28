// @flow strict
import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook, FaStackOverflow } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import ContactForm from './contact-form';

function ContactSection() {
  return (
    <div id="contact" className="my-12 lg:my-16 relative mt-24 text-white">
      <div className="hidden lg:flex flex-col items-center absolute top-24 -right-8">
        <span className="bg-gradient-to-r from-violet-600 to-indigo-600 w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md shadow-lg shadow-violet-500/20">
          CONTACT
        </span>
        <span className="h-36 w-[2px] bg-gradient-to-b from-violet-600 to-transparent"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <ContactForm />
        <div className="lg:w-3/4 ">
          <div className="flex flex-col gap-5 lg:gap-9">
            <Link href={`mailto:${personalData.email}`}>
              <p className="text-sm md:text-xl flex items-center gap-3 group hover:text-[#16f2b3] transition-all duration-300">
                <MdAlternateEmail
                  className="bg-[#8b98a5] p-2 rounded-full group-hover:bg-[#16f2b3] group-hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                  size={36}
                />
                <span className="group-hover:drop-shadow-[0_0_10px_rgba(22,242,179,0.8)] transition-all duration-300">{personalData.email}</span>
              </p>
            </Link>
            <Link href={`tel:${personalData.phone}`}>
              <p className="text-sm md:text-xl flex items-center gap-3 group hover:text-[#16f2b3] transition-all duration-300">
                <IoMdCall
                  className="bg-[#8b98a5] p-2 rounded-full group-hover:bg-[#16f2b3] group-hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                  size={36}
                />
                <span className="group-hover:drop-shadow-[0_0_10px_rgba(22,242,179,0.8)] transition-all duration-300">
                  {personalData.phone}
                </span>
              </p>
            </Link>
            <Link href={`https://maps.google.com/?q=${personalData.address}`} target="_blank">
              <p className="text-sm md:text-xl flex items-center gap-3 group hover:text-[#16f2b3] transition-all duration-300">
                <CiLocationOn
                  className="bg-[#8b98a5] p-2 rounded-full group-hover:bg-[#16f2b3] group-hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                  size={36}
                />
                <span className="group-hover:drop-shadow-[0_0_10px_rgba(22,242,179,0.8)] transition-all duration-300">
                  {personalData.address}
                </span>
              </p>
            </Link>
          </div>
          <div className="mt-8 lg:mt-16 flex items-center gap-5 lg:gap-10">
            <Link target="_blank" href={personalData.github}>
              <IoLogoGithub
                className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={48}
              />
            </Link>
            <Link target="_blank" href={personalData.linkedIn}>
              <BiLogoLinkedin
                className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={48}
              />
            </Link>
            <Link target="_blank" href={personalData.twitter}>
              <FaXTwitter
                className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={48}
              />
            </Link>
            <Link target="_blank" href={personalData.stackOverflow}>
              <FaStackOverflow
                className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={48}
              />
            </Link>
            <Link target="_blank" href={personalData.facebook}>
              <FaFacebook
                className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={48}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;