// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Automotive.css';
import Navbar from '../../../Components/Navbar/Navbar';
import Footer from '../../../Components/Footer/Footer';
import automotive1 from '../../../assets/industry_logo/automotive2.jpg';

const Automotive = () => {
  return (
    <div> 
      <Navbar />
      <div className="automotive-section">
        <div className="content-wrapper">
          <h1 className="section-title">Automotive Logistics Solutions</h1>
          <p className="section-description">
            We specialize in providing cutting-edge logistics solutions for the automotive industry, ensuring efficiency and reliability.
          </p>
        </div>
      </div>

      {/* Industry Overview Section */}
      <section className="industry-overview">
        <h2>Industry Overview</h2>
        <p>
          The automotive industry is one of the most demanding and dynamic sectors globally, characterized by complex supply chains, tight production schedules, and high-quality standards. Managing the logistics for this sector requires precision, expertise, and a deep understanding of the industry&#39;s unique challenges. Whether it&#39;s delivering parts just-in-time (JIT) to assembly lines or ensuring the safe and timely distribution of finished vehicles, reliable logistics solutions are crucial for manufacturers to stay competitive and meet customer demands.
        </p>
        <p>
          At Nagarkot Forwarders, we have a long history of successful partnerships with top automotive firms. Our expertise spans every stage of the automotive supply chain, making us the trusted 3PL provider for some of the world&#39;s largest manufacturers. From managing sensitive automotive components to overseeing global shipments, our tailored solutions help clients minimize costs, improve efficiency, and maintain strict quality control.
        </p>
        <hr className="gray-line" />
      </section>

      {/* Key Challenges Section */}
      <section className="key-challenges">
        <div className="key-challenges-content">
          <h2 className="key-challenges-heading">Key Challenges</h2>
          <ul className="key-challenges-list">
            <li><strong>• Complex SKUs and Inventory Management:</strong> Managing thousands of different parts, each with specific handling requirements, requires robust systems and precise coordination.</li>
            <li><strong>• Just-in-Time Deliveries:</strong> Automotive assembly lines depend on the timely arrival of components to maintain smooth operations. Any delay can result in costly production halts.</li>
            <li><strong>• Global Supply Chains:</strong> Automakers source parts globally, which requires efficient international freight management, customs clearance, and multimodal transportation solutions.</li>
            <li><strong>• Quality Assurance:</strong> Automotive parts must meet stringent quality standards to ensure vehicle safety and performance, making quality control a critical aspect of the supply chain.</li>
          </ul>
        </div>
        <div className="key-challenges-image">
          <img src={automotive1} alt="Automotive Logistics Challenges" />
        </div>
      </section>

      <Footer /> 
    </div>
  );
}

export default Automotive;
