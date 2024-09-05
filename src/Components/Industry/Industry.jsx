// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Industry.css';
import automotive from '../../assets/automotive.png';
import food from '../../assets/food.png';
import energy from '../../assets/green-energy.png';
import technology from '../../assets/technology.png';
import healthcare from '../../assets/healthcare-industry.png';

const Industry = () => {
  return (
    <div className="industry-section">
      <h2 className="industry-title">We have extensive experience across various industries</h2>
      <div className="industry-icons">
        <div className="industry-row">
          <a href="/automotive" className="industry-item">
            <img src={automotive} alt="Automotive" className="industry-icon" />
            <p>Automotive</p>
          </a>
          <a href="/food" className="industry-item">
            <img src={food} alt="Food" className="industry-icon" />
            <p>Food</p>
          </a>
          <a href="/energy" className="industry-item">
            <img src={energy} alt="Energy" className="industry-icon" />
            <p>Energy</p>
          </a>
        </div>
        <div className="industry-row">
          <a href="/electronics" className="industry-item">
            <img src={technology} alt="Technology" className="industry-icon" />
            <p>Technology</p>
          </a>
          <a href="/healthcare" className="industry-item">
            <img src={healthcare} alt="Healthcare" className="industry-icon" />
            <p>Healthcare</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Industry;
