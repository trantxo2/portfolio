import React, { useEffect, useState } from 'react';
import './Home.css';
import DownloadButton from '../downloadButton';
import Typed from 'typed.js';
import { ReactComponent as LinkedInIcon } from '../../assets/linkedin.svg';
import { ReactComponent as GithubInIcon } from '../../assets/github.svg';
import { ReactComponent as InstagramInIcon } from '../../assets/instagram.svg';
import ProfileImage from '../../assets/Profile2.png';

function Home() {
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
        <div className="socialmedia-container">
          <a href="https://github.com/trantxo2">
            <GithubInIcon className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/inaki09">
            <LinkedInIcon className="icon" />
          </a>
          <a href="a">
            <InstagramInIcon className="icon" />
          </a>
        </div>
        <div className="downloadButton-container">
          <DownloadButton />
        </div>
      </div>

      <div className="image-container">
        <img src={ProfileImage} alt="" />
      </div>
    </section>
  );
}

export default Home;
