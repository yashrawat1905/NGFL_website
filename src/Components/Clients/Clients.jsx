/* eslint-disable no-unused-vars */
import React, {useEffect} from 'react';
import './Clients.css';
import logo1 from '../../assets/client_logo/logo1.webp'
import logo2 from '../../assets/client_logo/logo2.webp'
import logo3 from '../../assets/client_logo/logo3.webp'
import logo4 from '../../assets/client_logo/logo4.webp'
import logo5 from '../../assets/client_logo/logo5.webp'
import logo6 from '../../assets/client_logo/logo6.webp'
import logo7 from '../../assets/client_logo/logo7.webp'
import logo8 from '../../assets/client_logo/logo8.webp'
import logo9 from '../../assets/client_logo/logo9.webp'
import logo10 from '../../assets/client_logo/logo10.webp'
import logo11 from '../../assets/client_logo/logo11.webp'
import logo12 from '../../assets/client_logo/logo12.webp'
import logo13 from '../../assets/client_logo/logo13.webp'
import logo14 from '../../assets/client_logo/logo14.webp'
import logo15 from '../../assets/client_logo/logo15.webp'
import logo16 from '../../assets/client_logo/logo16.webp'
import logo17 from '../../assets/client_logo/logo17.webp'
import logo18 from '../../assets/client_logo/logo18.webp'
import logo19 from '../../assets/client_logo/logo19.webp'
import logo20 from '../../assets/client_logo/logo20.webp'
import logo21 from '../../assets/client_logo/logo21.webp'
import logo22 from '../../assets/client_logo/logo22.webp'
import logo23 from '../../assets/client_logo/logo23.webp'
import logo24 from '../../assets/client_logo/logo24.webp'
import logo25 from '../../assets/client_logo/logo25.webp'
import logo26 from '../../assets/client_logo/logo26.webp'
import logo27 from '../../assets/client_logo/logo27.webp'
import logo28 from '../../assets/client_logo/logo28.webp'
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS CSS 

const Clients = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="clients-section container"> 
      <p className="clients-title" data-aos="fade-up" data-aos-duration="1000">
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
