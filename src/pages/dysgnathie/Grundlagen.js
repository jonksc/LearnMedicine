/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const Grundlagen = ({ grundlagen }) => {
  const [chapter, setChapter] = useState(grundlagen[0].chapter);

  const changeChapter = (event) => {
    setChapter(event.target.value);
  };

  return (
    <div>
      <div className="flex justify-start gap-20">
        <div className="w-40">
          <p>Kapitel</p>
          <hr />
          <div className="flex flex-col items-start">
            {
              grundlagen.map((grundlage, index) => 
                <button key={index} onClick={changeChapter} value={grundlage.chapter}>{grundlage.chapter}</button>)
            }
          </div>
        </div>

        <div className="max-w-2xl">
          {
            grundlagen.map((grundlage, index) => {
              return (
                <div key={index}>
                  <h1>{chapter === grundlage.chapter && grundlage.chapter}</h1>
                  <p>{chapter === grundlage.chapter && grundlage.content}</p>
                </div>
              );
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Grundlagen;
