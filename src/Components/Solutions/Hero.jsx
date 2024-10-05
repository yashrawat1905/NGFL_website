// eslint-disable-next-line no-unused-vars
import React, {useState } from 'react';
import './Hero.css';
import Form from '../Form/Form';

// eslint-disable-next-line react/prop-types
const Hero = ({ title, description, backgroundImage, buttonText }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  return (
    <section className="sol-hero">
      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-description">{description}</p>
        <button className="hero-button" onClick={openForm} >{buttonText}</button>
      </div>
      <div
        className="hero-background"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      {isFormOpen && <Form closeForm={closeForm} />}
    </section>
  );
};

export default Hero;
