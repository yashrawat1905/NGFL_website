/* eslint-disable no-unused-vars */
import React from 'react';
import './About.css';
import Navbar from '../../../Components/Navbar/Navbar';
import imagePath from '../../../assets/resources/overview.png'; // Replace with your actual image path
import image1 from '../../../assets/resources/temple.jpeg'; // Replace with actual image path
import image2 from '../../../assets/resources/devi.jpg'; // Replace with actual image path
import map from '../../../assets/resources/map.png';
import cr from '../../../assets/resources/cr.png';
import webinar from '../../../assets/resources/webinar.png';
import honest from '../../../assets/resources/honest.png';
import career from  '../../../assets/resources/career.jpg';
import Footer from '../../../Components/Footer/Footer';

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="about-container">
        <section className="about-us-section">
          <div className="content">
            <h2>This is Nagarkot Forwarders</h2>
            <p>With over 35 years of industry expertise, Nagarkot Forwarders has become a trusted name in 3PL, warehousing, customs clearance, and supply chain consultation. Serving multinational clients for more than a decade, we pride ourselves on delivering efficient, reliable, and tailored logistics solutions that meet the highest industry standards.</p><br/>
            <p>Our experience and dedication allow us to navigate complex supply chains with precision, helping businesses thrive in a competitive landscape. As your logistics partner, we’re committed to innovation, integrity, and excellence in everything we do.</p>
          </div>
          <div className="image-container">
            <img src={imagePath} alt="Nagarkot Forwarders" />
          </div>
        </section>
      </div>

       {/* Separate container for History section */}
       <div className="history-container">
        <section className="history-section">
          <h2>History behind the name Nagarkot</h2>
          <div className="image-grid">
            <div className="image-wrapper">
            <img src={map} alt="map" className="history-image" />
              <p>Nagarkot in Kangra Valley, Himachal Pradesh.</p>
            </div>
            <div className="image-wrapper">
              <img src={image1} alt="Historical Site 1" className="history-image" />
              <p>Brajeshwari Devi Mandir in Nagarkot.</p>
            </div>
            <div className="image-wrapper">
              <img src={image2} alt="Historical Site 2" className="history-image" />
              <p>Brajeshwari Deviji</p>
            </div>
          </div>

          {/* Additional paragraph below images */}
          <p className="history-description">
            The company&#39;s name find its roots in a divine place called Nagarkot near Dharamshala in Kangra Valley, Himachal Pradesh. Founder Omprakash Agrawal and family have been taking on annual pilgramage to Nagarkot every year since 1987 Nagarkot Forwarders was subsequently founded in 1988. The pilgramage ritual continues till today.
          </p>
        </section>
      </div>

      {/* Our Values Section */}
      <div className="values-container">
        <section className="values-section">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <img src={cr} alt="Value 1" className="value-logo" />
              <p><strong>Relationship rather than transactional approach.</strong> We believe in building long-term relationships with our client partners.</p>
            </div>
            <div className="value-item">
              <img src={webinar} alt="Value 2" className="value-logo" />
              <p>Be a <strong>learning organization</strong> that gets better every day in whatever we do</p>
            </div>
            <div className="value-item">
              <img src={honest} alt="Value 3" className="value-logo" />
              <p><strong>Fair, honest, transparent and ethical in our conduct.</strong></p>
            </div>
          </div>
        </section>
      </div>
    {/* New Connect Section */}
    <div className="connect-container">
        <div className="connect-content">
          <p>If our values align with yours,<br/> we’d be thrilled to connect and explore opportunities together.</p>
          <button className="apply-button"><a href='mailto:info@nagarkot.co.in'>Apply </a></button>
        </div>
        <div className="connect-logo">
          <img src={career} alt="Company Logo" />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default About;
