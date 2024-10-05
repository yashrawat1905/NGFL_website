// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Footer.css';
import linkedin from '../../assets/footer_logo/linkedin.png';
import instagram from '../../assets/footer_logo/instagram.png';
import youtube from '../../assets/footer_logo/youtube.png';
import footer_logo from '../../assets/footer_logo/footer.jpg'; // Replace with your actual logo path

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <img src={footer_logo} alt="Company Logo" className="footer-logo" />
          <div className="footer-links">
            <a href="/terms">Terms & Conditions</a>
            <a href="/privacy">Privacy Policy</a>
          </div>
        </div>

        <div className="footer-menu">

          <div className="footer-section">
            <h4>Locations</h4>
            <a href="/locations/gurgaon">Warehouse In Gurgaon</a>
            <a href="/locations/gujarat">Warehouse In Gujarat</a>
            <a href="/locations/chennai">Warehouse In Chennai</a>
            <a href="/locations/bengaluru">Warehouse In Bengaluru</a>
            <a href="/locations/hyderabad"> Warehouse In Hyderabad</a>
            <a href="/locations/mumbai"> Warehouse In Mumbai</a>
            <a href="/locations/kolkata"> Warehouse In Kolkata</a>
            <a href="/locations/delhi"> Warehouse In Delhi</a>
            <a href="/locations/pune"> Warehouse In Pune</a>
            <a href="/locations/lucknow">Warehouse In Lucknow</a>
            <a href="/locations/bhiwandi">Warehouse In Bhiwandi</a>
            {/* Add other location links as needed */}
          </div>

          <div className="footer-section">
            <h4>About Us</h4>
            <a href="/our-story">Our Story</a>
            <a href="/careers">Careers</a>
          </div>

          <div className="footer-section">
            <h4>Solutions</h4>
            <a href="/start-ups">Startups</a>
            <a href="/msme">MSME</a>
            <a href="/enterprise">Enterprise</a>
          </div>

          <div className="footer-section">
            <h4>Industries</h4>
            <a href="/automotive">AUTOMOTIVE</a>
              <a href="/food">FOOD AND BEVERAGES</a>
              <a href="/healthcare">HEALTHCARE</a>
              <a href="/electronics">ELECTRONICS</a>
              <a href="/energy">ENERGY</a>
              <a href="/apparel-fashion">APPAREL FASHION</a>
              <a href="/white-goods">WHITE GOODS</a>
              <a href="/retail">RETAIL</a>
          </div>

          <div className="footer-section">
            <h4>Resources</h4>
            <a href="/glossary">Glossary</a>
            <a href="/blogs">Blogs</a>
          </div>
        </div>

        <div className="footer-right">
          <a href="https://www.linkedin.com/company/nagarkot/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" className="social-icon" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="Instagram" className="social-icon" />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <img src={youtube} alt="YouTube" className="social-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
