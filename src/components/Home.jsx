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
        </div>
        <div className="image-container">
          <img src="/avatar.png" alt=""></img>
        </div>
      </div>
    </div>
  );
}
export default Home;
