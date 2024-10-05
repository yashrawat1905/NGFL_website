// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Healthcare.css'
import Navbar from '../../../Components/Navbar/Navbar';
import Footer from '../../../Components/Footer/Footer';
import truck from '../../../assets/industry_logo/truck1.png';

const Healthcare = () => {
  return (
    <div>
        <Navbar/>
        <div className="healthcare-section"> 
        <div className="healthcare-content-wrapper">
          <h1 className="healthcare-section-title">Pharma and Healthcare Logistics Solutions</h1>
          <p className="healthcare-section-description">
            Ensuring Precision and Safety in Your Supply Chain
          </p>
        </div>
      </div>  

      {/* Industry Overview Section */}
      <section className="healthcare-industry-overview">
        <h2>Industry Overview</h2>
        <p>
          In the highly regulated and sensitive world of pharmaceutical and healthcare logistics, precision, compliance, and security are critical. At Nagarkot Forwarders, we offer specialized 3PL solutions to meet the stringent demands of this industry. From temperature-sensitive medications to high-value medical equipment, our services ensure safe, secure, and compliant delivery of healthcare products, adhering to the highest standards.
        </p>
        <p>
          Our extensive logistics network, advanced warehousing facilities, and robust transportation capabilities allow us to manage even the most complex pharma supply chains with precision. Minimizing delays while ensuring product integrity is at the heart of our operations.
        </p>
        <hr className="gray-line" />
      </section>

      {/* Offerings Section */}
      <section className="healthcare-offerings-section">
        <h2 className="healthcare-offerings-title">Our Pharma and Healthcare Logistics Offerings</h2>
        <div className="healthcare-offerings-grid">
          <div className="healthcare-offering-card">
            <h3>Regulatory Compliance and Documentation:</h3>
            <p>
              Our team ensures full compliance with GDP and GMP standards, managing documentation for national and international shipments. We also offer storage for DEA Schedule II-V substances, meeting all regulatory requirements.
            </p>
          </div>
          
          <div className="healthcare-offering-card">
            <h3>Specialized Handling of Medical Devices:</h3>
            <p>
              High-value medical devices and healthcare equipment require expert handling to avoid damage. Our logistics team is trained to handle surgical instruments, diagnostic machines, and hospital supplies with care, ensuring they arrive in perfect condition.
            </p>
          </div>

          <div className="healthcare-offering-card">
            <h3>Customs Clearance & Compliance:</h3>
            <p>
              Navigating complex customs requirements can be daunting, especially with healthcare products. Our dedicated team streamlines customs clearance, ensuring that your shipments comply with all relevant regulations and reach their destinations without delay.
            </p>
          </div>

          <div className="healthcare-offering-card">
            <h3>Order Fulfillment & Packaging Solutions:</h3>
            <p>
              Our order fulfillment services include pick, pack, and ship processes, along with kitting, relabeling, and serialization services. We also manage vendor inventory and offer custom packaging solutions to meet the specific requirements of your products.
            </p>
          </div>

          <div className="healthcare-offering-card">
            <h3>Business Continuity & Emergency Preparedness:</h3>
            <p>
              Our healthcare logistics services include emergency preparedness and contingency planning, ensuring uninterrupted supply chains in case of unforeseen events. This includes stock level monitoring, automated inventory alerts, and rapid response mechanisms to safeguard the availability of critical healthcare products.
            </p>
          </div>

          <div className="healthcare-offering-card">
            <h3>Value-Added Services:</h3>
            <p>
              We provide MRP labeling, kitting, and repackaging solutions, along with regular quality control and shelf-life management. Batch tracking, RFID, and barcode scanning help efficiently manage stock and prevent expired products from reaching the market.
            </p>
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
            <li>Specialized handling for temperature-sensitive and high-value products.</li>
            <li>Real-time visibility across the entire supply chain.</li>
            <li>Compliance with national and international pharmaceutical regulations.</li>
            <li>Commitment to security, safety, and operational excellence.</li>
          </ul>
          <p className="why-nagarkot-summary">
            Let Nagarkot Forwarders optimize your healthcare logistics with precision, safety, and efficiency. Contact us today to learn how our tailored 3PL solutions can meet the specific demands of your pharmaceutical and healthcare supply chain.
          </p>
        </div>
      </div>

      <Footer/>
    </div>
  )
}

export default Healthcare