import React from 'react';
import Navbar from './components/UI/Navbar';
import Dysgnathie from './pages/dysgnathie/Grundlagen';
import { useStore } from './Context';


function App() {
  const { topic } = useStore();

  return (
    <div>
      <Navbar />
      <div className="max-w-6xl mx-auto">
        {topic === 'dysgnathie' && <Dysgnathie />}
      </div>
    </div>
  );
}

export default App;