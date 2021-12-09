import React, { useState } from 'react';
import Topbar from '../../../components/UI/Topbar';
import Grundlagen from '../../aspects/Grundlagen';
import Galerie from '../../aspects/Galerie';
import Lernziele from '../../aspects/Lernziele';
import Quiz from '../../aspects/Quiz';
import videoData from './video.json';

const Entzuendungen_und_abszesse = () => {
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
      src: 'entzuendungen_und_abszesse/quiz/index.html'
    }
  ];

  const lernziele = 
  <>
    <tr><th>Kategorie</th><th>Lernzielbeschreibung</th><th>Verb</th><th>Kompetenzniveau</th><th>Literatur</th></tr>
    <tr><td>Grundlage</td><td>Der Studierende soll die Ätiologie von Entzündungen</td><td>erklären</td><td>kognitiv</td><td>"Zahn-, Mund und Kieferheilkunde" Schwenzer, Ehrenfeld, Thieme Verlag</td></tr>
    <tr><td>Grundlage</td><td>Der Studierende soll die Keime zervikofazialer Infektionen </td><td>benennen</td><td>kognitiv</td><td>"Zahn-, Mund und Kieferheilkunde" Schwenzer, Ehrenfeld, Thieme Verlag</td></tr>
    <tr><td>Grundlage</td><td>Der Studierende soll die Symptome von Entzündungen</td><td>benennen</td><td>kognitiv</td><td>"Zahn-, Mund und Kieferheilkunde" Schwenzer, Ehrenfeld, Thieme Verlag</td></tr>
    <tr><td>Grundlage</td><td>Der Studierende soll die Logenabszesse und ihre Eigenschaften</td><td>erklären</td><td>kognitiv</td><td>"Zahn-, Mund und Kieferheilkunde" Schwenzer, Ehrenfeld, Thieme Verlag</td></tr>
    <tr><td>Grundlage</td><td>Der Studierende soll die Ätiologie, Ursachen, prädisponierende Faktoren, Pathologie, das Keimspektrum und die Diagnostik von Osteomyelitis</td><td>erklären</td><td>kognitiv</td><td>"Zahn-, Mund und Kieferheilkunde" Schwenzer, Ehrenfeld, Thieme Verlag</td></tr>
    <tr><td>Grundlage</td><td>Der Studierende soll die verschiedenen Formen der Osteomyelitis</td><td>erklären</td><td>kognitiv</td><td>"Zahn-, Mund und Kieferheilkunde" Schwenzer, Ehrenfeld, Thieme Verlag</td></tr>
    <tr><td>Grundlage</td><td>Der Studierende soll die antiobiotische Therapie der verschiedenen Entzündungen</td><td>benennen</td><td>kognitiv</td><td>"Zahn-, Mund und Kieferheilkunde" Schwenzer, Ehrenfeld, Thieme Verlag</td></tr>
  </>;

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

export default Entzuendungen_und_abszesse;
