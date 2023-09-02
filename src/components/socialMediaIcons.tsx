import React from 'react';
import './socialMediaIcons.css';

const SocialMediaIcons = () => {
  return (
    <div className="socialmedia-container">
      <a href="https://github.com/trantxo2">
        <i className="bx bxl-github" id="icon"></i>
      </a>
      <a href="https://www.linkedin.com/in/inaki09">
        <i className="bx bxl-linkedin-square" id="icon"></i>
      </a>
      <a href="#">
        <i className="bx bxl-instagram" id="icon"></i>
      </a>
    </div>
  );
};
export default SocialMediaIcons;
