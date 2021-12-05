import React from 'react';
import Grundlagen from './Grundlagen';

const Dysgnathie = () => {
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
      <Grundlagen
        grundlagen={grundlagen}
      />
    </div>
  );
};

export default Dysgnathie;
