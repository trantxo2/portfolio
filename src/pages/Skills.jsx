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
          <i class="bx bxl-react"></i>
          <h2>React</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            aspernatur, accusantium vitae praesentium dolorem earum placeat
            eveniet animi a, at cum itaque. Minima atque distinctio optio, sunt
            rerum facilis laudantium.
          </p>
          <button>Saber más</button>
        </div>

        <div className="skills-box">
          <i class="bx bxl-css3"></i> <h2>CSS3</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            aspernatur, accusantium vitae praesentium dolorem earum placeat
            eveniet animi a, at cum itaque. Minima atque distinctio optio, sunt
            rerum facilis laudantium.
          </p>
          <button>Saber más</button>
        </div>

        <div className="skills-box">
          <i class="bx bxl-html5"></i>
          <h2>HTML5</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            aspernatur, accusantium vitae praesentium dolorem earum placeat
            eveniet animi a, at cum itaque. Minima atque distinctio optio, sunt
            rerum facilis laudantium.
          </p>
          <button>Saber más</button>
        </div>
      </div>
    </section>
  );
}
export default Skills;
