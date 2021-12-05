import React from 'react';
import Grundlagen from './dysgnathie/Grundlagen';

const Lkg = () => {
  const grundlagen = [
    {
      chapter: 'Test chapter',
      content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus laboriosam dolor ipsum dicta facilis laudantium, eligendi repellat commodi eveniet consequatur sunt nemo illum molestiae nam accusantium doloremque nisi, molestias deserunt.'
    },
    {
      chapter: 'Test chapter 222',
      content: ' 2222222 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus laboriosam dolor ipsum dicta facilis laudantium, eligendi repellat commodi eveniet consequatur sunt nemo illum molestiae nam accusantium doloremque nisi, molestias deserunt.'
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

export default Lkg;
