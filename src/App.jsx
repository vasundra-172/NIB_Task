import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Insurance from "./components/Insurance";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Insurance />
    </div>
  );
}

export default App;