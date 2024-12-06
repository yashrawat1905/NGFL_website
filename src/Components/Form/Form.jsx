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
  const [loading, setLoading] = useState(false); // For loading state
  const [error, setError] = useState(null); // For error handling

  // Hardcoded API base URL using the Railway app URL
  const API_BASE_URL = 'https://ngflwebsitebackend-production.up.railway.app'; // Replace with your Railway app URL

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form validation
  const validateForm = () => {
    const { name, companyName, phone, email, message } = formData;
    if (!name || !companyName || !phone || !email || !message) {
      return 'All fields are required';
    }
    // Simple email validation regex
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      return 'Please enter a valid email address';
    }
    // Simple phone validation (accepts numbers only)
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
      return 'Please enter a valid 10-digit phone number';
    }
    return null; // No errors
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);
    setError(null); // Reset error if validation passes
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
        setFormData({
          name: '',
          companyName: '',
          phone: '',
          email: '',
          message: '',
        }); // Reset form data
        closeForm();
      } else {
        const errorData = await response.json();
        console.error('Server responded with an error:', errorData);
        alert(`Error: ${errorData.message || 'Failed to send email'}`);
      }
    } catch (error) {
      console.error('Error during form submission:', error);
      alert('An unexpected error occurred. Please try again later.');
    } finally {
      setLoading(false);
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

        {error && <div className="error-message">{error}</div>}

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
                value={formData.name}
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
                value={formData.companyName}
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
                value={formData.phone}
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
                value={formData.email}
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
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit" className="btn-submit" disabled={loading}>
            {loading ? 'Sending...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
