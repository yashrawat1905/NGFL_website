/* eslint-disable no-unused-vars */
import React from 'react';
import './CaseStudy.css';
import image from '../../assets/careers/image.png';


const CaseStudy = () => {

  return (
    <div className="case-study-container">
      <p className="case-study-heading"><strong>CASE STUDY</strong></p>
      <div className="image-container">
        <img src={image} alt="case study" className="case-background-image" />
        </div>
    </div>
  );
};

export default CaseStudy;
