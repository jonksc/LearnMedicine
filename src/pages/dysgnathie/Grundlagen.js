import React, { useState } from 'react';
import Topbar from '../../components/UI/Topbar';
import Galerie from './Galerie';
import Lernziele from './Lernziele';
import Quiz from './Quiz';

const Grundlagen = () => {
  const [aspect, setAspect] = useState('grundlagen');
  const [chapter, setChapter] = useState('allgemeines');

  const changeAspect = (event) => {
    setAspect(event.target.value);
  };

  const changeChapter = (event) => {
    setChapter(event.target.value);
  };

  const chapters = ['Allgemeines', 'Ursachen', 'Dysgnathieformen', 'Folgen', 'Diagnostik', 'Therapie'];

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
              chapters.map((chapter, index) => 
                <button key={index} onClick={changeChapter} value={chapter.toLowerCase()}>{chapter}</button>)
            }
          </div>
        </div>

        <div className="max-w-2xl">
          {chapter === 'allgemeines' &&
          <>
            <h1>Allgemeines</h1>
            <p>Unter dem Begriff "Dysgnathie" werden zusammenfassend die Fehlentwicklungen der Zähne, des Kiefers und des Kausystems beschrieben.</p>
          </>}
          {chapter === 'ursachen' &&
          <>
            <h1>Ursachen</h1>
            <p>Die Ursachen von Dysgnathien können sowohl skelettal, als auch dentoalveolär bedingt sein.</p>
          </>}
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
