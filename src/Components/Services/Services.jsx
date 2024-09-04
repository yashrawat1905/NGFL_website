// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';
import './Services.css';
import Form from '../Form/Form';

const Services = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);
  return (
    <div className='services container'>
      <p className="services-heading">
        <strong>Logistics Solutions</strong> created for your business needs
      </p>
      <div className='services-container'>
        <div className='service'>
          <div className="service-navbar">
            <h3 className="navbar-title">START UPS</h3>
          </div>
          <div className="service-content">
            <h3 className="card-title"></h3>
            <p className="card-content">
              You have recently started and are seeking a logistics partner so you can stay focused on production, development, marketing, and growth.
            </p>
            <a href="#" className="learn-more">Learn More</a>
          </div>
        </div>
        <div className='service'>
          <div className="service-navbar">
            <h3 className="navbar-title">MSME</h3>
          </div>
          <div className="service-content">
            <h3 className="card-title"></h3>
            <p className="card-content">
              You are a stable business and want to further expand and reduce your costs.
            </p>
            <a href="#" className="learn-more">Learn More</a>
          </div>
        </div>
        <div className='service'>
          <div className="service-navbar">
            <h3 className="navbar-title">ENTERPRISE</h3>
          </div>
          <div className="service-content">
            <h3 className="card-title"></h3>
            <p className="card-content">
              Well-established company, you want a full-service logistics company that has the know-how and can deliver on your standard SOPs.
            </p>
            <a href="#" className="learn-more">Learn More</a>
          </div>
        </div>
      </div>
      <button className="btn" onClick={openForm}>CONTACT US</button>
      {isFormOpen && <Form closeForm={closeForm} />}
    </div>
  );
}

export default Services;
