// @flow strict
"use client";

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";
import Modal from "../../helper/modal";
import ContactForm from "../contact/contact-form";

function HeroSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10"
      />

      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
          <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
            Hello, <br />
            I am <span className=" text-pink-500">Arindam Gupta</span>, an Oracle Certified Professional (OCP) <span className=" text-[#16f2b3]">Oracle Database Administrator</span>.
          </h1>

          <div className="my-12 flex items-center gap-5">
            <Link
              href={personalData.github}
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <BsGithub size={30} />
            </Link>
            <Link
              href={personalData.linkedIn}
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <BsLinkedin size={30} />
            </Link>
            <Link
              href={personalData.facebook}
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <FaFacebook size={30} />
            </Link>
            <Link
              href={personalData.leetcode}
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <SiLeetcode size={30} />
            </Link>
            <Link
              href={personalData.twitter}
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <FaTwitterSquare size={30} />
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-start">
            <button
              onClick={() => setIsOpen(true)}
              className="group w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-violet-600 to-pink-500 rounded-full text-white text-sm font-semibold tracking-wider uppercase shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(236,72,153,0.5)] transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <span>Contact me</span>
              <RiContactsFill size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <Link href={personalData.resume} target="_blank" className="group w-full sm:w-auto" download="Arindam_Gupta_Resume">
              <button className="w-full sm:w-auto px-8 py-4 bg-[#0d1224] border border-violet-500/50 rounded-full text-white text-sm font-semibold tracking-wider uppercase hover:bg-violet-900/10 hover:border-violet-500 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 relative overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  Get Resume
                  <MdDownload size={18} className="group-hover:translate-y-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </Link>
          </div>

        </div>
        <div className="order-1 lg:order-2 from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] shadow-2xl shadow-indigo-500/20">
          <div className="flex flex-row p-4 items-center bg-[#0d1224]/50 rounded-t-lg border-b border-indigo-900/50 backdrop-blur-sm">
            <div className="flex flex-row space-x-2">
              <div className="h-3 w-3 rounded-full bg-[#ff5f56]"></div>
              <div className="h-3 w-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="h-3 w-3 rounded-full bg-[#27c93f]"></div>
            </div>
            <div className="ml-4 text-xs text-slate-400 font-mono">oracle_admin_portfolio.sql</div>
          </div>
          
          <div className="overflow-hidden px-4 lg:px-8 py-4 lg:py-8">
            <code className="font-mono text-xs md:text-sm lg:text-base">
              <div>
                <span className="text-pink-500">DECLARE</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 text-white">v_name</span>
                <span className="text-pink-500"> VARCHAR2</span>
                <span className="text-gray-400">(</span><span className="text-orange-400">50</span><span className="text-gray-400">)</span>
                <span className="text-pink-500"> := </span>
                <span className="text-gray-400">&apos;</span><span className="text-amber-300">Arindam Gupta</span><span className="text-gray-400">&apos;;</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 text-white">v_role</span>
                <span className="text-pink-500"> VARCHAR2</span>
                <span className="text-gray-400">(</span><span className="text-orange-400">80</span><span className="text-gray-400">)</span>
                <span className="text-pink-500"> := </span>
                <span className="text-gray-400">&apos;</span><span className="text-amber-300">Oracle DBA | Data Engineer</span><span className="text-gray-400">&apos;;</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 text-white">v_exp</span>
                <span className="text-pink-500"> NUMBER</span>
                <span className="text-pink-500"> := </span>
                <span className="text-orange-400">5</span>
                <span className="text-gray-400">;</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 text-white">TYPE </span>
                <span className="text-pink-500">t_skill_tab </span>
                <span className="text-pink-500">IS TABLE OF </span>
                <span className="text-pink-500">VARCHAR2</span>
                <span className="text-gray-400">(</span><span className="text-orange-400">60</span><span className="text-gray-400">);</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 text-white">v_skills</span>
                <span className="text-pink-500"> t_skill_tab </span>
                <span className="text-pink-500">:= </span>
                <span className="text-pink-500">t_skill_tab</span>
                <span className="text-gray-400">(</span>
              </div>
              <div className="ml-8 lg:ml-16">
                <span className="text-gray-400">&apos;</span><span className="text-amber-300">RAC</span><span className="text-gray-400">&apos;, &apos;</span><span className="text-amber-300">DataGuard</span><span className="text-gray-400">&apos;, &apos;</span><span className="text-amber-300">OCI</span><span className="text-gray-400">&apos;, &apos;</span><span className="text-amber-300">Performance Tuning</span><span className="text-gray-400">&apos;,</span>
              </div>
              <div className="ml-8 lg:ml-16">
                <span className="text-gray-400">&apos;</span><span className="text-amber-300">PLSQL</span><span className="text-gray-400">&apos;, &apos;</span><span className="text-amber-300">RMAN</span><span className="text-gray-400">&apos;, &apos;</span><span className="text-amber-300">EXPDP</span><span className="text-gray-400">&apos;, &apos;</span><span className="text-amber-300">Migration</span><span className="text-gray-400">&apos;, &apos;</span><span className="text-amber-300">Patching & Upgrade</span><span className="text-gray-400">&apos;</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 text-gray-400">);</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 text-white">FUNCTION </span>
                <span className="text-pink-500">is_hireable </span>
                <span className="text-pink-500">RETURN VARCHAR2</span>
                <span className="text-gray-400"> IS</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 text-pink-500">BEGIN</span>
              </div>
              <div>
                <span className="ml-8 lg:ml-12 text-pink-500">RETURN </span>
                <span className="text-pink-500">CASE WHEN </span>
                <span className="text-cyan-400">v_exp </span>
                <span className="text-amber-300">&gt;= </span>
                <span className="text-orange-400">5 </span>
                <span className="text-pink-500">AND </span>
                <span className="text-cyan-400">v_skills</span>
                <span className="text-gray-400">.</span>
                <span className="text-white">COUNT </span>
                <span className="text-amber-300">&gt;= </span>
                <span className="text-orange-400">5</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-16 text-pink-500">THEN </span>
                <span className="text-gray-400">&apos;</span><span className="text-amber-300">✅ Highly Hireable</span><span className="text-gray-400">&apos; </span>
                <span className="text-pink-500">ELSE </span>
                <span className="text-gray-400">&apos;</span><span className="text-amber-300">⚙️ Growing Professional</span><span className="text-gray-400">&apos; </span>
                <span className="text-pink-500">END</span>
                <span className="text-gray-400">;</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 text-pink-500">END</span>
                <span className="text-gray-400">;</span>
              </div>
              <div>
                <span className="text-pink-500">BEGIN</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 text-white">DBMS_OUTPUT</span>
                <span className="text-gray-400">.</span>
                <span className="text-pink-500">PUT_LINE</span>
                <span className="text-gray-400">(</span><span className="text-gray-400">&apos;</span><span className="text-amber-300">👨‍💻 </span><span className="text-gray-400">&apos; </span>
                <span className="text-amber-300">|| </span>
                <span className="text-cyan-400">v_name </span>
                <span className="text-amber-300">|| </span>
                <span className="text-gray-400">&apos;</span><span className="text-amber-300"> - </span><span className="text-gray-400">&apos; </span>
                <span className="text-amber-300">|| </span>
                <span className="text-cyan-400">v_role</span>
                <span className="text-gray-400">);</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 text-white">DBMS_OUTPUT</span>
                <span className="text-gray-400">.</span>
                <span className="text-pink-500">PUT_LINE</span>
                <span className="text-gray-400">(</span><span className="text-gray-400">&apos;</span><span className="text-amber-300">Exp: </span><span className="text-gray-400">&apos; </span>
                <span className="text-amber-300">|| </span>
                <span className="text-cyan-400">v_exp </span>
                <span className="text-amber-300">|| </span>
                <span className="text-gray-400">&apos;</span><span className="text-amber-300"> yrs | Skills: </span><span className="text-gray-400">&apos; </span>
                <span className="text-amber-300">|| </span>
                <span className="text-cyan-400">v_skills</span>
                <span className="text-gray-400">.</span>
                <span className="text-white">COUNT </span>
                <span className="text-amber-300">|| </span>
                <span className="text-gray-400">&apos;</span><span className="text-amber-300"> | Status: </span><span className="text-gray-400">&apos; </span>
                <span className="text-amber-300">|| </span>
                <span className="text-pink-500">is_hireable</span>
                <span className="text-gray-400">);</span>
              </div>
              <div>
                <span className="text-pink-500">END</span>
                <span className="text-gray-400">;</span>
              </div>
              <div>
                <span className="text-pink-500">/</span>
              </div>
            </code>
          </div>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Get in Touch">
        <ContactForm showTitle={false} />
      </Modal>
    </section>
  );
};

export default HeroSection;