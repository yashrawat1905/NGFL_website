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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:25/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Email sent successfully');
        closeForm(); //Close the form if submission is successful
      } else {
        alert('Error sending email');
      }
    } catch (error) {
      console.error(error);
      alert ('Error sending email');
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
              <label>NAME</label>
              <input type="text" name="name" placeholder="Enter your name" required onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>COMPANY NAME</label>
              <input type="text" name="companyName" placeholder="Enter your company name" required onChange={handleChange} />
            </div>
          </div>

          {/* Row 2: Contact Number and Email ID */}
          <div className="form-row">
            <div className="form-group">
              <label>CONTACT NUMBER</label>
              <input type="tel" name="phone" placeholder="Enter your mobile number" required onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>EMAIL ID</label>
              <input type="email" name="email" placeholder="Enter your email address" required onChange={handleChange} />
            </div>
          </div>

          {/* Row 3: Message box */}
          <div className="form-row full-width">
            <label>Write your message here</label>
            <textarea name="message" rows="6" placeholder="Enter your message" onChange={handleChange}></textarea>
          </div>

          <button type="submit" className="btn-submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
