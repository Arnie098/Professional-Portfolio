import React from 'react';
import './Css/Footer.css';

const Footer = () => {
  return (
    <footer id="footer" className="footer-section text-center py-4">
      <div className="container">
        <div className="social-icons">
          <a href="https://www.facebook.com/arnieque.amaba.7" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://github.com/Arnie098" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.instagram.com/arniequeamaba/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="mailto:kikoy12345amaba@gmail.com" aria-label="Email">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
        <p className="footer-copy">&copy; {new Date().getFullYear()} Arnieque Amaba. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
