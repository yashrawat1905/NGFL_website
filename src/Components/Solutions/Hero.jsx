// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Hero.css';

// eslint-disable-next-line react/prop-types
const Hero = ({ title, description, backgroundImage, buttonText }) => {
  return (
    <section className="sol-hero">
      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-description">{description}</p>
        <button className="hero-button">{buttonText}</button>
      </div>
      <div
        className="hero-background"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
    </section>
  );
};

export default Hero;
