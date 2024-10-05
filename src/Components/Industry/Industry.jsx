// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Industry.css';
import automotive from '../../assets/industry_logo/automotive.png';
import food from '../../assets/industry_logo/food.png';
import energy from '../../assets/industry_logo/green-energy.png';
import technology from '../../assets/industry_logo/technology.png';
import healthcare from '../../assets/industry_logo/healthcare-industry.png';
import fashion from '../../assets/industry_logo/fashion.png'
import white from '../../assets/industry_logo/white.png'
import retail from '../../assets/industry_logo/store.png' 

const Industry = () => {
  return (
    <div className="industry-section container">
      <p className="industry-title">We have extensive experience across various industries</p>
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
          <a href="/white-goods" className="industry-item">
            <img src={white} alt="white" className="industry-icon" />
            <p>White Goods</p>
          </a>
        </div>
        <div className="industry-row">
          <a href="/electronics" className="industry-item">
            <img src={technology} alt="Technology" className="industry-icon" />
            <p>Electronics</p>
          </a>
          <a href="/healthcare" className="industry-item">
            <img src={healthcare} alt="Healthcare" className="industry-icon" />
            <p>Healthcare</p>
          </a>
          <a href="/apparel-fashion" className="industry-item">
            <img src={fashion} alt="fashion" className="industry-icon" />
            <p>Apparel  & Fashion</p>

          </a>
          <a href="/retail" className="industry-item">
            <img src={retail} alt="retail" className="industry-icon" />
            <p>Retail</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Industry;
