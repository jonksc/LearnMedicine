/* eslint-disable react/prop-types */
import React from 'react';
import { DocumentTextIcon } from '@heroicons/react/outline';

const Navbar = ({ topic, changeTopic }) => {

  return (
    <nav className="bg-gray-300 mb-3">
      <div className="px-5 py-3 flex justify-between max-w-5xl mx-auto">
        <div className="flex items-center gap-2">
          <DocumentTextIcon className="h-6 w-6 text-gray-700" aria-hidden="true" />
          <span className="text-xl">MKG Hauptvorlesung</span>
        </div>
        <span className="flex align-middle">
          <select className="mx-5" name="topics" id="topics" value={topic} onChange={changeTopic}>
            <option value="dysgnathie">Dysgnathie</option>
            <option value="lkg">LKG</option>
          </select>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;