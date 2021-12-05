/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const Quiz = ({ quizzes }) => {
  const [quizType, setQuizType] = useState('');

  const changeQuizType = (event) => {
    setQuizType(event.target.value);
  };

  console.log(!quizType);

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

      {!quizType && <p className="m-6 text-3xl">Quiz waehlen</p>}

      {
        quizzes.filter(quiz => quizType === quiz.type).map((quiz, index) => {
          return (
            <div key={index}>
              <iframe width="100%" name={quiz.type} frameBorder="0" src={quiz.src}></iframe>
            </div>
          );
        })
      }
    </div>
  );
};

export default Quiz;
