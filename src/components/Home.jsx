import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="main-container">
        <div className="info-container">
          <h2>¡Hola! Me llamo </h2>
          <h1>Iñaki Trantxo</h1>
          <h2>Y soy Desarrollador Frontend</h2>
          <p>
            lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
            ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
          </p>
          <div className="socialmedia-container">
            <div className="aqua-icon">
              <a href="https://github.com/trantxo2">
                <img src="/github.svg" alt="" />
              </a>
            </div>
            <div className="aqua-icon">
              <img src="/linkedin.svg" alt="" />
            </div>
            <div className="aqua-icon">
              <img src="/instagram.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="image-container">
          <img src="/avatar.png" alt=""></img>
        </div>
      </div>
    </div>
  );
}
export default Home;
