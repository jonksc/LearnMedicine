/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Topbar from '../../components/UI/Topbar';
import Galerie from './Galerie';
import Lernziele from './Lernziele';
import Quiz from './Quiz';

// eslint-disable-next-line react/prop-types
const Grundlagen = ({ grundlagen }) => {
  const [aspect, setAspect] = useState('grundlagen');
  const [chapter, setChapter] = useState(grundlagen[0].chapter);

  const changeAspect = (event) => {
    setAspect(event.target.value);
  };

  const changeChapter = (event) => {
    setChapter(event.target.value);
  };

  return (
    <div>
      <Topbar
        aspect={aspect}
        changeAspect={changeAspect}
      />
      {aspect === 'grundlagen' &&
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
      }

      {aspect === 'galerie' &&
        <Galerie />
      }

      {aspect === 'quiz' &&
        <Quiz />
      }

      {aspect === 'lernziele' &&
        <Lernziele />
      }
    </div>
  );
};

export default Grundlagen;
