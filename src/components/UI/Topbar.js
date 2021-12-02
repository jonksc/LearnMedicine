/* eslint-disable react/prop-types */
import React from 'react';

const Topbar = ({ changeAspect }) => {
  const aspects = ['Grundlagen', 'Galerie', 'Quiz', 'Lernziele'];

  return (
    <div>
      <div className="mb-5">
        {
          aspects.map((aspect, index) => <button key={index} className="btn btn-blue mr-2" value={aspect.toLowerCase()} onClick={changeAspect}>{aspect}</button>)
        }
      </div>
    </div>
  );
};

export default Topbar;