import React from 'react';
import './Home.css';
import DownloadButton from '../components/downloadButton';

function Home() {
  return (
    <section id="home" className="home">
      <div className="info-container">
        <h2>¡Hola! Me llamo </h2>
        <h1>Iñaki Trantxo</h1>
        <div className="info-details-container">
          <h2>
            Y soy <span> Desarrollador Frontend</span>
          </h2>
        </div>
        <p>
          Futuro desarrollador frontend junior y amante del diseño web. Me
          emociona convertir ideas en código a través de HTML, CSS y JavaScript
          para crear experiencias geniales. ¡Tengo muchas ganas para aprender y
          crecer en el mundo digital!
        </p>
        <div className="socialmedia-container">
          <a href="https://github.com/trantxo2">
            <img src="/github.svg" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/inaki09">
            <img src="/linkedin.svg" alt="" />
          </a>
          <a href="a">
            <img src="/instagram.svg" alt="" />
          </a>
        </div>
        <div className="downloadButton-container">
          <DownloadButton />
        </div>
      </div>
      <div className="image-container">
        <img className="home-image" src="/profile.png" alt=""></img>
      </div>
    </section>
  );
}
export default Home;
