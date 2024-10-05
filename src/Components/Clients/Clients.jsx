// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Clients.css';
import logo1 from '../../assets/client_logo/logo1.png'
import logo2 from '../../assets/client_logo/logo2.png'
import logo3 from '../../assets/client_logo/logo3.png'
import logo4 from '../../assets/client_logo/logo4.png'
import logo5 from '../../assets/client_logo/logo5.png'
import logo6 from '../../assets/client_logo/logo6.png'
import logo7 from '../../assets/client_logo/logo7.png'
import logo8 from '../../assets/client_logo/logo8.png'
import logo9 from '../../assets/client_logo/logo9.png'
import logo10 from '../../assets/client_logo/logo10.png'
import logo11 from '../../assets/client_logo/logo11.png'
import logo12 from '../../assets/client_logo/logo12.png'
import logo13 from '../../assets/client_logo/logo13.png'
import logo14 from '../../assets/client_logo/logo14.png'
import logo15 from '../../assets/client_logo/logo15.png'
import logo16 from '../../assets/client_logo/logo16.png'
import logo17 from '../../assets/client_logo/logo17.png'
import logo18 from '../../assets/client_logo/logo18.png'
import logo19 from '../../assets/client_logo/logo19.png'
import logo20 from '../../assets/client_logo/logo20.png'
import logo21 from '../../assets/client_logo/logo21.png'
import logo22 from '../../assets/client_logo/logo22.png'
import logo23 from '../../assets/client_logo/logo23.png'
import logo24 from '../../assets/client_logo/logo24.png'
import logo25 from '../../assets/client_logo/logo25.png'
import logo26 from '../../assets/client_logo/logo26.png'
import logo27 from '../../assets/client_logo/logo27.png'
import logo28 from '../../assets/client_logo/logo28.png'

const Clients = () => {
  return (
    <div className="clients-section container"> 
      <p className="clients-title">
        <strong>35+</strong> years of experience with <strong>100+</strong> brands who trust us...
      </p>
      <div className="logo-slider container">
        <div className="logo-track">
          {/* First Row of Logos */}
          <div className="logo-row">
            <div className="logo-item"><img src={logo1} alt="Brand 1" /></div>
            <div className="logo-item"><img src={logo2} alt="Brand 2" /></div>
            <div className="logo-item"><img src={logo3} alt="Brand 3" /></div>
            <div className="logo-item"><img src={logo4} alt="Brand 4" /></div>
            <div className="logo-item"><img src={logo5} alt="Brand 5" /></div>
            <div className="logo-item"><img src={logo6} alt="Brand 6" /></div>
            <div className="logo-item"><img src={logo7} alt="Brand 7" /></div>
            <div className="logo-item"><img src={logo8} alt="Brand 8" /></div>
            <div className="logo-item"><img src={logo9} alt="Brand 9" /></div>
            <div className="logo-item"><img src={logo10} alt="Brand 10" /></div>
            <div className="logo-item"><img src={logo11} alt="Brand 11" /></div>
            <div className="logo-item"><img src={logo12} alt="Brand 12" /></div>
            <div className="logo-item"><img src={logo13} alt="Brand 13" /></div>
            <div className="logo-item"><img src={logo14} alt="Brand 14" /></div>
          </div>

          {/* Second Row of Logos */}
          <div className="logo-row">
            <div className="logo-item"><img src={logo15} alt="Brand 15" /></div>
            <div className="logo-item"><img src={logo16} alt="Brand 16" /></div>
            <div className="logo-item"><img src={logo17} alt="Brand 17" /></div>
            <div className="logo-item"><img src={logo18} alt="Brand 18" /></div>
            <div className="logo-item"><img src={logo19} alt="Brand 19" /></div>
            <div className="logo-item"><img src={logo20} alt="Brand 20" /></div>
            <div className="logo-item"><img src={logo21} alt="Brand 21" /></div>
            <div className="logo-item"><img src={logo22} alt="Brand 22" /></div>
            <div className="logo-item"><img src={logo23} alt="Brand 23" /></div>
            <div className="logo-item"><img src={logo24} alt="Brand 24" /></div>
            <div className="logo-item"><img src={logo25} alt="Brand 25" /></div>
            <div className="logo-item"><img src={logo26} alt="Brand 26" /></div>
            <div className="logo-item"><img src={logo27} alt="Brand 27" /></div>
            <div className="logo-item"><img src={logo28} alt="Brand 28" /></div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Clients;
