import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Insurance from "./components/Insurance";
import Partners from './components/Partners';
import UniqueStrengths from './components/UniqueStrength';
import Process from './components/Process';
import Footer from './components/Footer';


function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Insurance />
      <Partners/>
      <UniqueStrengths/>
      <Process/>
      <Footer/>
    </div>
  );
}

export default App;