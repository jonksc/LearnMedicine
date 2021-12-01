import React from 'react';
import { useStore } from '../../Context';

const Navbar = () => {
  const { topic, setTopic } = useStore();

  const changeTopic = (event) => {
    setTopic(event.target.value);
  };

  return (
    <nav className="bg-yellow-400 mb-2">
      <div className="py-2 flex justify-between max-w-6xl mx-auto">
        <span className="text-2xl px-5">MKG Hauptvorlesung</span>
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