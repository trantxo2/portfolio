import React, { useState, useEffect } from 'react';
import './Header.css';

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
          document
            .querySelector('.navbar a[href*=' + id + ']')
            .classList.add('active');
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

  return (
    <div className="header-container">
      <div className="header-title">
        <a href="#home">Portfolio.</a>
      </div>

      <i
        className={`bx ${menuActive ? 'bx-x' : 'bx-menu'}`}
        id="menu-icon"
        onClick={toggleMenu}
      ></i>

      <nav className={`navbar ${menuActive ? 'active' : ''}`}>
        <a href="#home" className="active" onClick={closeMenu}>
          Inicio
        </a>
        <a href="#about" onClick={closeMenu}>
          Sobre mí
        </a>
        <a href="#contact" onClick={closeMenu}>
          Contacto
        </a>
      </nav>
    </div>
  );
}

export default Header;
