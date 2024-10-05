/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import './Library.css';
import image1 from '../../assets/locations/image1.jpg';
import image2 from '../../assets/locations/image2.jpg';
import image3 from '../../assets/locations/image3.jpg';
import image4 from '../../assets/locations/image4.jpg';
import video from '../../assets/locations/video.mp4';

const images = [image1, image2, image3, image4]; // Array of images for the image card

const Library = ({ location }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="library-section">
      <p className="library-heading">
        <strong>Virtual Tour</strong> of the <strong>Nagarkot</strong> <strong>{location} Warehouse Facility</strong> 
      </p>
      
      <div className="library-cards">
        {/* Video card */}
        <div className="library-card video-card">
          <video controls>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        
        {/* Image card */}
        <div className="library-card image-card">
          <img src={images[currentImageIndex]} alt="Warehouse View" />
        </div>
      </div>
    </div>
  );
};

export default Library;
