// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Automotive.css';
import Navbar from '../../../Components/Navbar/Navbar';
import Footer from '../../../Components/Footer/Footer';
import automotive1 from '../../../assets/industry_logo/automotive2.webp';
import truck from '../../../assets/industry_logo/truck1.webp'
const Automotive = () => {
  return (
    <div>   
      <Navbar />
      <div className="automotive-section">
        <div className="automotive-content-wrapper">
          <h1 className="automotive-section-title">Automotive Logistics Solutions</h1>
          <p className="automotive-section-description">
            We specialize in providing cutting-edge logistics solutions for the automotive industry, ensuring efficiency and reliability.
          </p>
        </div>
      </div>

      {/* Industry Overview Section */}
      <section className="automotive-industry-overview">
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
      <section className="automotive-key-challenges">
        <div className="automotive-key-challenges-content">
          <h2 className="automotive-key-challenges-heading">Key Challenges</h2>
          <ul className="automotive-key-challenges-list">
            <li><strong>• Complex SKUs and Inventory Management:</strong> Managing thousands of different parts, each with specific handling requirements, requires robust systems and precise coordination.</li>
            <li><strong>• Just-in-Time Deliveries:</strong> Automotive assembly lines depend on the timely arrival of components to maintain smooth operations. Any delay can result in costly production halts.</li>
            <li><strong>• Global Supply Chains:</strong> Automakers source parts globally, which requires efficient international freight management, customs clearance, and multimodal transportation solutions.</li>
            <li><strong>• Quality Assurance:</strong> Automotive parts must meet stringent quality standards to ensure vehicle safety and performance, making quality control a critical aspect of the supply chain.</li>
          </ul>
        </div>
        <div className="automotive-key-challenges-image">
          <img src={automotive1} alt="Automotive Logistics Challenges" />
        </div>
      </section>
      
      {/* Offerings Section */}
      <section className="automotive-offerings-section">
        <h2 className="automotive-offerings-title">Our Automotive Logistics Offerings</h2>
        <div className="automotive-offerings-grid">
          <div className="automotive-offering-card">
            <h3>Efficient Automotive Supply Chain</h3>
            <p>
              We streamline the entire automotive supply chain, from warehousing and distribution to inventory management.
            </p>
            <br/>
            <ul>
              <li><strong>Specialized Warehousing</strong>: Our facilities are equipped to handle raw materials, parts, and finished vehicles, with temperature control, safety protocols, and state-of-the-art racking systems.</li>
              <li><strong>Multimodal Transportation</strong>: Seamless coordination of land, sea, and air transportation, ensuring timely and cost-efficient delivery worldwide.</li>
            </ul>
          </div>
          
          <div className="automotive-offering-card">
            <h3>Value-Added Services</h3>
            <ul>
              <li><strong>Quality Control (QC)</strong>: Ensuring that all parts and finished goods meet the strict standards of automotive OEMs and component suppliers.</li>
              <li><strong>Barcoding and Labeling</strong>: Efficient tracking and traceability of parts throughout the supply chain.</li>
              <li><strong>Shrink Wrapping and Packaging</strong>: Tailored packaging solutions to protect sensitive automotive components during transport.</li>
              <li><strong>Sub-Assembly and Kitting</strong>: Providing assembly services to consolidate parts for easier production line integration.</li>
            </ul>
          </div>

          <div className="automotive-offering-card">
            <h3>Global Expertise</h3>
            <p>
              Nagarkot Forwarders brings decades of experience to the automotive sector, including 3PL operations for a global Japanese automotive company. We have a proven track record of managing the logistics for both raw materials and finished goods, handling over 1,000+ SKUs across multiple facilities.
            </p>
          </div>

          <div className="automotive-offering-card">
            <h3>Industry Standards and Compliance</h3>
            <ul>
              <li>ISO-certified and IATF-certified, meeting global automotive quality and safety standards.</li>
              <li>Equipped with real-time inventory tracking systems that utilize FIFO and other best practices to minimize waste and ensure parts availability.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Nagarkot section */}
      <div className="why-nagarkot-section">
        <div className="image-container">
          <img src={truck} alt="Nagarkot Forwarders" className="why-nagarkot-image" />
        </div>
        <div className="content-container">
          <h2 className="why-nagarkot-title">Why Partner with <br/> Nagarkot Forwarders?</h2>
          <ul className="why-nagarkot-list">
            <li><strong>Proven Expertise:</strong> Decades of experience working with top global automotive manufacturers.</li>
            <li><strong>Scalability:</strong> From small-scale production runs to global distribution, our solutions scale to meet the needs of any project.</li>
            <li><strong>Innovation:</strong> We leverage the latest technology to offer real-time tracking, predictive inventory management, and cost-saving solutions.</li>
            <li><strong>Commitment to Quality:</strong> Our strict quality control measures and compliance with industry standards ensure that every part and vehicle is handled with care.</li>
          </ul>
          <p className="why-nagarkot-summary">
            Partnering with Nagarkot Forwarders means working with a 3PL provider that understands the intricacies of the automotive industry. Let us optimize your supply chain, so you can focus on what you do best—building world-class vehicles.
          </p>
        </div>
      </div>

      <Footer /> 
    </div>
  );
}

export default Automotive;
