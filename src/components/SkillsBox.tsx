import React, { useState, useEffect } from 'react';
import './SkillsBox.css';

interface SkillsBoxProps {
  progressEndValue: number;
  children: React.ReactNode;
}

function SkillsBox({ progressEndValue, children }: SkillsBoxProps) {
  const [progressStartValue, setProgressStartValue] = useState<number>(0);
  const speed: number = 30;

  useEffect(() => {
    const circularProgress =
      document.querySelector<HTMLElement>('.progress-circle');
    const progressValue = document.querySelector<HTMLElement>('.progress');

    const progress = setInterval(() => {
      setProgressStartValue((prevValue) => {
        const newValue = prevValue + 1;
        if (newValue <= progressEndValue) {
          return newValue;
        }
        return prevValue;
      });

      if (progressValue !== null) {
        progressValue.textContent = `${progressStartValue}%`;
      }

      if (circularProgress !== null) {
        circularProgress.style.background = `conic-gradient(var(--main-color) ${
          progressStartValue * 3.6
        }deg, var(--bg-color) 0deg)`;
      }

      if (progressStartValue === progressEndValue) {
        clearInterval(progress);
      }
    }, speed);

    return () => {
      clearInterval(progress);
    };
  }, [progressStartValue, progressEndValue]);

  return <div className="skills-box">{children}</div>;
}

export default SkillsBox;
