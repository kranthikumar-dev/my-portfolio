import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Kranthi Kumar. All Rights Reserved.</p>
      <div className="social-links">
        <a href="https://github.com/kranthikumar-dev" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} />
        </a>
        <a href="www.linkedin.com/in/kranthi-kumar-2633a9341" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} />
        </a>
        <a href="https://twitter.com/kranthikumar" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={30} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
