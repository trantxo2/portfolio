import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header-container">
      <div className="header-title">Portfolio.</div>
      <div className="header-pages">
        <div>Inicio</div>
        <div>Sobre mi</div>
        <div>Portfolio</div>
        <div>Contacto</div>
      </div>
    </div>
  );
}
export default Header;
