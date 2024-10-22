/* eslint-disable no-unused-vars */
import React,  {useEffect} from 'react'
import './Custom.css'
import automotive from '../../assets/industry_logo/automotive.webp';
import food from '../../assets/industry_logo/food.webp';
import energy from '../../assets/industry_logo/green-energy.webp';
import technology from '../../assets/industry_logo/technology.webp';
import healthcare from '../../assets/industry_logo/healthcare-industry.webp';
import fashion from '../../assets/industry_logo/fashion.webp'
import white from '../../assets/industry_logo/white.webp'
import retail from '../../assets/industry_logo/store.webp' 
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS CSS 

const Custom = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="custom-section">
      <p className="custom-title" data-aos="fade-up" data-aos-duration="1000">We have<strong> extensive experience</strong> across various industries</p>
      <div className="custom-icons">
        <div className="custom-row">
          <a href="/automotive" className="custom-item">
            <img src={automotive} alt="Automotive" className="custom-icon" data-aos="fade-right" data-aos-duration="1000"/>
            <p>Automotive</p>
          </a>
          <a href="/food" className="custom-item">
            <img src={food} alt="Food" className="custom-icon" data-aos="fade-right" data-aos-duration="1000"/>
            <p>Food</p>
          </a>
          <a href="/energy" className="custom-item">
            <img src={energy} alt="Energy" className="custom-icon" data-aos="fade-left" data-aos-duration="1000"/>
            <p>Energy</p>
          </a>
          <a href="/white-goods" className="custom-item">
            <img src={white} alt="white" className="custom-icon" data-aos="fade-left" data-aos-duration="1000"/>
            <p>White Goods</p>
          </a>
        </div>
        <div className="custom-row">
          <a href="/electronics" className="custom-item">
            <img src={technology} alt="Technology" className="custom-icon" data-aos="fade-right" data-aos-duration="1000"/>
            <p>Electronics</p>
          </a>
          <a href="/healthcare" className="custom-item">
            <img src={healthcare} alt="Healthcare" className="custom-icon" data-aos="fade-right" data-aos-duration="1000"/>
            <p>Healthcare</p>
          </a>
          <a href="/apparel-fashion" className="custom-item">
            <img src={fashion} alt="fashion" className="custom-icon" data-aos="fade-left" data-aos-duration="1000"/>
            <p>Apparel  & Fashion</p>
          </a>
          <a href="/retail" className="custom-item">
            <img src={retail} alt="retail" className="custom-icon" data-aos="fade-left" data-aos-duration="1000"/>
            <p>Retail</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Custom