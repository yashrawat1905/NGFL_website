/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import './Hero.css';
import Form from '../Form/Form';

const Hero = () => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [speed, setSpeed] = useState(100);
  const [isPaused, setIsPaused] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false); // Add this state
  const textToType = 'Logistics Expertise';
  const [isFormOpen, setIsFormOpen] = useState(false);
  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  useEffect(() => {
    let intervalId = setInterval(() => {
      if (isPaused) {
        return;          
      }
      if (index < textToType.length) {  
        setText(textToType.slice(0, index + 1));
        setIndex(index + 1);
      } else {
        if (!hasAnimated) { // Check if the animation has already been played
          setIsPaused(true);
          setTimeout(() => {
            setIsPaused(false);
            setText('');
            setIndex(0);
            setHasAnimated(true); // Set hasAnimated to true after the first animation
          }, 5000);
        }
      }
    }, speed);
    return () => clearInterval(intervalId);
  }, [index, speed, text, textToType, isPaused, hasAnimated]);


  return (
    <div className='hero container'>
      <div className='hero-text'>
        <p>
          <span className='highlight'>Achieve your</span><br />
          <span className='highlight'>goals with our</span><br />
          <span className='highlight'>{text}</span><br />
          <span className='sub'>Unlock seamless logistics with tailored 3PL solutions, ensuring optimized operations to drive your business growth, whether you are a </span>
          <span className='sub'>startup, <br/>an SME, or an established enterprise. </span><br />
        </p>
        <button className='btn' onClick={openForm}>GET A QUOTE</button>
      </div>
      {/* Contact Form Modal */}
      {isFormOpen && <Form closeForm={closeForm} />}
    </div>
    
  );
};

export default Hero;