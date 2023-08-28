import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Skills from './pages/Skills';

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
