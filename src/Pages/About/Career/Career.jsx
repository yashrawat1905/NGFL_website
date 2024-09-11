// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Career.css';
import Navbar from '../../../Components/Navbar/Navbar';
import deal from '../../../assets/careers/deal.png';

const Career = () => {
  return (
    <div>
      <Navbar />
      <div className="career-container">
        <div className="career-header">
          <h1 className="career-title">
            We Are Committed <br />
            To A <span className="highlight-text">Joyful Place Of Work</span>
          </h1>
          <h2 className="career-subtitle">Where Your Contribution Matters!</h2>
        </div>
      </div>

      {/* New Section for "Why Join Us?" */}
      <div className="why-join-us-section">
        <div className="why-join-us-container">
          <img src={deal} alt="Why Join NAGARKOT" className="why-join-icon" />
          <div className="why-join-text">
            <h3>Why Join NAGARKOT?</h3>
            <p>
              At NAGARKOT, your efforts, ideas, and feedback are not just heard—they are valued. Our workplace is dynamic where you will find numerous opportunities to perform, explore, and excel in your field. We firmly believe that content and fulfilled workers create the foundation for a leading organization.
            </p>
            <p>
              With a thriving team of over 950+ employees, NAGARKOT is on a constant growth trajectory, and we need passionate individuals like you to make a significant impact together.
            </p>
            <p>
              Join us at NAGARKOT, where innovation thrives and collaboration fuels our success. Together, let us pioneer new possibilities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
