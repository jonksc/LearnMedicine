import React, { useState } from 'react';
import Topbar from '../../../components/UI/Topbar';
import Grundlagen from '../../aspects/Grundlagen';
import Galerie from '../../aspects/Galerie';
import Lernziele from '../../aspects/Lernziele';
import Quiz from '../../aspects/Quiz';
import videoData from './video.json';

const Gesichtshauttumoren = () => {
  const [aspect, setAspect] = useState('grundlagen');

  const changeAspect = (event) => {
    setAspect(event.target.value);
  };

  const grundlagen = [
    {
      chapter: 'Grundlagen',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus sequi aliquam quia distinctio accusantium nobis illum. Porro, voluptates aspernatur? Perferendis sapiente adipisci nostrum porro esse, unde sequi beatae repellat illo.'
    },
    {
      chapter: 'Basaliom',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus sequi aliquam quia distinctio accusantium nobis illum. Porro, voluptates aspernatur? Perferendis sapiente adipisci nostrum porro esse, unde sequi beatae repellat illo.'
    },
    {
      chapter: 'Plattenepithelkarzinom',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus sequi aliquam quia distinctio accusantium nobis illum. Porro, voluptates aspernatur? Perferendis sapiente adipisci nostrum porro esse, unde sequi beatae repellat illo.'
    },
    {
      chapter: 'Merkelzellkarzinom',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus sequi aliquam quia distinctio accusantium nobis illum. Porro, voluptates aspernatur? Perferendis sapiente adipisci nostrum porro esse, unde sequi beatae repellat illo.'
    },
    {
      chapter: 'Malignes Melanom',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus sequi aliquam quia distinctio accusantium nobis illum. Porro, voluptates aspernatur? Perferendis sapiente adipisci nostrum porro esse, unde sequi beatae repellat illo.'
    },
    {
      chapter: 'Keratoakanthom',
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
      src: 'gesichtshauttumoren/quiz/index.html'
    }
  ];

  const lernziele = 
  <tbody>
    <tr><th>Kategorie</th><th>Lernzielbeschreibung</th><th>Verb</th><th>Kompetenzniveau</th><th>Literatur</th></tr>
    <tr><td>Grundlage</td><td>Der Studierende soll den Aufbau der Haut</td><td>benennen</td><td>kognitiv</td><td>"Zahn-, Mund und Kieferheilkunde" Schwenzer, Ehrenfeld, Thieme Verlag</td></tr>
    <tr><td>Grundlage</td><td>Der Studierende soll die Eindringtiefe nach Clark und Breslow</td><td>benennen</td><td>kognitiv</td><td>"Zahn-, Mund und Kieferheilkunde" Schwenzer, Ehrenfeld, Thieme Verlag</td></tr>
    <tr><td>Therapie</td><td>Der Studierende soll die Eigenschaften und Therapie von Basaliomen</td><td>erklären</td><td>kognitiv</td><td>"Zahn-, Mund und Kieferheilkunde" Schwenzer, Ehrenfeld, Thieme Verlag</td></tr>
    <tr><td>Therapie</td><td>Der Studierende soll die Eigenschaften und Therapie von Plattenepithelkarzinomen</td><td>erklären</td><td>kognitiv</td><td>"Zahn-, Mund und Kieferheilkunde" Schwenzer, Ehrenfeld, Thieme Verlag</td></tr>
    <tr><td>Therapie</td><td>Der Studierende soll die Eigenschaften und Therapie von Merkelzellkarzinomen</td><td>erklären</td><td>kognitiv</td><td>"Zahn-, Mund und Kieferheilkunde" Schwenzer, Ehrenfeld, Thieme Verlag</td></tr>
    <tr><td>Therapie</td><td>Der Studierende soll die Eigenschaften und Therapie von Malignen Melanomen</td><td>erklären</td><td>kognitiv</td><td>"Zahn-, Mund und Kieferheilkunde" Schwenzer, Ehrenfeld, Thieme Verlag</td></tr>
    <tr><td>Therapie</td><td>Der Studierende soll die Eigenschaften und Therapie von Kerathoakanthomen</td><td>erklären</td><td>kognitiv</td><td>"Zahn-, Mund und Kieferheilkunde" Schwenzer, Ehrenfeld, Thieme Verlag</td></tr>
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

export default Gesichtshauttumoren;
