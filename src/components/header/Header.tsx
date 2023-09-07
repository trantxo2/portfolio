import React, { useState, useEffect } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  const [menuActive, setMenuActive] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar a');

    const handleScroll = () => {
      const top = window.scrollY;

      sections.forEach((sec) => {
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
          navLinks.forEach((link) => {
            link.classList.remove('active');
          });
          const activeLink = document.querySelector(
            `.navbar a[href="/portfolio${id}"]`,
          );
          if (activeLink) {
            activeLink.classList.add('active');
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
        <Link to="/">Portfolio.</Link>
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
            to={`${section.path}`}
            className={section.id === 'inicio' ? 'active' : ''}
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
