// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Hero.css'; // For custom styles

const Hero = ({ mainTitle, backgroundImage}) => {
  return (
    <div 
      className="hero-section" 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="hero-overlay">
        <div className="hero-content">
          <h3></h3>  {/* Static small title */}
         {/* <h1>{mainTitle}</h1>  {/* Dynamic main title 
          <a href='/' className="btn">
            GET STARTED
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
