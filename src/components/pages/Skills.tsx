import React from 'react';
import './Skills.css';

function Skills() {
  return (
    <section id="skills" className="skills">
      <h1 className="title">
        Mis <span>Habilidades</span>
      </h1>

      <div className="skills-container">
        <div className="skills-box">
          <i className="bx bxl-react"></i>
          <h2>React</h2>
          <p></p>
          <button>Saber más</button>
        </div>

        <div className="skills-box">
          <i className="bx bxl-css3"></i> <h2>CSS3</h2>
          <p></p>
          <button>Saber más</button>
        </div>

        <div className="skills-box">
          <i className="bx bxl-html5"></i>
          <h2>HTML5</h2>
          <p></p>
          <button>Saber más</button>
        </div>
      </div>
    </section>
  );
}
export default Skills;
