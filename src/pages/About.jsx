import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-image">
          <img src="/profile.png" alt="" />
        </div>

        <div className="about-content">
          <h1 className="content-title">
            Sobre <span>Mi</span>
          </h1>
          <h2>Desarrollador Frontend</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            quo libero ea, consequatur accusamus est, consectetur iure omnis
            labore unde soluta ratione sit culpa quidem expedita aliquam
            inventore? Quisquam, exercitationem.
          </p>
        </div>
      </div>
    </section>
  );
}
export default About;
