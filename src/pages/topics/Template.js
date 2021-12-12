import { useState } from 'react';
import Topbar from '../../../components/UI/Topbar';
import Grundlagen from '../../aspects/Grundlagen';
import Galerie from '../../aspects/Galerie';
import Lernziele from '../../aspects/Lernziele';
import Quiz from '../../aspects/Quiz';
import videoData from './video.json';

const Template = () => {
  const [aspect, setAspect] = useState('grundlagen');

  const changeAspect = (event) => {
    setAspect(event.target.value);
  };

  const grundlagen = [
    {
      chapter: 'Ätiologie',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus sequi aliquam quia distinctio accusantium nobis illum. Porro, voluptates aspernatur? Perferendis sapiente adipisci nostrum porro esse, unde sequi beatae repellat illo.'
    },
    {
      chapter: 'Symptome',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus sequi aliquam quia distinctio accusantium nobis illum. Porro, voluptates aspernatur? Perferendis sapiente adipisci nostrum porro esse, unde sequi beatae repellat illo.'
    },
    {
      chapter: 'Einteilungen',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus sequi aliquam quia distinctio accusantium nobis illum. Porro, voluptates aspernatur? Perferendis sapiente adipisci nostrum porro esse, unde sequi beatae repellat illo.'
    },
    {
      chapter: 'Logenabszesse',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus sequi aliquam quia distinctio accusantium nobis illum. Porro, voluptates aspernatur? Perferendis sapiente adipisci nostrum porro esse, unde sequi beatae repellat illo.'
    },
    {
      chapter: 'Phlegmone',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus sequi aliquam quia distinctio accusantium nobis illum. Porro, voluptates aspernatur? Perferendis sapiente adipisci nostrum porro esse, unde sequi beatae repellat illo.'
    },
    {
      chapter: 'Osteomyelitis',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus sequi aliquam quia distinctio accusantium nobis illum. Porro, voluptates aspernatur? Perferendis sapiente adipisci nostrum porro esse, unde sequi beatae repellat illo.'
    },
    {
      chapter: 'Therapie',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus sequi aliquam quia distinctio accusantium nobis illum. Porro, voluptates aspernatur? Perferendis sapiente adipisci nostrum porro esse, unde sequi beatae repellat illo.'
    }
  ];

  const quizzes = [
    {
      type: 'Allgemein',
      src: 'lkg/quiz/index.html'
    }
  ];

  const lernziele = 
  <tbody>
  
  </tbody>;

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
        <Galerie
          data={videoData}
        />
      }

      {aspect === 'quiz' &&
        <Quiz
          quizzes={quizzes}
        />
      }

      {aspect === 'lernziele' &&
        <Lernziele
          lernziele={lernziele}
        />
      }
    </div>
  );
};

export default Template;
