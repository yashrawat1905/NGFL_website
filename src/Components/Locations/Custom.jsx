/* eslint-disable no-unused-vars */
import React from 'react'
import './Custom.css'
import automotive from '../../assets/industry_logo/automotive.png';
import food from '../../assets/industry_logo/food.png';
import energy from '../../assets/industry_logo/green-energy.png';
import technology from '../../assets/industry_logo/technology.png';
import healthcare from '../../assets/industry_logo/healthcare-industry.png';

const Custom = () => {
  return (
    <div className="custom-section">
      <h2 className="custom-title">Custom-fit eCommerce logistics for your line of business</h2>
      <div className="custom-icons">
        <div className="custom-row">
          <a href="/automotive" className="custom-item">
            <img src={automotive} alt="Automotive" className="custom-icon" />
            <p>Automotive</p>
          </a>
          <a href="/food" className="custom-item">
            <img src={food} alt="Food" className="custom-icon" />
            <p>Food</p>
          </a>
          <a href="/energy" className="custom-item">
            <img src={energy} alt="Energy" className="custom-icon" />
            <p>Energy</p>
          </a>
        </div>
        <div className="custom-row">
          <a href="/electronics" className="custom-item">
            <img src={technology} alt="Technology" className="custom-icon" />
            <p>Technology</p>
          </a>
          <a href="/healthcare" className="custom-item">
            <img src={healthcare} alt="Healthcare" className="custom-icon" />
            <p>Healthcare</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Custom