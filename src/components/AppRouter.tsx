import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { About } from './pages/about/About';
import { Contact } from './pages/contact/Contact';
import { Home } from './pages/home/Home';
import { Proyects } from './pages/proyects/Proyects';
import { Skills } from './pages/skills/Skills';

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
