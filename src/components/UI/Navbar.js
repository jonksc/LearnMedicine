import React from 'react';
import { DocumentTextIcon } from '@heroicons/react/outline';

const Navbar = ({ topic, changeTopic }) => {

  return (
    <nav className="bg-gray-300 mb-6">
      <div className="px-5 py-3 flex justify-between max-w-5xl mx-auto">
        <div className="flex items-center gap-2">
          <DocumentTextIcon className="h-6 w-6 text-gray-700" aria-hidden="true" />
          <span className="text-xl">MKG Hauptvorlesung</span>
        </div>
        <span className="flex align-middle">
          <select className="mx-5" name="topics" id="topics" value={topic} onChange={changeTopic}>
            <option value="dysgnathie">Dysgnathie</option>
            <option value="entzuendungen_und_abszesse">Entzündungen und Abszesse</option>
            <option value='gesichtshauttumoren'>Gesichtshauttumoren</option>
            <option value='implantologie_und_epithetik'>Implantologie und Epithetik</option>
            <option value='komplikationen'>Komplikationen</option>
            <option value='kraniosynostosen'>Kraniosynostosen</option>
            <option value="lkg">LKG</option>
            <option value='lokale_lappenplastiken'>Lokale Lappenplastiken</option>
            <option value='mikrochirurgie'>Mikrochirurgie</option>
            <option value='mronj_und_orn'>Mronj und Orn</option>
            <option value='nasennebenhoehlen'>Nasennebenhöhlen</option>
            <option value='odontogene_tumoren'>Odontogene Tumoren</option>
            <option value='praeprothetische_chirurgie_augmentation'>Präprothetische Chirurgie Augmentation</option>
            <option value='speicheldruesen'>Speicheldrüsen</option>
            <option value='spezifische_infektionen'>Spezifische Infektionen</option>
            <option value='trauma'>Trauma</option>
            <option value='tumoren'>Tumoren</option>
            <option value='zysten'>Zysten</option>
          </select>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;