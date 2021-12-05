import React from 'react';
import Navbar from './components/UI/Navbar';
import Dysgnathie from './pages/topics/dysgnathie/Dysgnathie';
import { useStore } from './Context';
import Lkg from './pages/topics/lkg/Lkg';

function App() {
  const { topic } = useStore();

  return (
    <div>
      <Navbar />
      <div className="max-w-5xl mx-auto px-5">
        {topic === 'dysgnathie' && <Dysgnathie />}
        {topic === 'lkg' && <Lkg />}
      </div>
    </div>
  );
}

export default App;