import React from 'react';

const Topbar = ({ aspect, changeAspect }) => {

  return (
    <div className="flex justify-center">
      <div className="flex flex-wrap gap-2 mb-6">
        <span className="relative z-0 inline-flex shadow-sm rounded-md">
          <button
            type="button"
            className={`relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-md font-semibold text-gray-700 hover:bg-gray-50 ${aspect === 'grundlagen' && 'z-10 outline-none ring-1 ring-cyan-600 border-cyan-600'}`}
            value="grundlagen"
            onClick={changeAspect}
          >
            Grundlagen
          </button>
          <button
            type="button"
            className={`-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-md font-semibold text-gray-700 hover:bg-gray-50 ${aspect === 'galerie' && 'z-10 outline-none ring-1 ring-cyan-600 border-cyan-600'}`}
            value="galerie"
            onClick={changeAspect}
          >
            Galerie
          </button>
          <button
            type="button"
            className={`-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-md font-semibold text-gray-700 hover:bg-gray-50 ${aspect === 'quiz' && 'z-10 outline-none ring-1 ring-cyan-600 border-cyan-600'}`}
            value="quiz"
            onClick={changeAspect}
          >
            Quiz
          </button>
          <button
            type="button"
            className={`-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-md font-semibold text-gray-700 hover:bg-gray-50 ${aspect === 'lernziele' && 'z-10 outline-none ring-1 ring-cyan-600 border-cyan-600'}`}
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