import React from 'react';

const Quiz = () => {
  return (
    <div>
      <iframe width="100%" id="iframeAllgemein" frameBorder="0" src="dysgnathie/quiz/allgemein/index.html"></iframe>
        
      <iframe width="100%" id="iframeReferenzlinien" frameBorder="0" src="dysgnathie/quiz/referenzlinien/quizskelettale%20(Web)/index.html"></iframe>

      <iframe width="100%" id="iframeReferenzpunkte" frameBorder="0" src="dysgnathie/quiz/skelettale/quizskelettale%20(Web)/index.html"></iframe>
   
      <iframe width="100%" id="iframeWeichgewebeanalyse" frameBorder="0"
        src="dysgnathie/quiz/weichgewebeanalyse/quizweich%20(Web)/index.html"></iframe>
    </div>
  );
};

export default Quiz;
