// src/Components/SocialMediaIcons.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faLinkedin, faBehance, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './SocialMediaIcons.css'; // Import CSS for styling

const SocialMediaIcons = () => {
  return (
    <div className="social-media">
       <a href="https://wa.me/201029832925" target="_blank" rel="noopener noreferrer" className="whatsapp">
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>
      <a href="https://www.linkedin.com/in/fares-hossam-56036528b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="linkedin">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="https://github.com/fareshossamm" target="_blank" rel="noopener noreferrer" className="github">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href="https://www.behance.net/fareshossamm" target="_blank" rel="noopener noreferrer" className="behance">
        <FontAwesomeIcon icon={faBehance} />
      </a>

    </div>
  );
};

export default SocialMediaIcons;
