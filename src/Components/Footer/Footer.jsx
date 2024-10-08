/* eslint-disable no-unused-vars */
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
            <ul>
              <li><a href="/locations/gurgaon">Warehouse In Gurgaon</a></li>
              <li><a href="/locations/gujarat">Warehouse In Gujarat</a></li>
              <li><a href="/locations/chennai">Warehouse In Chennai</a></li>
              <li><a href="/locations/bengaluru">Warehouse In Bengaluru</a></li>
              <li><a href="/locations/hyderabad">Warehouse In Hyderabad</a></li>
              <li><a href="/locations/mumbai">Warehouse In Mumbai</a></li>
              <li><a href="/locations/kolkata">Warehouse In Kolkata</a></li>
              <li><a href="/locations/delhi">Warehouse In Delhi</a></li>
              <li><a href="/locations/pune">Warehouse In Pune</a></li>
              <li><a href="/locations/lucknow">Warehouse In Lucknow</a></li>
              <li><a href="/locations/bhiwandi">Warehouse In Bhiwandi</a></li>
              {/* Add other location links as needed */}
            </ul>
          </div>

          <div className="footer-section">
            <h4>About Us</h4>
            <ul>
              <li><a href="/our-story">Our Story</a></li>
              <li><a href="/careers">Careers</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Solutions</h4>
            <ul>
              <li><a href="/start-ups">Startups</a></li>
              <li><a href="/msme">MSME</a></li>
              <li><a href="/enterprise">Enterprise</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Industries</h4>
            <ul>
              <li><a href="/automotive">AUTOMOTIVE</a></li>
              <li><a href="/food">FOOD AND BEVERAGES</a></li>
              <li><a href="/healthcare">HEALTHCARE</a></li>
              <li><a href="/electronics">ELECTRONICS</a></li>
              <li><a href="/energy">ENERGY</a></li>
              <li><a href="/apparel-fashion">APPAREL FASHION</a></li>
              <li><a href="/white-goods">WHITE GOODS</a></li>
              <li><a href="/retail">RETAIL</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li><a href="/glossary">Glossary</a></li>
              <li><a href="/blogs">Blogs</a></li>
            </ul>
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