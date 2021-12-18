import { useState } from 'react';
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
      content: 
      <div>
        <p>Unter dem Begriff "Dysgnathie" werden zusammenfassend die Fehlentwicklungen der Zähne,
      des Kiefers und des Kausystems beschrieben.</p>

        <p>Dysgnathien können:</p>
        <ul>
          <li>angeboren und/oder erworben sein</li>
          <li>einen oder beide Kiefer betreffen</li>
          <li>bilateral symmetrische oder unilateral asymmetrische Fehlstellung sein</li>
        </ul>
        <p>Weltweit sind Klasse-II-Malformationen am weitesten verbreitet, jedoch sind regional deutliche Unterschiede
          beschrieben. Kombinationen der einzelnen Dysgnathieformen treten sehr häufig auf.</p>
      </div>
    },
    {
      chapter: 'Ursachen',
      content: 
      <div>
        <p>Die Ursachen von Dysgnathien können sowohl skelettal, als auch dentoalveolär bedingt
      sein.</p>
        <ol>
          <li><span>&nbsp;Skelettale Ursache:</span>
            <ul>
              <li>Anomalien der Lage und Größe von OK und UK zueinander oder zur Schädelbasis</li>
              <li>Sagittalebene
                <ul>
                  <li>Horizontal ausgerichtete Veränderungen (SNA, SNB, ANB)</li>
                  <li>Vertikal ausgerichtete Veränderungen (dorsale/anteriore Über-/Unterentwicklung)</li>
                </ul>
              </li>
              <li>Frontalebene
                <ul>
                  <li>Horizontal ausgerichtete Veränderungen: Laterognathie</li>
                  <li>Vertikal ausgerichtete Veränderungen: ipsilaterale vertikale Verkürzung</li>
                </ul>
              </li>
              <li>Transversalebene
                <ul>
                  <li>Verhältnis der Zahnbögen zueinander</li>
                </ul>
              </li>
              <li>Klassifikation nach ANB-Winkel (Sagittale Relation von Ober- und Unterkieferrelation, mit dem
                      Prognathiegrad der Kiefer beurteilt werden (2° ist der klinische Richtwert)
              <ul>
                <li>Klasse I: neutral 0° &lt; ANB &lt;4°</li>
                <li>Klasse II: distal ANB &gt;4°</li>
                <li>Klasse III: mesial ANB &lt;0°</li>
                <li>CAVE: der ANB-Wert wird in der KFO teilweise kritisch betrachtet. Der ANB-Wert kann in
                              der oben aufgeführten Form in bestimmter Konstellation falsche Aussagen zulassen und
                              sollte immer durch den WITS-Wert ergänzt werden!
                </li>
              </ul>
              </li>
            </ul>
          </li>
          <li><span>Dentoalveoläre Ursache:</span>
            <ul>
              <li>Fehlstellung im Zahnhalteapparat</li>
              <li>Sagittale Lage der Kiefer zueinander</li>
              <li>Angle-Klassifikation zur Beschreibung der Okklusion (bezogen auf den Unterkiefer)
                <ul>
                  <li>Klasse I: Neutralokklusion = Eugnathie
                    <ul>
                      <li>Mesiale Höcker des OK-6ers greift in die mesiobukkale Furche des UK-6ers</li>
                      <li>Der OK-3er grift zwischen UK-3er und UK-4er</li>
                      <li>CAVE: Von Eugnathie spricht man in der KFO nur, wenn ein
                        <strong>komplett</strong> eugnathes Gebiss vorliegt, das heißt:
                        <ol>
                          <li>morpholgisch und funktionell optimales Gebiss</li>
                          <li>alle Zähne vorhanden</li>
                          <li>normale Zahnform liegt vor</li>
                          <li>gut ausgeformte Zahnbögen, d.h. OK= Elipse, UK= Parabel, Milchgebiss
                                              OK+UK= Halbkreis
                          </li>
                          <li>keine Lücken und keine Engstände</li>
                          <li>Übereinstimmung von Zahn- und Kiefermitte im OK und UK</li>
                          <li>Overjet von ca. 2mm und ein Overbite von ca. 2-3mm</li>
                        </ol>
                      </li>
                    </ul>
                  </li>
                  <li>Klasse II/1: Distalokklusion
                    <ul>
                      <li>Vorderer Höcker des oberen Sechsjahrmolaren okkludiert vor dem vorderen Höcker
                                      des unteren Sechsjahrmolaren
                      </li>
                      <li>Obere Frontzähne deutlich nach vorne gekippt (protrudiert, Spitzfront)</li>
                    </ul>
                  </li>
                  <li>Klasse II/2: Distalokklusion
                    <ul>
                      <li>Vorderer Höcker des oberen Sechsjahrmolaren okkludiert vor dem vorderen Höcker
                                      des unteren Sechsjahrmolare
                      </li>
                      <li>Gleichzeitig sind die oberen Frontzähne stark nach palatinal gekippt
                                      (retroinkliniert, Steilstand)
                      </li>
                      <li>Tiefbiss</li>
                    </ul>
                  </li>
                  <li>Klasse III: Mesialokklusion = Progenie
                    <ul>
                      <li>Vorderer Höcker des oberen Sechsjahrmolaren okkludiert hinter dem hinteren
                                      Höcker des unteren Sechsjahrmolaren
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>Anmerkung: In der aufgeführten Unterteilung wird ausschließlich von vollen Prämolarenbreiten
                      ausgegangen. Oftmals liegen aber nur halbe oder Viertelabweichungen vor, z.B. eine Klasse II/1
                      (1/2 PB rechts, 3/4 PB links). Dies muss bei der o.g. groben Definition berücksichtigt werden.
              </li>
            </ul>
          </li>
        </ol>
      </div>
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
  <>
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

export default Dysgnathie;
