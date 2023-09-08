import React, { useState } from 'react';
import './Header.css';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const [menuActive, setMenuActive] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const closeMenu = () => {
    setMenuActive(false);
  };

  const sectionsData = [
    { id: 'home', label: 'Inicio', path: '/' },
    { id: 'about', label: 'Sobre mí', path: '/about' },
    { id: 'skills', label: 'Habilidades', path: '/skills' },
    { id: 'projects', label: 'Proyectos', path: '/projects' },
    { id: 'contact', label: 'Contacto', path: '/contact' },
  ];

  return (
    <div className="header-container">
      <div className="header-title">
        <Link to="/portfolio/">Portfolio.</Link>
      </div>

      <i
        className={`bx ${menuActive ? 'bx-x' : 'bx-menu'}`}
        id="menu-icon"
        onClick={toggleMenu}
      ></i>

      <nav className={`navbar ${menuActive ? 'active' : ''}`}>
        {sectionsData.map((section) => (
          <Link
            key={section.id}
            to={`/portfolio${section.path}`}
            className={
              location.pathname === `/portfolio${section.path}` ? 'active' : ''
            }
            onClick={closeMenu}
          >
            {section.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default Header;