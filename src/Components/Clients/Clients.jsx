// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Clients.css';
import logo1 from '../../assets/client_logo/logo1.png'
import logo2 from '../../assets/client_logo/logo2.png'
import logo3 from '../../assets/client_logo/logo3.png'
import logo4 from '../../assets/client_logo/logo4.png'


const Clients = () => {
  return (
    <div className="logo-slider container">
      <div className="logo-track">
        <div className="logo-item"><img src={logo1} alt="Brand 1" /></div>
        <div className="logo-item"><img src={logo2} alt="Brand 2" /></div>
        <div className="logo-item"><img src={logo3} alt="Brand 3" /></div>
        <div className="logo-item"><img src={logo4} alt="Brand 4" /></div>
        {/* Duplicate logos for continuous loop */}
        <div className="logo-item"><img src={logo1} alt="Brand 1" /></div>
        <div className="logo-item"><img src={logo2} alt="Brand 2" /></div>
        <div className="logo-item"><img src={logo3} alt="Brand 3" /></div>
        <div className="logo-item"><img src={logo4} alt="Brand 4" /></div>
      </div>
    </div>
  );
};

export default Clients;
