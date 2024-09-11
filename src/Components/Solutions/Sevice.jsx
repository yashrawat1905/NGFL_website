/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Service.css';


const Service = ({ cardData }) => {
  return (
    <section className="service-section">
      <h2 className="section-title">Our services for boosting your eCommerce business</h2>
      
      <div className="service-cards">
        {cardData.map((card, index) => (
          <div key={index} className="service-card">
            <h3 className="card-heading">{card.title}</h3>
            <p className="card-description">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
