/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './CaseStudy.css';
import image from '../../assets/careers/image.webp';
import image1 from "../../assets/careers/image1.webp";
import image2 from "../../assets/careers/image2.webp";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Importing arrow icons from react-icons

const images = [image, image1, image2]; // Array of images

const CaseStudy = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // State to track the current image index

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length); // Move to the next image
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex === 0 ? images.length - 1 : prevIndex - 1) // Move to the previous image
    );
  };

  return (
    <div className="case-study-container">
      <p className="case-study-heading"><strong>Case Study</strong></p>
      <div className="image-carousel">
        <FaArrowLeft className="arrow prev-arrow" onClick={handlePrevImage} /> {/* Left arrow */}
        <img
          src={images[currentImageIndex]} // Display the current image
          alt="case study"
          className="case-background-image"
        />
        <FaArrowRight className="arrow next-arrow" onClick={handleNextImage} /> {/* Right arrow */}
      </div>
    </div>
  );
};

export default CaseStudy;
