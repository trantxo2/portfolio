import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-image">
          <img src="/profile2.png" alt="" />
        </div>

        <div className="about-content">
          <h1 className="content-title">
            Sobre <span>Mi</span>
          </h1>
          <h2>Desarrollador Frontend</h2>
          <p>
            ¡Saludos a todos! Mi nombre es Iñaki Trantxo Azcarate, y a mis 24
            años, me considero un entusiasta de la informática y un apasionado
            de la programación.
          </p>
          <p>
            Mi objetivo actual es sumergirme en emocionantes nuevos proyectos
            que puedan nutrir mi pasión, al mismo tiempo que expandir y
            enriquecer mis habilidades y conocimientos en el campo.
          </p>
          <p>
            Estoy ansioso por formar parte de equipos dinámicos y colaborativos,
            donde pueda aportar mi dedicación y creatividad para alcanzar metas
            ambiciosas.
          </p>
        </div>
      </div>
    </section>
  );
}
export default About;
