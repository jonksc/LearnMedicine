import React from 'react';
import { useStore } from '../../Context';
import { DocumentTextIcon } from '@heroicons/react/outline';

const Navbar = () => {
  const { topic, setTopic } = useStore();

  const changeTopic = (event) => {
    setTopic(event.target.value);
  };

  return (
    <nav className="bg-yellow-400 mb-3">
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