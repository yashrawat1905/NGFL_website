/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, {useState, useEffect} from 'react';
import './HeroSection.css';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS CSS 
import Form from '../Form/Form';


const HeroSection = ({ location, image }) => {

  const [isFormOpen, setIsFormOpen] = useState(false);
  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  useEffect(() => {
    AOS.init();
  }, []);

  return ( 
    <section className="hero-section">
      <div className="hero-content-location">
        <h1 className="hero-title">Warehouse in {location}</h1>
        <p className="hero-subtitle">
          From cost-effective warehouses to high-end fulfillment facilities, Nagarkot is the go-to provider for warehousing services in {location} for all your business needs.
        </p>
        <button className="hero-button" onClick={openForm}>GET STARTED</button>
      </div>
      <div className="hero-image" data-aos="fade-left" data-aos-duration="15000">
        <img src={image} alt={`Warehouse in ${location}`} />
      </div>
      {/* Contact Form Modal */}
      {isFormOpen && <Form closeForm={closeForm} />}
    </section>
  );
};

export default HeroSection;
