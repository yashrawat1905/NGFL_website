/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, {useEffect} from 'react';
import './Benefits.css'; // Import your CSS file
import benefit from '../../assets/locations/benefit.jpg';
import cost from '../../assets/locations/cost.png'; // Use import for images
import scale from '../../assets/locations/scale.png';
import like from '../../assets/locations/like.png';
import risk from '../../assets/locations/risk.png';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS CSS 

const Benefits = ({ location }) => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="benefits-section">
      <p className='title' data-aos="fade-up" data-aos-duration="1000"><strong>Benefits</strong> of using our <strong>3PL Service</strong> in <strong>{location}</strong></p>
      <div className="benefits-content">
        {/* Image on the left */}
        <div className="benefits-image" data-aos="fade-right" data-aos-duration="1000">
          <img src={benefit} alt="Warehouse Benefits" />
        </div>

        {/* Icons with benefits on the right */}
        <div className="benefits-list" data-aos="fade-left" data-aos-duration="1000">
          <div className="benefit-item">
            <img src={cost} alt="Cost Reduction" className="benefit-icon" />
            <div className="benefit-text">
              <h3>Cost Reduction</h3>
              <p>Get the most suitable warehousing location that fits your business needs perfectly at zero capital expenditure.</p>
            </div>
          </div>

          <div className="benefit-item">
            <img src={scale} alt="Scalability" className="benefit-icon" />
            <div className="benefit-text">
              <h3>Scalability</h3>
              <p>Easily scale your operations without worrying about space constraints.</p>
            </div>
          </div>

          <div className="benefit-item">
            <img src={like} alt="Customer Satisfaction" className="benefit-icon" />
            <div className="benefit-text">
              <h3>Customer Satisfaction</h3>
              <p>Improve customer experience with faster and reliable deliveries.</p>
            </div>
          </div>

          <div className="benefit-item">
            <img src={risk} alt="Risk Mitigation" className="benefit-icon" />
            <div className="benefit-text">
              <h3>Risk Mitigation</h3>
              <p>Minimize risks by outsourcing warehousing and logistics to professionals.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
