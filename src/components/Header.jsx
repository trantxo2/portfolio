import React, { useEffect } from 'react';
import './Header.css';

function Header() {
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

    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');
    menuIcon.onclick = () => {
      menuIcon.classList.toggle('bx-x');
      navbar.classList.toggle('active');
    };

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="header-container">
      <div className="header-title">
        <a href="#home">Portfolio.</a>
      </div>

      <i className="bx bx-menu" id="menu-icon"></i>

      <nav className="navbar">
        <a href="#home" className="active">
          Inicio
        </a>
        <a href="#about">Sobre mí</a>
        <a href="#contact">Contacto</a>
      </nav>
    </div>
  );
}

export default Header;
