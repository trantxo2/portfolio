import './Home.css';

import SocialMediaIcons from 'components/socialMediaIcons';
import React, { useEffect, useState } from 'react';
import Typed from 'typed.js';

import ProfileImage from '../../../assets/Profile2.png';
import DownloadButton from '../../downloadButton';

export const Home = () => {
  const [typedText] = useState('');
  const textElement = React.useRef(null);

  useEffect(() => {
    const typed = new Typed(textElement.current, {
      strings: ['Junior', 'Frontend Developer'],
      typeSpeed: 50,
      onComplete: () => {
        // You can set a delay before erasing if needed
        setTimeout(() => {
          typed.reset(); // Reset typed instance to play the typing effect again
        }, 2000); // Adjust the delay as needed
      },
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="home" className="home">
      <div className="info-container">
        <h2>¡Hola! Me llamo </h2>
        <h1>Iñaki Trantxo,</h1>
        <div className="info-details-container">
          <h2>
            Y soy <span ref={textElement} key={typedText} />
          </h2>
          <p>
            Futuro desarrollador frontend junior y amante del diseño web. Me
            emociona convertir ideas en código a través de HTML, CSS y
            JavaScript para crear experiencias geniales. ¡Tengo muchas ganas
            para aprender y crecer en el mundo digital!
          </p>
        </div>

        <SocialMediaIcons />

        <div className="downloadButton-container">
          <DownloadButton />
        </div>
      </div>

      <div className="image-container">
        <img src={ProfileImage} alt="" />
      </div>
    </section>
  );
};
