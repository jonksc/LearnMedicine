/* eslint-disable react/prop-types */
import React from 'react';

const Topbar = ({ changeAspect }) => {

  return (
    <div>
      <div className="p-3">
        <button className="btn mr-2" value="grundlagen" onClick={changeAspect}>Grundlagen</button>
        <button className="btn mr-2" value="galerie" onClick={changeAspect}>Galerie</button>
        <button className="btn mr-2" value="quiz" onClick={changeAspect}>Quiz</button>
        <button className="btn mr-2" value="lernziele" onClick={changeAspect}>Lernziele</button>
      </div>
    </div>
  );
};

export default Topbar;
