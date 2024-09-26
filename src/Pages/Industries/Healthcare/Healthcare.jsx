// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Healthcare.css'
import Navbar from '../../../Components/Navbar/Navbar'
import healthcare1 from '../../../assets/industry_logo/healthcare1.jpg'
import healthcare2 from '../../../assets/industry_logo/healthcare2.jpg'
import Clients from '../../../Components/Clients/Clients';
import Footer from '../../../Components/Footer/Footer';

const Healthcare = () => {
  return (
    <div>
        <Navbar/>
        <div className="healthcare-section"> 
        <div className="content-wrapper">
          <h1 className="section-title">Health-Care Industry</h1>
          <p className="section-description">
            We specialize in providing cutting-edge logistics solutions for the automotive industry, ensuring efficiency and reliability.
          </p>
        </div>
      </div>
      {/* Overview of the Industry Section */}
      <div className="industry-overview">
        {/* First Block with Image Left, Text Right */}
        <div className="overview-item left-image">
          <img src= {healthcare1} alt="Food logistics 1" className="overview-image" />
          <div className="overview-text">
            <h2>Overview of the Industry</h2>
            <p>
            In the highly regulated and sensitive world of pharmaceutical and healthcare logistics, precision, compliance, and security are critical. At Nagarkot Forwarders, we offer specialized 3PL solutions to meet the stringent demands of this industry. From temperature-sensitive medications to high-value medical equipment, our services ensure safe, secure, and compliant delivery of healthcare products, adhering to the highest standards.
            </p>
          </div>
        </div>

        {/* Second Block with Image Right, Text Left */}
        <div className="overview-item right-image">
          <div className="overview-text">
          <p>
          Our extensive logistics network, advanced warehousing facilities, and robust transportation capabilities allow us to manage even the most complex pharma supply chains with precision. Minimizing delays while ensuring product integrity is at the heart of our operations. Temperature-Controlled Storage ensures optimal conditions for sensitive drugs and vaccines. Compliance with GMP and ISO Standards provide Strict adherence to health and safety regulations. Efficient handling of SKU complexities and expiration dates. Reverse Logistics manages returns and recalls in a regulated manner.</p>
          </div>
          <img src= {healthcare2} alt="Food logistics 2" className="overview-image" />
        </div>
      </div> 
      <div className="healthcare-pharma-logistics-section">
      <h2>Key Offerings for Healthcare & Pharma</h2>

      <h3>1. Temperature-Controlled Storage & Transportation</h3>
      <p>We prioritize maintaining controlled environments for pharmaceuticals, medical supplies, and healthcare products. Our warehousing and transport solutions include refrigerated (2°C to 8°C), frozen (-30°C), and ultra-low frozen (-70°C) storage. Our dedicated temperature-controlled fleet ensures that products like vaccines and biological samples remain within strict temperature ranges, maintaining their efficacy throughout transit.</p>

      <h3>2. Regulatory Compliance and Documentation</h3>
      <p>Our team ensures full compliance with Good Distribution Practices (GDP) and Good Manufacturing Practices (GMP), handling all necessary documentation for both national and international shipments. We also provide storage solutions for DEA Schedule II-V controlled substances, ensuring that all regulatory requirements are met.</p>

      <h3>3. Real-Time Tracking & Inventory Management</h3>
      <p>Through advanced tracking technology, we provide full visibility into your supply chain, enabling you to monitor shipments in real-time. Our warehousing facilities use First Expired, First Out (FEFO) and First In, First Out (FIFO) principles to manage inventory effectively, reducing wastage and maintaining product quality. We offer batch and serial number labeling for precise tracking of pharmaceuticals and medical devices.</p>

      <h3>4. Specialized Handling of Medical Devices & Equipment</h3>
      <p>High-value medical devices and healthcare equipment require expert handling to avoid damage. Our logistics team is trained to handle surgical instruments, diagnostic machines, and hospital supplies with care, ensuring they arrive in perfect condition.</p>

      <h3>5. Customs Clearance & Compliance</h3>
      <p>Navigating complex customs requirements can be daunting, especially with healthcare products. Our dedicated team streamlines customs clearance, ensuring that your shipments comply with all relevant regulations and reach their destinations without delay.</p>

      <h3>6. Returns Management & Contingency Planning</h3>
      <p>We offer a streamlined returns management process for healthcare and pharmaceutical products. Additionally, our contingency planning services ensure business continuity even in case of emergencies, with strategies in place for rapid response and inventory reallocation.</p>

      <h3>7. Order Fulfillment & Packaging Solutions</h3>
      <p>Our order fulfillment services include pick, pack, and ship processes, along with kitting, relabeling, and serialization services. We also manage vendor inventory and offer custom packaging solutions to meet the specific requirements of your products.</p>

      <h3>8. Business Continuity & Emergency Preparedness</h3>
      <p>Our healthcare logistics services include emergency preparedness and contingency planning, ensuring uninterrupted supply chains in case of unforeseen events. This includes stock level monitoring, automated inventory alerts, and rapid response mechanisms to safeguard the availability of critical healthcare products.</p>

      <h3>9. Value-Added Services</h3>
      <p>We offer a range of value-added services tailored to the healthcare industry, such as MRP labelling, kitting, and repackaging solutions. We also conduct regular quality control checks and adhere to shelf-life control practices to maintain product integrity. Our focus on batch number and expiration date tracking, combined with RFID and barcode scanning, ensures efficient stock management and reduces the risk of expired products reaching the market.</p>

      <h3>10. Scalable & Flexible Solutions</h3>
      <p>As your healthcare business grows, our logistics solutions scale with you. Whether you’re expanding to new markets, increasing product volumes, or diversifying product lines, our flexible services adapt to your needs.</p>

      <h3>Why Choose Nagarkot Forwarders for Pharma & Healthcare Logistics?</h3>
      <p>At Nagarkot Forwarders, we understand the critical nature of your healthcare products. Our expertise in temperature-controlled logistics, compliance, and secure handling positions us as the ideal partner for your pharma supply chain needs.</p>

      <ul>
        <li>Specialized handling for temperature-sensitive and high-value products</li>
        <li>Real-time visibility across the entire supply chain</li>
        <li>Compliance with national and international pharmaceutical regulations</li>
        <li>Scalable logistics solutions that grow with your business</li>
        <li>Commitment to security, safety, and operational excellence</li>
      </ul>

      <p>Let Nagarkot Forwarders optimize your healthcare logistics with precision, safety, and efficiency. Contact us today to learn how our tailored 3PL solutions can meet the specific demands of your pharmaceutical and healthcare supply chain.</p>
    </div>
      <Clients />  
      <Footer/>
    </div>
  )
}

export default Healthcare