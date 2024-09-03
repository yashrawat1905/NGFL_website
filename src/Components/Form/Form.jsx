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
          <label>NAME</label>
          <input type="text" name="name" placeholder='Enter your name' required />
          
          <label>PHONE NUMBER</label>
          <input type="tel" name="phone" placeholder='Enter your mobile number' required />

          <label>EMAIL ID</label>
          <input type='email' name="email" placeholder='Enter your email address' required />

          <label>Write your message here</label>
          <textarea name='message' rows='6' placeholder='Enter your message'></textarea> 

          <button type="submit" className="btn-submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
