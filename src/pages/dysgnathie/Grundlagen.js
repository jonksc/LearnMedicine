import React, { useState } from 'react';
import Topbar from '../../components/UI/Topbar';
import Galerie from './Galerie';

const Grundlagen = () => {
  const [aspect, setAspect] = useState('grundlagen');
  const [chapter, setChapter] = useState('allgemeines');

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
            <button onClick={changeChapter} value="allgemeines">Allgemeines</button>
            <button onClick={changeChapter} value="ursachen">Ursachen</button>
            <button onClick={changeChapter} value="dysgnathieformen">Dysgnathieformen</button>
            <button onClick={changeChapter} value="folgen">Folgen</button>
            <button onClick={changeChapter} value="diagnostik">Diagnostik</button>
            <button onClick={changeChapter} value="therapie">Therapie</button>
          </div>
        </div>

        <div className="max-w-2xl">
          {chapter === 'allgemeines' &&
          <>
            <h1>Allgemeines</h1>
            <p>Unter dem Begriff &quot;Dysgnathie&quot; werden zusammenfassend die Fehlentwicklungen der Zähne, des Kiefers und des Kausystems beschrieben.</p>
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
    </div>
  );
};

export default Grundlagen;
