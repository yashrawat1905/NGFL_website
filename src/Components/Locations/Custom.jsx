/* eslint-disable no-unused-vars */
import React from 'react'
import './Custom.css'
import automotive from '../../assets/industry_logo/automotive.png';
import food from '../../assets/industry_logo/food.png';
import energy from '../../assets/industry_logo/green-energy.png';
import technology from '../../assets/industry_logo/technology.png';
import healthcare from '../../assets/industry_logo/healthcare-industry.png';
import fashion from '../../assets/industry_logo/fashion.png'
import white from '../../assets/industry_logo/white.png'
import retail from '../../assets/industry_logo/store.png' 

const Custom = () => {
  return (
    <div className="custom-section">
      <p className="custom-title"><strong>Custom-fit eCommerce logistics</strong> for your line of business</p>
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
          <a href="/white-goods" className="custom-item">
            <img src={white} alt="white" className="custom-icon" />
            <p>White Goods</p>
          </a>
        </div>
        <div className="custom-row">
          <a href="/electronics" className="custom-item">
            <img src={technology} alt="Technology" className="custom-icon" />
            <p>Electronics</p>
          </a>
          <a href="/healthcare" className="custom-item">
            <img src={healthcare} alt="Healthcare" className="custom-icon" />
            <p>Healthcare</p>
          </a>
          <a href="/apparel-fashion" className="custom-item">
            <img src={fashion} alt="fashion" className="custom-icon" />
            <p>Apparel  & Fashion</p>
          </a>
          <a href="/retail" className="custom-item">
            <img src={retail} alt="retail" className="custom-icon" />
            <p>Retail</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Custom