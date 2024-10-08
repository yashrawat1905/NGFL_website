/* eslint-disable no-unused-vars */
import React, {useEffect} from 'react';
import './Industry.css';
import automotive from '../../assets/industry_logo/automotive.png';
import food from '../../assets/industry_logo/food.png';
import energy from '../../assets/industry_logo/green-energy.png';
import technology from '../../assets/industry_logo/technology.png';
import healthcare from '../../assets/industry_logo/healthcare-industry.png';
import fashion from '../../assets/industry_logo/fashion.png';
import white from '../../assets/industry_logo/white.png';
import retail from '../../assets/industry_logo/store.png';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS CSS 

const Industry = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="industry-section container">
      <p className="industry-title" data-aos="fade-up" data-aos-duration="1000">We have extensive experience across various industries</p>
      <div className="industry-icons">
        <div className="industry-row">
          <a href="/automotive" className="industry-item">
            <img src={automotive} alt="Automotive" className="industry-icon" data-aos="fade-right" data-aos-duration="1000"/>
            <p>Automotive</p>
          </a>
          <a href="/food" className="industry-item">
            <img src={food} alt="Food" className="industry-icon" data-aos="fade-right" data-aos-duration="1000"/>
            <p>Food</p>
          </a>
          <a href="/energy" className="industry-item">
            <img src={energy} alt="Energy" className="industry-icon" data-aos="fade-left" data-aos-duration="1000"/>
            <p>Energy</p>
          </a>
          <a href="/white-goods" className="industry-item">
            <img src={white} alt="white" className="industry-icon" data-aos="fade-left" data-aos-duration="1000"/>
            <p>White Goods</p>
          </a>
        </div>
        <div className="industry-row">
          <a href="/electronics" className="industry-item">
            <img src={technology} alt="Technology" className="industry-icon" data-aos="fade-right" data-aos-duration="1000"/>
            <p>Electronics</p>
          </a>
          <a href="/healthcare" className="industry-item">
            <img src={healthcare} alt="Healthcare" className="industry-icon" data-aos="fade-right" data-aos-duration="1000"/>
            <p>Healthcare</p>
          </a>
          <a href="/apparel-fashion" className="industry-item">
            <img src={fashion} alt="fashion" className="industry-icon" data-aos="fade-left" data-aos-duration="1000"/>
            <p>Apparel  & Fashion</p>

          </a>
          <a href="/retail" className="industry-item">
            <img src={retail} alt="retail" className="industry-icon" data-aos="fade-left" data-aos-duration="1000"/>
            <p>Retail</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Industry;
