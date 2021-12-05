import React from 'react';

const Topbar = ({ changeAspect }) => {
  const aspects = ['Grundlagen', 'Galerie', 'Quiz', 'Lernziele'];

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-5">
        {
          aspects.map((aspect, index) => <button key={index} className="btn btn-blue" value={aspect.toLowerCase()} onClick={changeAspect}>{aspect}</button>)
        }
      </div>
    </div>
  );
};

export default Topbar;