import React, { useState } from 'react';
import Topbar from '../../components/UI/Topbar';
import Grundlagen from './Grundlagen';
import Galerie from './Galerie';
import Lernziele from './Lernziele';
import Quiz from './Quiz';

const Dysgnathie = () => {
  const [aspect, setAspect] = useState('grundlagen');

  const changeAspect = (event) => {
    setAspect(event.target.value);
  };

  const grundlagen = [
    {
      chapter: 'Allgemeines',
      content: 'Unter dem Begriff "Dysgnathie" werden zusammenfassend die Fehlentwicklungen der Zähne, des Kiefers und des Kausystems beschrieben.'
    },
    {
      chapter: 'Ursachen',
      content: 'Die Ursachen von Dysgnathien können sowohl skelettal, als auch dentoalveolär bedingt sein.'
    }
  ];

  return (
    <div>
      <Topbar
        aspect={aspect}
        changeAspect={changeAspect}
      />
      {aspect === 'grundlagen' &&
        <Grundlagen
          grundlagen={grundlagen}
        />
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

export default Dysgnathie;
