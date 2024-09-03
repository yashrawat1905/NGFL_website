// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png'; // Import your logo
import downArrow from '../../assets/down-arrow.png'; // Import your down arrow icon
import Form from '../Form/Form'; // Import the FormModal component

const Navbar = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="Logo" />
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item dropdown">
            <button className="dropdown-button">
              ABOUT US<img src={downArrow} alt="Down Arrow" className="arrow-icon" />
            </button>
            <div className="dropdown-content">
              <a href="/our-story">OUR STORY</a>
              <a href="/careers">CAREERS</a>
            </div>
          </li>
          <li className="navbar-item dropdown">
            <button className="dropdown-button">
              SOLUTIONS<img src={downArrow} alt="Down Arrow" className="arrow-icon" />
            </button>
            <div className="dropdown-content">
              <a href="/start-ups">START UPS</a>
              <a href="/msme">MSME</a>
              <a href="/enterprise">ENTERPRISE</a>
            </div>
          </li>
          <li className="navbar-item dropdown">
            <button className="dropdown-button">
              INDUSTRIES<img src={downArrow} alt="Down Arrow" className="arrow-icon" />
            </button>
            <div className="dropdown-content">
              <a href="/automotive">AUTOMOTIVE</a>
              <a href="/food-beverages">FOOD AND BEVERAGES</a>
              <a href="/healthcare">HEALTHCARE</a>
              <a href="/electronics">ELECTRONICS</a>
              <a href="/energy">ENERGY</a>
              <a href="/apparel-fashion">APPAREL FASHION</a>
              <a href="/white-goods">WHITE GOODS</a>
              <a href="/retail">RETAIL</a>
            </div>
          </li>
          <li className="navbar-item dropdown">
            <button className="dropdown-button">
              RESOURCES<img src={downArrow} alt="Down Arrow" className="arrow-icon" />
            </button>
            <div className="dropdown-content">
              <a href="/glossary">GLOSSARY</a>
              <a href="/case-studies">CASE STUDIES</a>
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
