// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Footer.css';
import linkedin from '../../assets/linkedin.png';
import instagram from '../../assets/instagram.png';
import youtube from '../../assets/youtube.png';
import footer_logo from '../../assets/footer.jpg'; // Replace with your actual logo path

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img src={footer_logo} alt="Company Logo" className="footer-logo" />
        <div className="footer-links">
          <a href="/terms">Terms & Conditions</a>
          <a href="/privacy">Privacy Policy</a>
        </div>
      </div>
      <div className="footer-right">
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="LinkedIn" className="social-icon" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={instagram} alt="Instagram" className="social-icon" />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <img src={youtube} alt="YouTube" className="social-icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
