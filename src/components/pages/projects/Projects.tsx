import './Projects.css';
import React from 'react';
import FlutterApp from '../../../assets/Flutter_app.png';
import GiffApp from '../../../assets/GiffApp.png';
import PokeApi from '../../../assets/PokeApi.png';

export const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h1 className="title">
        Mis <span>Proyectos</span>
      </h1>

      <div className="carrusel">
        <div className="item-carrusel" id="item-carrusel-1">
          <div className="photo-carrusel" id="photo-carrusel-1">
            <div className="project-box">
              <img src={FlutterApp} alt="" />
              <div className="project-layer">
                <h3>SM Institute Flutter App </h3>
                <p>
                  App de Flutter para el "Saint Martin's Institute of Higher
                  Education", para realizar un seguimiento automático de la
                  asistencia de los estudiantes en su lección a través de
                  bluetooth y mostrar su horario. Además incluye su propia
                  mensajería.
                </p>
                <a href="https://github.com/lewinpauli/PublicFlutterAppSMI">
                  <i className="bx bx-link-external"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="arrows-carrusel">
            <a href="#item-carrusel-3">
              <i className="bx bx-chevron-left"></i>
            </a>
            <a href="#item-carrusel-2">
              <i className="bx bx-chevron-right"></i>
            </a>
          </div>
        </div>

        <div className="item-carrusel" id="item-carrusel-2">
          <div className="photo-carrusel" id="photo-carrusel-2">
            <div className="project-box">
              <img src={GiffApp} alt="" />
              <div className="project-layer">
                <h3>GUIFAFFINITY </h3>
                <p>
                  App Buscador de Gifs creada con React y Typescript.
                  Desarrollada mediante testing. Incluye su propio backend.
                </p>
                <a href="https://github.com/IvanSolaDelgado/bikoVehicular">
                  <i className="bx bx-link-external"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="arrows-carrusel">
            <a href="#item-carrusel-1">
              <i className="bx bx-chevron-left"></i>
            </a>
            <a href="#item-carrusel-3">
              <i className="bx bx-chevron-right"></i>
            </a>
          </div>
        </div>

        <div className="item-carrusel" id="item-carrusel-3">
          <div className="photo-carrusel" id="photo-carrusel-3">
            <div className="project-box">
              <img src={PokeApi} alt="" />
              <div className="project-layer">
                <h3>POKE API </h3>
                <p>
                  Clásica Api para buscar Pokemons creada con JavaScript, HTML y
                  CSS.
                </p>
                <a href="https://github.com/trantxo2/pokedex-api">
                  <i className="bx bx-link-external"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="arrows-carrusel">
            <a href="#item-carrusel-2">
              <i className="bx bx-chevron-left"></i>
            </a>
            <a href="#item-carrusel-1">
              <i className="bx bx-chevron-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
