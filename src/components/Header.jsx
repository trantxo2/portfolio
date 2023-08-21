import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const location = useLocation();

  let menuIcon = document.querySelector('#menu-icon');
  let navbar = document.querySelector('.navbar');

  menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
  };

  return (
    <div className="header-container">
      <div className="header-title">
        <a href="#home">Portfolio.</a>
      </div>

      <i className="bx bx-menu" id="menu-icon"></i>

      <nav className="navbar">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
          Inicio
        </Link>
        <Link
          to="/about"
          className={location.pathname === '/about' ? 'active' : ''}
        >
          Sobre Mi
        </Link>
        <Link
          to="/contact"
          className={location.pathname === '/contact' ? 'active' : ''}
        >
          Contacto
        </Link>
        {/* <a href="#proyects">Proyectos</a> */}
      </nav>
    </div>
  );
}
export default Header;
