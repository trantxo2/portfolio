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
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};
