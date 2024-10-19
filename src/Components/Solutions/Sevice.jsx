/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Service.css';

const Service = ({ cardData }) => {
  return (
    <section className="service-section">
      <p className="section-title"><strong>Our services</strong> for boosting your <strong>business</strong> </p>
      
      <div className="service-cards">
        {cardData.map((card, index) => (
          <div key={index} className="service-card">
            <div className="card-inner">
              <div className="card-front" style={{ backgroundImage: `url(${card.image})` }}>
               {/* Display the title on the front */}
               <h3 className="card-heading-front">{card.title}</h3>
              </div>
              <div className="card-back">
                <p className="card-description">{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
