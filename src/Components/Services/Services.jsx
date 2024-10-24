/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import './Services.css';
import Form from '../Form/Form';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS CSS

const Services = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  useEffect(() => {
    AOS.init();
  }, []); 


  return (
  <>
    <div className='services container' data-aos="fade-up" data-aos-duration="1000">
      <p className="services-heading">
        Logistics Solutions created for <strong>your business needs</strong>
      </p>
      <div className='services-container'>
        <div className='service' data-aos="zoom-in" data-aos-duration="500">
          <div className="service-navbar">
            <h3 className="navbar-title">Startups</h3>
          </div>
          <div className="service-content">
            <h3 className="card-title"></h3>
            <p className="card-content">
              You have recently started and are seeking a logistics partner so you can stay focused on sourcing, marketing, and growth.
            </p>
            <a href="/start-ups" className="learn-more">Learn how we can help you</a>
          </div>
        </div>
        <div className='service' data-aos="zoom-in" data-aos-duration="500">
          <div className="service-navbar">
            <h3 className="navbar-title">MSME</h3>
          </div>
          <div className="service-content">
            <h3 className="card-title"></h3>
            <p className="card-content">
             You are a stable business and want to further expand into new markets, optimize your supply chain, and streamline operations, while maintaining profitability.
            </p>
            <a href="/msme" className="learn-more">Learn how we can help you</a>
          </div>
        </div>
        <div className='service' data-aos="zoom-in" data-aos-duration="500">
          <div className="service-navbar">
            <h3 className="navbar-title">Enterprises</h3>
          </div>
          <div className="service-content">
            <h3 className="card-title"></h3>
            <p className="card-content">
              Well-established company, you want a full-service logistics company that has the know-how and can deliver on your standard SOPs.
            </p>
            <a href="/enterprise" className="learn-more">Learn how we can help you</a>
          </div>
        </div>
      </div>
      <button className="btn button" onClick={openForm}>GET STARTED</button>
    </div>
    {isFormOpen && <Form closeForm={closeForm} />}
   </> 
  );
}

export default Services;