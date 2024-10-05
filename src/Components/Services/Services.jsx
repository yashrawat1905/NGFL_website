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
        Logistics Solutions created for <strong>your business needs</strong>
      </p>
      <div className='services-container'>
        <div className='service'>
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
        <div className='service'>
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
        <div className='service'>
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
      {isFormOpen && <Form closeForm={closeForm} />}
    </div>
  );
}

export default Services;
