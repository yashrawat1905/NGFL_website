// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Form.css';
import logo from '../../assets/form_logo.png'; // Import your logo from the assets folder

// eslint-disable-next-line react/prop-types
const Form = ({ closeForm }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <nav className="form-navbar">
          <div className="navbar-logo">
            <img src={logo} alt="Logo" />
          </div>
          <button className="close-btn" onClick={closeForm}>&times;</button>
        </nav>

        <form>
          {/* Row 1: Name and Company Name */}
          <div className="form-row">
            <div className="form-group">
              <label>NAME</label>
              <input type="text" name="name" placeholder="Enter your name" required />
            </div>
            <div className="form-group">
              <label>COMPANY NAME</label>
              <input type="text" name="companyName" placeholder="Enter your company name" required />
            </div>
          </div>

          {/* Row 2: Contact Number and Email ID */}
          <div className="form-row">
            <div className="form-group">
              <label>CONTACT NUMBER</label>
              <input type="tel" name="phone" placeholder="Enter your mobile number" required />
            </div>
            <div className="form-group">
              <label>EMAIL ID</label>
              <input type="email" name="email" placeholder="Enter your email address" required />
            </div>
          </div>

          {/* Row 3: Message box */}
          <div className="form-row full-width">
            <label>Write your message here</label>
            <textarea name="message" rows="6" placeholder="Enter your message"></textarea>
          </div>

          <button type="submit" className="btn-submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
