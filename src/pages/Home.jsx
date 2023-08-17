import React from 'react';
import './Home.css';
import DownloadButton from '../components/downloadButton';

function Home() {
  return (
    <div className="home-container">
      <div className="main-container">
        <div className="info-container">
          <h2>¡Hola! Me llamo </h2>
          <h1>Iñaki Trantxo</h1>
          <div className="info-details-container">
            <h2>Y soy </h2>
            <h2 className="info-details-animated-text">
              Desarrollador Frontend
            </h2>
          </div>
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
              <a href="https://www.linkedin.com/in/inaki09">
                <img src="/linkedin.svg" alt="" />
              </a>
            </div>
            <div className="aqua-icon">
              <img src="/instagram.svg" alt="" />
            </div>
          </div>
          <DownloadButton />
        </div>
        <div className="image-container">
          <img className="profile-image" src="/profile.png" alt=""></img>
        </div>
      </div>
    </div>
  );
}
export default Home;
