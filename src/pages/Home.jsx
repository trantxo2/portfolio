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
            <div id="media-icons">
              <a href="https://github.com/trantxo2">
                <i className="bx bxl-github"></i>
              </a>
            </div>
            <div id="media-icons">
              <a href="https://www.linkedin.com/in/inaki09">
                <i className="bx bxl-linkedin"></i>
              </a>
            </div>
            <div id="media-icons">
              <a href="https://github.com/trantxo2">
                <i className="bx bxl-instagram"></i>
              </a>
            </div>
          </div>
          <div className="downloadButton-container">
            <DownloadButton />
          </div>
        </div>
        <div className="image-container">
          <img className="profile-image" src="/profile.png" alt=""></img>
        </div>
      </div>
    </div>
  );
}
export default Home;
