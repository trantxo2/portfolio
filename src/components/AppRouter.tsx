import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { About } from './pages/about/About';
import { Contact } from './pages/contact/Contact';
import { Home } from './pages/home/Home';
import { Skills } from './pages/skills/Skills';
import { Projects } from './pages/projects/Projects';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/portfolio/" element={<Home />} />
      <Route path="/portfolio/about" element={<About />} />
      <Route path="/portfolio/skills" element={<Skills />} />
      <Route path="/portfolio/projects" element={<Projects />} />
      <Route path="/portfolio/contact" element={<Contact />} />
    </Routes>
  );
};
