import React from 'react';

const Topbar = ({ changeAspect }) => {

  return (
    <div className="flex justify-center">
      <div className="flex flex-wrap gap-2 mb-6">
        <span className="relative z-0 inline-flex shadow-sm rounded-md">
          <button
            type="button"
            className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400"
            value="grundlagen"
            onClick={changeAspect}
          >
            Grundlagen
          </button>
          <button
            type="button"
            className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400"
            value="galerie"
            onClick={changeAspect}
          >
            Galerie
          </button>
          <button
            type="button"
            className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400"
            value="quiz"
            onClick={changeAspect}
          >
            Quiz
          </button>
          <button
            type="button"
            className="-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400"
            value="lernziele"
            onClick={changeAspect}
          >
            Lernziele
          </button>
        </span>
      </div>
    </div>
  );
};

export default Topbar;