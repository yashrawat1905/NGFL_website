/* eslint-disable no-unused-vars */
import React from 'react';
import './Footer.css'; 
import footer_logo from '../../assets/footer_logo/footer.webp';
import linkedin from '../../assets/footer_logo/linkedin.webp';
import instagram from '../../assets/footer_logo/instagram.webp';
import facebook from '../../assets/footer_logo/facebook.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <img src={footer_logo} alt="Company Logo" />
          {/* Add email, phone and external link here */}
          <div className='contact-info'>
            <p>Mail us at :<a href='mailto:info@nagarkot.co.in'> info@nagarkot.co.in</a></p>
            <p>Call us at :<a href='tel:+91 74000 48450'> +91 74000 48450</a></p>
            <p>Check out more of our offerings on <a href='https://nagarkot.co.in/' target='_blank' rel='nopener noreferrer'>  Nagarkot.co.in</a></p>
          </div>
        </div>

        

        <div className="footer-sections">
          <div className="footer-column">
            <h3>Solutions</h3>
            <ul>
              <li><a href="/solutions/startups">Startups</a></li>
              <li><a href="/solutions/msme">MSME</a></li>
              <li><a href="/solutions/enterprises">Enterprises</a></li>
            </ul>
          </div>      
          <div className="footer-column">
            <h3>Resources</h3>
            <ul>
              <li><a href="/resources/blogs">Blogs</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>About Us</h3>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-grid">
          <div className="grid-column">
            <h3>Locations</h3>
            <ul className="grid">
              {['Gurgaon', 'Ahmedabad', 'Bhiwandi', 'Bengaluru', 'Chennai', 'Delhi', 'Hyderabad', 'Kolkata', 'Lucknow', 'Mumbai', 'Pune'].map(location => (
                <li key={location}><a href={`/locations/${location.toLowerCase().replace(/\s+/g, '-')}`}>{location}</a></li>
              ))}
            </ul>
          </div>
          <div className="grid-column">
            <h3>Industries</h3>
            <ul className="grid">
              {['Automotive', 'Healthcare', 'Electronics', 'Food And Beverages', 'Energy', 'Retail', 'White Goods', 'Apparel And Fashion'].map(industry => (
                <li key={industry}><a href={`/industries/${industry.toLowerCase().replace(/\s+/g, '-')}`}>{industry}</a></li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Thin Line */}
      <hr className="footer-divider" />

      {/* Terms, Privacy, and Social Media */}
      <div className="footer-terms-social">
        <div className="footer-terms">
          <a href="/privacy-policy">Privacy Policy</a>
        </div>
        <div className="footer-social">
          <a href="https://www.linkedin.com/company/nagarkot/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="LinkedIn" /></a>
          <a href="https://www.instagram.com/nagarkotgroup?igsh=MWlteW9nYTlocDA5ZA=="><img src={instagram} alt="Instagram" /></a>
          <a href="https://www.facebook.com/nagarkotgroup?mibextid=LQQJ4d"><img src={facebook} alt="Facebook" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
