import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import { Proyects } from './pages/Proyects';
import { Skills } from './pages/Skills';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/home" index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/proyects" element={<Proyects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};
