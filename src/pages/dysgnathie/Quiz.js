import React, { useState } from 'react';

const Quiz = () => {
  const [quizType, setQuizType] = useState('');

  const changeQuizType = (event) => {
    setQuizType(event.target.value);
  };

  return (
    <div>
      <div>
        <div className="inline-flex shadow-sm rounded-md" role="group">
          <button onClick={changeQuizType} type="button" value="Allgemein" className="rounded-l-lg border border-gray-400 bg-white text-sm font-medium px-4 py-2 text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
            Allgemein
          </button>
          <button onClick={changeQuizType} type="button" value="Referenzlinien" className="border-t border-b border-r border-gray-400 bg-white text-sm font-medium px-4 py-2 text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600">
            Skelettale Referenzlinien
          </button>
          <button onClick={changeQuizType} type="button" value="Referenzpunkte" className="border-t border-b border-gray-400 bg-white text-sm font-medium px-4 py-2 text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
            Skelletale Referenzpunkte (RP)
          </button>
          <button onClick={changeQuizType} type="button" value="Weichgewebeanalyse" className="rounded-r-md border border-gray-400 bg-white text-sm font-medium px-4 py-2 text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
            RP Weichgewebeanalyse
          </button>
        </div>
      </div>
      
      {
        quizType === 'Allgemein' &&
          <iframe width="100%" name="Allgemein" frameBorder="0" src="dysgnathie/quiz/allgemein/index.html"></iframe>
      }
      
      {
        quizType === 'Referenzlinien' &&
          <iframe width="100%" name="Referenzlinien" frameBorder="0" src="dysgnathie/quiz/referenzlinien/quizskelettale%20(Web)/index.html"></iframe>
      }

      {
        quizType === 'Referenzpunkte' &&
          <iframe width="100%" name="Referenzpunkte" frameBorder="0" src="dysgnathie/quiz/skelettale/quizskelettale%20(Web)/index.html"></iframe>
      }

      {
        quizType === 'Weichgewebeanalyse' &&
          <iframe width="100%" name="Weichgewebeanalyse" frameBorder="0"
            src="dysgnathie/quiz/weichgewebeanalyse/quizweich%20(Web)/index.html"></iframe>
      }
    </div>
  );
};

export default Quiz;
