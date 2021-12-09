import React, { useState } from 'react';
import Topbar from '../../../components/UI/Topbar';
import Grundlagen from '../../aspects/Grundlagen';
import Galerie from '../../aspects/Galerie';
import Lernziele from '../../aspects/Lernziele';
import Quiz from '../../aspects/Quiz';
import videoData from './video.json';

const Lkg = () => {
  const [aspect, setAspect] = useState('grundlagen');

  const changeAspect = (event) => {
    setAspect(event.target.value);
  };

  const grundlagen = [
    {
      chapter: 'Allgemeines',
      content: <ul>
        <li>Lippen-Kiefer-Gaumen-Spalten treten in Mitteleuropa mit einer Häufigkeit von 1:500 Geburten auf.</li>
        <li>Es gibt weltweit deutliche Unterschiede in der Inzidenz.</li>
        <li>Die durchgehende LKG-Spalte tritt am häufigsten auf.</li>
        <li>Die linke Seite ist doppelt so häufig befallen wie die rechte Seite.</li>
        <li>Männer und Frauen sind in einem Verhältnis von 3:2 betroffen.</li>
      </ul>
    },
    {
      chapter: 'Pathogenese',
      content: <div className="content-block"><p>&nbsp;In 15-30% der Fälle sind Lippen-Kiefer-Gaumen-Spalten genetisch bedingt. In der
      Regel beobachtet man dann ein gehäuftes Auftreten in Familien.</p>
      <p>Abgesehen von der genetischen Komponente gibt es äußere Einflussfaktoren die eine Entstehung von
          Lippen-Kiefer-Gaumen-Spalten positiv beeinflussen:</p>
      <ul>
        <li>energiereiche Strahlen</li>
        <li>Chemikalien</li>
        <li>Infektionen von Mutter und Kind</li>
        <li>Sauerstoffmangel</li>
        <li>Alkoholabusus</li>
        <li>Rauchen</li>
        <li>Körperlicher und psychischer Stress</li>
      </ul>
      <p><span className="startGallery" data-gallery-item="1"><img src="thumbs/einseitige_lkg_Spalte_Screenshot_1.png"
        alt="Einseitige LKG Spalte" /> </span></p>
      <p>Bei der embryologischen Entwicklung gibt es zwei entscheidene Phasen, welche die Entstehung einer Spalte
          bedingen. Die kritische teratogene Periode der Lippe ist in der 5. intrauterinen Woche:</p>
      <ul>
        <li>Die Oberlippe entsteht entwicklungsgeschichtlich aus 3 Blastemen: zwei seitliche Oberkieferwülste und
              eine medialer Nasenwulst.
        </li>
        <li>Diese 3 Blasteme verschmelzen in der 5. Schwangerschaftswoche paramedian, dort wo die Philtrumkante
              später zum liegen kommt.
        </li>
        <li>Es ist fraglich ob die Enstehung durch fehlende Vereinigung der Blasteme oder durch ein sekundäres
              Auseinanderweichen bedingt ist.
        </li>
      </ul>
      <p>Die kritische teratogene Periode des Gaumens ist in der 10. und 12. intrauterinen Woche:</p>
      <ul>
        <li>Der Gaumen entsteht durch eine Verschmelzung der seitlichen Oberkieferwülste.</li>
        <li>Im Hartgaumenbereich verwachsen diese Wülste in der Mitte und kranial auch mit medialen Nasenfortsatz.
        </li>
        <li>Dementsprechend kann es im Hartgaumenbereich zu einseitigen und doppelseitigen Spaltbildungen kommen.
        </li>
        <li>Da der Weichgaumen nur aus den beiden seitlichen Oberkieferwülsten entsteht, kann es hier immer nur zu
              einer mittigen Spaltbildung kommen.
        </li>
      </ul>
      </div>
    },
    {
      chapter: 'Einteilung Spaltformen',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus sequi aliquam quia distinctio accusantium nobis illum. Porro, voluptates aspernatur? Perferendis sapiente adipisci nostrum porro esse, unde sequi beatae repellat illo.'
    },
    {
      chapter: 'Seltene Gesichtsspalten',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus sequi aliquam quia distinctio accusantium nobis illum. Porro, voluptates aspernatur? Perferendis sapiente adipisci nostrum porro esse, unde sequi beatae repellat illo.'
    },    {
      chapter: 'Diagnostik',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus sequi aliquam quia distinctio accusantium nobis illum. Porro, voluptates aspernatur? Perferendis sapiente adipisci nostrum porro esse, unde sequi beatae repellat illo.'
    },    {
      chapter: 'Funktionsstörungen durch Spalten',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus sequi aliquam quia distinctio accusantium nobis illum. Porro, voluptates aspernatur? Perferendis sapiente adipisci nostrum porro esse, unde sequi beatae repellat illo.'
    },    {
      chapter: 'Therapie',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus sequi aliquam quia distinctio accusantium nobis illum. Porro, voluptates aspernatur? Perferendis sapiente adipisci nostrum porro esse, unde sequi beatae repellat illo.'
    },
  ];

  const quizzes = [
    {
      type: 'Allgemein',
      src: 'lkg/quiz/index.html'
    }
  ];

  const lernziele = 
  <tbody>
    <tr><th>Kategorie</th><th>Lernzielbeschreibung</th><th>Verb</th><th>Kompetenzniveau</th><th>Lernform</th><th>Prüfung</th><th>Literatur</th></tr>
    <tr><td>Grundlage</td><td>Der Studierende soll die Spaltformen</td><td>erkennen</td><td>kognitiv</td><td>Vorlesung</td><td>mündlich</td><td>z.B. "Spezielle Chirurgie" N. Schwenzer</td></tr>
    <tr><td>Grundlage</td><td>Der Studierende soll Pathogenese</td><td>erklären</td><td>kognitiv</td><td>Vorlesung</td><td>mündlich</td><td>z.B. "Spezielle Chirurgie" N. Schwenzer</td></tr>
    <tr><td>Therapie</td><td>Der Studierende soll die Operationsschritte</td><td>erklären</td><td>kognitiv</td><td>Vorlesung</td><td>mündlich</td><td>z.B. "Spezielle Chirurgie" N. Schwenzer</td></tr>
    <tr><td>Therapie</td><td>Der Studierende soll die Operationstechnik der Lippenkorrektur</td><td>demonstrieren</td><td>psychomotorisch</td><td>Vorlesung</td><td>mündlich</td><td>z.B. "Spezielle Chirurgie" N. Schwenzer</td></tr>
    <tr><td>Kommunikation</td><td>Der Studierende soll in der Lage sein eine Elternaufklärung</td><td>durchzuführen</td><td>psychomotorisch</td><td>Vorlesung</td><td>mündlich</td><td>z.B. "Spezielle Chirurgie" N. Schwenzer</td></tr>
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

export default Lkg;
