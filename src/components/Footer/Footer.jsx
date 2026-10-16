import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-divider" />
      <div className="footer-social">
        <a href="https://github.com/rit3ssh" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/ritesh-sahani-548a4219a/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
      </div>
      <p>© {new Date().getFullYear()} Ritesh Sahani — Built with care.</p>
    </footer>
  );
};

export default Footer;
