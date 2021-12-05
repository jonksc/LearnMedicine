import React, { useState } from 'react';
import Navbar from './components/UI/Navbar';
import Dysgnathie from './pages/topics/dysgnathie/Dysgnathie';
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
        {topic === 'lkg' && <Lkg />}
      </div>
    </div>
  );
}

export default App;