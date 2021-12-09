import React, { useState } from 'react';
import Navbar from './components/UI/Navbar';
import Dysgnathie from './pages/topics/dysgnathie/Dysgnathie';
import Entzuendungen_und_abszesse from './pages/topics/entzuendungen_und_abszesse/Entzuendungen_und_abszesse';
import Gesichtshauttumoren from './pages/topics/gesichtshauttumoren/Gesichtshauttumoren';
import Lkg from './pages/topics/lkg/Lkg';

function App() {
  const [topic, setTopic] = useState('dysgnathie');

  const changeTopic = (event) => {
    setTopic(event.target.value);
  };

  return (
    <div>
      <Navbar
        topic={topic}
        changeTopic={changeTopic}
      />
      <div className="max-w-5xl mx-auto px-5">
        {topic === 'dysgnathie' && <Dysgnathie />}
        {topic === 'entzuendungen_und_abszesse' && <Entzuendungen_und_abszesse />}
        {topic === 'gesichtshauttumoren' && <Gesichtshauttumoren />}
        {topic === 'implantologie_und_epithetik' && <Lkg />}
        {topic === 'komplikationen' && <Lkg />}
        {topic === 'kraniosynostosen' && <Lkg />}
        {topic === 'lkg' && <Lkg />}
        {topic === 'lokale_lappenplastiken' && <Lkg />}
        {topic === 'mikrochirurgie' && <Lkg />}
        {topic === 'mronj_und_orn' && <Lkg />}
        {topic === 'nasennebenhoehlen' && <Lkg />}
        {topic === 'odontogene_tumoren' && <Lkg />}
        {topic === 'praeprothetische_chirurgie_augmentation' && <Lkg />}
        {topic === 'speicheldruesen' && <Lkg />}
        {topic === 'spezifische_infektionen' && <Lkg />}
        {topic === 'trauma' && <Lkg />}
        {topic === 'tumoren' && <Lkg />}
        {topic === 'zysten' && <Lkg />}
      </div>
    </div>
  );
}

export default App;