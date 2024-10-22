// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Energy.css'
import Navbar from '../../../Components/Navbar/Navbar'
import Footer from '../../../Components/Footer/Footer';
import energy from '../../../assets/industry_logo/energy.webp';
import truck from '../../../assets/industry_logo/truck1.webp'

const Energy = () => {
  return (
    <div>  
        <Navbar/>
        <div className="energy-section">
        <div className="energy-content-wrapper">
          <h1 className="energy-section-title">Energy Logistics Solutions</h1>
          <p className="energy-section-description">
            Fueling Efficiency in Your Supply Chain
          </p>
        </div>
      </div>

      {/* Industry Overview Section */}
      <section className="energy-industry-overview">
        <h2>Industry Overview</h2>
        <p>
        The energy industry forms the backbone of modern economies, demanding robust and reliable logistics solutions to ensure the efficient transport of critical equipment, materials, and components. At Nagarkot Forwarders, we specialize in providing tailored 3PL logistics solutions for the diverse energy sector, including: 
        <ul> <br/>
          <li>Renewable energy</li>
          <li>Oil and Gas</li>
          <li>Utilities</li>
        </ul>
        </p>
        <p>
          Our unparalleled expertise in managing complex supply chains ensures your projects are completed on time and within budget, enhancing operational efficiency and supporting sustainable growth in this vital industry.
        </p>
        <hr className="gray-line" />
      </section>

      {/* Key Challenges Section */}
      <section className="energy-key-challenges">
        <div className="energy-key-challenges-content">
          <h2 className="energy-key-challenges-heading">Renewable Energy and Solar Panel Logistics</h2>
          <ul className="energy-key-challenges-list">
            <li>• Tailor-made energy logistics solutions including, storing spare parts, warehousing, and packaging</li>
            <li>•	Cost-effective and efficient consignment delivery for solar panel manufacturers</li>
            <li>•	Expertise in customs clearance at port terminals</li>
            <li>•	High-end storage facilities for solar panels and wind energy spare parts</li>
            <li>•	Specialized team for identifying and addressing safety issues</li>
            <li>•	Trained ground staff for smooth handling of heavy and sensitive panels</li>
          </ul>
          <h3 className="energy-key-challenges-heading">Security Measures</h3>
          <ul className="energy-key-challenges-list">
            <li>•	Specialized handling to prevent damage during loading and unloading</li>
            <li>•	Protection against atmospheric conditions that could affect sensitive equipment</li>
          </ul>
        </div>
        <div className="energy-key-challenges-image">
          <img src={energy} alt="Automotive Logistics Challenges" />
        </div>
      </section>

      {/* Offerings Section */}
      <section className="energy-offerings-section">
        <h2 className="energy-offerings-title">Our Energy Logistics Offerings</h2>
        <div className="energy-offerings-grid">          
          <div className="energy-offering-card">
            <h3>Comprehensive Supply Chain Management</h3>
            <p>
              Experience seamless end-to-end logistics with our integrated supply chain solutions:
            </p>
            <br/>
            <ul>
              <li>Strategic sourcing and procurement</li>
              <li>Efficient warehousing and inventory management</li>
              <li>Optimized distribution networks</li>
              <li>Just-in-time delivery for critical components</li>
            </ul>
          </div>

          <div className="energy-offering-card">
            <h3>Compliance & Regulatory Support</h3>
            <p>
             Navigate the complex regulatory landscape of the energy sector with confidence:
            </p>
            <br/>
            <ul>
              <li>Expert guidance on industry-specific regulations</li>
              <li>Meticulous documentation management</li>
              <li>Proactive compliance monitoring</li>
              <li>Support for environmental and safety standards</li>
            </ul>
          </div>

          <div className="energy-offering-card">
            <h3>Emergency Response Logistics</h3>
            <p>
              Count on our rapid response capabilities for critical situations:
            </p>
            <br/>
            <ul>
              <li>24/7 emergency logistics support</li>
              <li>Expedited shipping for urgent equipment and parts</li>
              <li>Coordination with emergency services and authorities</li>
              <li>Contingency planning and risk management</li>
            </ul>
          </div>

          <div className="energy-offering-card">
            <h3>Specialized Storage Solutions</h3>
            <p>
              Leverage our purpose-built storage facilities designed for the energy sector:
            </p>
            <br/>
            <ul>
              <li>Secure storage for high-value equipment</li>
              <li>Hazardous materials handling and storage capabilities</li>
              <li>Inventory management systems tailored for energy sector needs</li>
              <li>Daily inventory checks throughout the component&#39;s life in the warehouse</li>
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
            <li>Unmatched expertise in energy sector logistics</li>
            <li>Cutting-edge technology integration for enhanced efficiency</li>
            <li>Global network with local knowledge in key energy markets</li>
            <li>Customized solutions for your unique energy projects</li>
            <li>Proven track record of reliability and innovation in energy logistics</li>
          </ul>
          <p className="why-nagarkot-summary">
          Energize your supply chain with Nagarkot Forwarders. Contact us today to discover how our tailored 3PL solutions can transform your energy logistics, drive operational excellence, and support your sustainable growth in the ever-evolving energy landscape.
          </p>
        </div>
      </div>

      <Footer/>
    </div>
  )
}

export default Energy