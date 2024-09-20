/* eslint-disable no-unused-vars */
import React from 'react';
import './CaseStudy.css';
import advics from '../../assets/locations/case.avif';
import { useNavigate } from 'react-router-dom';

const CaseStudy = () => {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate('/case-study'); // Replace with your actual case study page route
  };

  return (
    <div className="case-study-container">
      <p className="case-study-heading"><strong>CASE STUDY</strong></p>
      <div className="case-study-content">
        <div className="case-study-image-container">
          <div className="case-study-image">
            <img src={advics} alt="Case Study" />
          </div>
        </div>
        <div className="case-study-points-container">
          <div className="case-study-points">
            <div className="point">
              <h3>Client Overview</h3>
              <p>
              A leading MNC and manufacturer of automotive parts, partnered with Nagarkot Forwarders for 3PL and warehousing in Gurgaon and Gujarat. Managing over 1000 SKUs, the client required a solution that adhered to FIFO and handled both raw materials and finished goods.
              </p>
            </div>
            <div className="point">
              <h3>Challenges</h3>
              <ul>
                <li>Efficient management of palletized and floor storage.</li>
                <li>Efficient management of palletized and floor storage.</li>
                <li>Strict delivery schedules and ISO/IATF compliance.</li>
              </ul>
            </div>
            <div className="point">
              <h3>Our Solution</h3>
              <ul>
                <li>Managed pallet and box handling operations.</li>
                <li>Managed pallet and box handling operations.</li>
                <li>Delivered value-added services and regular audits.</li>
              </ul>
            </div>
            <div className="point">
              <h3>Results & Achievements</h3>
              <ul>
                <li>Met delivery schedules consistently.</li>
                <li>Achieved 5S standards and maintained ISO/IATF certifications.</li>
                <li>Efficiently handled high SKU volumes, enhancing the supply chain.</li>
              </ul>
            </div>
            <button className="read-more-btn" onClick={handleReadMore}>
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
