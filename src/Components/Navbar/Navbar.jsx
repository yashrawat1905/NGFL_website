// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.webp'; // Import your logo
import downArrow from '../../assets/down-arrow.webp'; // Import your down arrow icon
import Form from '../Form/Form'; // Import the FormModal component

const Navbar = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // For toggling mobile menu
  const [sticky, setSticky] = useState(false);

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 80 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen); // Toggle menu visibility

  return (
    <>
      <nav className={`navbar ${sticky ? 'dark-nav' : ''} ${menuOpen ? 'open' : ''}`}>
        <div className="navbar-logo">
          <a href='/'>
            <img src={logo} alt="Logo" />
          </a>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="hamburger" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <ul className={`navbar-menu ${menuOpen ? 'show-menu' : ''}`}>
          <li className="navbar-item dropdown">
            <button className="dropdown-button">
              ABOUT US<img src={downArrow} alt="Down Arrow" className="arrow-icon" />
            </button>
            <div className="dropdown-content">
              <a href="/our-story">OUR STORY</a>
            </div>
          </li>

          <li className='navbar-item dropdown'>
            <button className="dropdown-button">
              LOCATIONS <img src={downArrow} alt="Down Arrow" className="arrow-icon" />
            </button>
            <div className='dropdown-content'>
              <a href="/locations/gurgaon">GURGAON</a>
              <a href="/locations/gujarat">AHMEDABAD</a>
              <a href="/locations/bhiwandi">BHIWANDI</a>
              <a href="/locations/bengaluru">BENGALURU</a>
              <a href="/locations/chennai">CHENNAI</a>
              <a href="/locations/delhi">DELHI</a>
              <a href="/locations/hyderabad">HYDERABAD</a>
              <a href="/locations/kolkata">KOLKATA</a>
              <a href="/locations/lucknow">LUCKNOW</a>
              <a href="/locations/mumbai">MUMBAI</a>
              <a href="/locations/pune">PUNE</a>
            </div>
          </li>

          <li className="navbar-item dropdown">
            <button className="dropdown-button">
              SOLUTIONS<img src={downArrow} alt="Down Arrow" className="arrow-icon" />
            </button>
            <div className="dropdown-content">
              <a href="/start-ups">STARTUPS</a>
              <a href="/msme">MSME</a>
              <a href="/enterprise">ENTERPRISE</a>
            </div>
          </li>

          <li className="navbar-item dropdown">
            <button className="dropdown-button">
              INDUSTRIES<img src={downArrow} alt="Down Arrow" className="arrow-icon" />
            </button>
            <div className="dropdown-content">
              <a href="/apparel-fashion">APPAREL FASHION</a>
              <a href="/automotive">AUTOMOTIVE</a>
              <a href="/electronics">ELECTRONICS</a>
              <a href="/energy">ENERGY</a>
              <a href="/food">FOOD AND BEVERAGES</a>
              <a href="/healthcare">HEALTHCARE</a>
              <a href="/retail">RETAIL</a>
              <a href="/white-goods">WHITE GOODS</a>
            </div>
          </li>

          <li className="navbar-item dropdown">
            <button className="dropdown-button">
              RESOURCES<img src={downArrow} alt="Down Arrow" className="arrow-icon" />
            </button>
            <div className="dropdown-content">
              <a href="/glossary">GLOSSARY</a>
              <a href="/blogs">BLOGS</a>
            </div>
          </li>

          <li className="navbar-item">
            <button className="btn" onClick={openForm}>CONTACT US</button>
          </li>
        </ul>
      </nav>

      {isFormOpen && <Form closeForm={closeForm} />}
    </>
  );
};

export default Navbar;
