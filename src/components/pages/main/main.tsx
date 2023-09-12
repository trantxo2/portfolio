import React from 'react';
import './main.css';
import { Fade } from 'react-awesome-reveal';

export const Main = () => {
  return (
    <section id="main" className="main">
      <div className="main-container">
        <Fade cascade>
          <h1 className="title">
            <span>Iñaki Trantxo</span>
          </h1>
          <h2>
            <span>Desarrollador</span> FrontEnd
          </h2>
        </Fade>
      </div>
    </section>
  );
};
