// @flow strict

import * as React from 'react';

function ProjectCard({ project }) {

  return (
    <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full">
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>
      <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
        <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-200"></div>
        </div>
        <p className="text-center ml-3 text-[#16f2b3] text-base lg:text-xl">
          {project.name}
        </p>
      </div>
      <div className="border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8 max-h-[420px] overflow-auto scrollbar-thin scrollbar-thumb-[#1b2c68] scrollbar-track-transparent">
        <code className="font-mono text-xs md:text-sm lg:text-base whitespace-pre-wrap break-words">
          {/* PL/SQL styled representation */}
          <div className="blink">
            <span className="text-pink-500">DECLARE</span>
          </div>
          {/* Project Name */}
          <div>
            <span className="ml-4 lg:ml-8 text-white mr-2">v_name</span>
            <span className="text-pink-500 mr-1">VARCHAR2</span>
            <span className="text-gray-400">(</span><span className="text-orange-400">200</span><span className="text-gray-400">)</span>
            <span className="text-pink-500"> := </span>
            <span className="text-gray-400">'</span><span className="text-amber-300">{project.name}</span><span className="text-gray-400">';</span>
          </div>
          {/* Role */}
            <div>
              <span className="ml-4 lg:ml-8 text-white mr-2">v_role</span>
              <span className="text-pink-500 mr-1">VARCHAR2</span>
              <span className="text-gray-400">(</span><span className="text-orange-400">120</span><span className="text-gray-400">)</span>
              <span className="text-pink-500"> := </span>
              <span className="text-gray-400">'</span><span className="text-orange-400">{project.role}</span><span className="text-gray-400">';</span>
            </div>
          {/* Tools Collection Type */}
          <div>
            <span className="ml-4 lg:ml-8 text-white mr-2">TYPE</span>
            <span className="text-pink-500 mr-2">t_tool_tab</span>
            <span className="text-pink-500">IS TABLE OF</span>
            <span className="text-pink-500 ml-2">VARCHAR2</span>
            <span className="text-gray-400">(</span><span className="text-orange-400">100</span><span className="text-gray-400">);</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 text-white mr-2">v_tools</span>
            <span className="text-pink-500"> t_tool_tab</span>
            <span className="text-pink-500"> := </span>
            <span className="text-pink-500">t_tool_tab</span>
            <span className="text-gray-400">(</span>
          </div>
          <div className="ml-8 lg:ml-16">
            {project.tools.map((tag, i) => (
              <React.Fragment key={i}>
                <span className="text-amber-300">'{tag}'</span>
                {project.tools.length - 1 !== i && <span className="text-gray-400">, </span>}
              </React.Fragment>
            ))}
          </div>
          <div><span className="ml-4 lg:ml-8 text-gray-400">);</span></div>
          {/* Description */}
          <div>
            <span className="ml-4 lg:ml-8 text-white mr-2">v_description</span>
            <span className="text-pink-500 mr-1">CLOB</span>
            <span className="text-pink-500"> := </span>
            <span className="text-gray-400">'</span><span className="text-cyan-400">{project.description}</span><span className="text-gray-400">';</span>
          </div>
          {/* Simple function for demonstration */}
          <div>
            <span className="ml-4 lg:ml-8 text-white mr-2">FUNCTION</span>
            <span className="text-pink-500 mr-2">tool_count</span>
            <span className="text-pink-500">RETURN PLS_INTEGER IS</span>
          </div>
          <div><span className="ml-8 lg:ml-16 text-pink-500">BEGIN</span></div>
          <div>
            <span className="ml-12 lg:ml-24 text-pink-500">RETURN</span>
            <span className="ml-2 text-cyan-400">v_tools.COUNT</span>
            <span className="text-gray-400">;</span>
          </div>
          <div><span className="ml-8 lg:ml-16 text-pink-500">END</span><span className="text-gray-400"> tool_count;</span></div>
          <div><span className="text-pink-500">BEGIN</span></div>
          <div>
            <span className="ml-4 lg:ml-8 text-pink-500">NULL;</span>
            <span className="text-gray-400"> -- Placeholder execution block</span>
          </div>
          <div><span className="text-pink-500">END;</span></div>
          <div><span className="text-pink-500">/</span></div>
        </code>
      </div>
    </div>
  );
};

export default ProjectCard;