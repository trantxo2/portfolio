import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Skills from './components/pages/Skills';

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Skills />
      <Contact />
    </>
  );
}

export default App;
