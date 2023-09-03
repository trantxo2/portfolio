import React, { useState, useEffect } from 'react';
import './Skills.css';

export const Skills = () => {
  const skillsData = [
    { name: 'React', progressEndValue: 40 },
    { name: 'HTML5', progressEndValue: 80 },
    { name: 'CSS3', progressEndValue: 70 },
  ];

  const speed: number = 30;

  const [progressValues, setProgressValues] = useState<number[]>(
    skillsData.map((skill) => 0),
  );

  useEffect(() => {
    const progressElements =
      document.querySelectorAll<HTMLElement>('.progress');
    const circularProgressElements =
      document.querySelectorAll<HTMLElement>('.progress-circle');

    const intervals = skillsData.map((skill, index) => {
      const progress = setInterval(() => {
        setProgressValues((prevValues) => {
          const newValues = [...prevValues];
          if (newValues[index] < skill.progressEndValue) {
            newValues[index]++;
          }
          return newValues;
        });

        if (progressElements[index] !== null) {
          progressElements[index].textContent = `${progressValues[index]}%`;
        }

        if (circularProgressElements[index] !== null) {
          circularProgressElements[
            index
          ].style.background = `conic-gradient(var(--main-color) ${
            progressValues[index] * 3.6
          }deg, var(--bg-color) 0deg)`;
        }

        if (progressValues[index] === skill.progressEndValue) {
          clearInterval(progress);
        }
      }, speed);

      return progress;
    });

    return () => {
      intervals.forEach((interval) => clearInterval(interval));
    };
  }, [progressValues]);

  return (
    <section id="skills" className="skills">
      <h1 className="title">
        Mis <span>Habilidades</span>
      </h1>

      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div className="skills-box" key={index}>
            <i className={`bx bxl-${skill.name.toLowerCase()}`}></i>
            <h2>{skill.name}</h2>
            <div className="progress-circle">
              <div className="progress"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
