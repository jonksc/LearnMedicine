import React, { useState } from 'react';
import Topbar from '../../../components/UI/Topbar';
import Grundlagen from '../../aspects/Grundlagen';
import Galerie from '../../aspects/Galerie';
import Lernziele from '../../aspects/Lernziele';
import Quiz from '../../aspects/Quiz';
import videoData from './video.json';

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
    },
    {
      chapter: 'Dysgnathieformen',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus sequi aliquam quia distinctio accusantium nobis illum. Porro, voluptates aspernatur? Perferendis sapiente adipisci nostrum porro esse, unde sequi beatae repellat illo.'
    },
    {
      chapter: 'Folgen',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus sequi aliquam quia distinctio accusantium nobis illum. Porro, voluptates aspernatur? Perferendis sapiente adipisci nostrum porro esse, unde sequi beatae repellat illo.'
    },
    {
      chapter: 'Diagnostik',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus sequi aliquam quia distinctio accusantium nobis illum. Porro, voluptates aspernatur? Perferendis sapiente adipisci nostrum porro esse, unde sequi beatae repellat illo.'
    },
    {
      chapter: 'Therapie',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus sequi aliquam quia distinctio accusantium nobis illum. Porro, voluptates aspernatur? Perferendis sapiente adipisci nostrum porro esse, unde sequi beatae repellat illo.'
    },
  ];

  const quizzes = [
    {
      type: 'Allgemein',
      src: 'dysgnathie/quiz/allgemein/index.html'
    },
    {
      type: 'Referenzlinien',
      src: 'dysgnathie/quiz/referenzlinien/quizskelettale%20(Web)/index.html'
    },
    {
      type: 'Referenzpunkte',
      src: 'dysgnathie/quiz/skelettale/quizskelettale%20(Web)/index.html'
    },
    {
      type: 'Weichgewebeanalyse',
      src: 'dysgnathie/quiz/weichgewebeanalyse/quizweich%20(Web)/index.html'
    }
  ];

  const lernziele = 
  <tbody>
    <tr><th>Kategorie</th><th>Lernzielbeschreibung</th><th>Verb</th><th>Kompetenzniveau</th><th>Literatur</th></tr>
    <tr><td>Grundlage</td><td>Der Studierende soll die Ursachen der Dysgnathien</td><td>erklären</td><td>kognitiv</td><td>"Zahn-, Mund und Kieferheilkunde" Schwenzer, Ehrenfeld, Thieme Verlag</td></tr>
    <tr><td>Grundlage</td><td>Der Studierende soll die Angle-Klassifikation</td><td>anwenden</td><td>psychomotorisch</td><td>"Zahn-, Mund und Kieferheilkunde" Schwenzer, Ehrenfeld, Thieme Verlag</td></tr>
    <tr><td>Grundlage</td><td>Der Studierende soll die Klassifikation nach dem ANB-Winkel</td><td>anwenden</td><td>psychomotorisch</td><td>"Zahn-, Mund und Kieferheilkunde" Schwenzer, Ehrenfeld, Thieme Verlag</td></tr>
    <tr><td>Grundlage</td><td>Der Studierende soll die Dysgnathieformen</td><td>benennen</td><td>kognitiv</td><td>"Zahn-, Mund und Kieferheilkunde" Schwenzer, Ehrenfeld, Thieme Verlag</td></tr>
    <tr><td>Grundlage</td><td>Der Studierende soll Folgen der unbehandelten Dysgnathie</td><td>erklären</td><td>kognitiv</td><td>"Zahn-, Mund und Kieferheilkunde" Schwenzer, Ehrenfeld, Thieme Verlag</td></tr>
    <tr><td>Diagnostik</td><td>Der Studierende soll die diagnostischen Möglichkeiten</td><td>erklären</td><td>kognitiv</td><td>"Zahn-, Mund und Kieferheilkunde" Schwenzer, Ehrenfeld, Thieme Verlag</td></tr>
    <tr><td>Therapie</td><td>Der Studierende soll den Therapieplan einer Dysgnathie</td><td>erklären</td><td>kognitiv</td><td>"Zahn-, Mund und Kieferheilkunde" Schwenzer, Ehrenfeld, Thieme Verlag</td></tr>
    <tr><td>Therapie</td><td>Der Studierende soll die allgemeinen Grundlagen der orthognathen Chirurgie</td><td>benennen</td><td>kognitiv</td><td>"Zahn-, Mund und Kieferheilkunde" Schwenzer, Ehrenfeld, Thieme Verlag</td></tr>
    <tr><td>Therapie</td><td>Der Studierende soll die Grundlagen der chirurgischen Verfahren</td><td>erklären</td><td>kognitiv</td><td>"Zahn-, Mund und Kieferheilkunde" Schwenzer, Ehrenfeld, Thieme Verlag</td></tr>
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

export default Dysgnathie;
