import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-yellow-400">
      <div className="py-2 flex justify-between max-w-6xl mx-auto">
        <span className="text-2xl px-5">MKG Hauptvorlesung</span>
        <span className="flex align-middle">
          <select className="mx-5" name="topics" id="topics">
            <option value="dysgnathie">Dysgnathie</option>
            <option value="lkg">LKG</option>
          </select>
          <a className="px-2 py-1" href="#">Grundlagen</a>
          <a className="px-2 py-1" href="#">Galerie</a>
          <a className="px-2 py-1" href="#">Quiz</a>
          <a className="px-2 py-1" href="#">Lernziele</a>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;