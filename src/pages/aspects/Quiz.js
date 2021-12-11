import React, { useState } from 'react';

const Quiz = ({ quizzes }) => {
  const [quizType, setQuizType] = useState('');

  const changeQuizType = (event) => {
    setQuizType(event.target.value);
  };


  return (
    <div>
      <div className="mb-2 text-xl">
        <p>Quiz waehlen:</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {
          quizzes.map((quiz, index) => {
            return (
              <button key={index} onClick={changeQuizType} type="button" value={quiz.type} className="btn bg-amber-500 hover:bg-amber-700 text-white">
                {quiz.type}
              </button>
            );
          })
        }
      </div>

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
