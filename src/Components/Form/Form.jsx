// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './Form.css';
import logo from '../../assets/form_logo.webp'; // Import your logo from the assets folder

// eslint-disable-next-line react/prop-types
const Form = ({ closeForm }) => {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    phone: '',
    email: '',
    message: '',
  });

  // API base URL using your frontend domain
  const API_BASE_URL = 'https://nagarkot3pl.com';

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_BASE_URL}/api/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Email sent successfully');
        alert('Your message has been sent successfully!');
        closeForm();
      } else {
        const errorData = await response.json();
        console.error('Server responded with an error:', errorData);
        alert(`Error: ${errorData.message || 'Failed to send email'}`);
      }
    } catch (error) {
      console.error('Error during form submission:', error);
      alert('An unexpected error occurred. Please try again later.');
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <nav className="form-navbar">
          <div className="navbar-logo">
            <img src={logo} alt="Logo" />
          </div>
          <button className="close-btn" onClick={closeForm}>&times;</button>
        </nav>

        <form onSubmit={handleSubmit}>
          {/* Row 1: Name and Company Name */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">NAME</label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Enter your name"
                required
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="companyName">COMPANY NAME</label>
              <input
                id="companyName"
                type="text"
                name="companyName"
                placeholder="Enter your company name"
                required
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Row 2: Contact Number and Email ID */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">CONTACT NUMBER</label>
              <input
                id="phone"
                type="tel"
                name="phone"
                placeholder="Enter your mobile number"
                required
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">EMAIL ID</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Row 3: Message box */}
          <div className="form-row full-width">
            <label htmlFor="message">WRITE YOUR MESSAGE HERE</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Enter your message"
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit" className="btn-submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
