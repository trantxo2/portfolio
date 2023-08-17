import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header-container">
      <div className="header-title">Portfolio.</div>
      <nav className="navbar">
        <a href="#home" className="active">
          Inicio
        </a>
        <a href="#about">Sobre mi</a>
        <a href="#proyects">Proyectos</a>
        <a href="#contact">Contacto</a>
      </nav>
    </div>
  );
}
export default Header;
