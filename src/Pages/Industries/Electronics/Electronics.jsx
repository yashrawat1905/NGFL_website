// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Electronics.css'
import Navbar from '../../../Components/Navbar/Navbar'
import Clients from '../../../Components/Clients/Clients';
import electronics1 from '../../../assets/industry_logo/electronics1.jpg';
import electronics2 from '../../../assets/industry_logo/electronics2.png';
import Footer from '../../../Components/Footer/Footer';

const Electronics = () => {
  return ( 
    <div>
        <Navbar/>
        <div className="electronics-section">
        <div className="content-wrapper">
          <h1 className="section-title">Electronics Industry</h1>
          <p className="section-description">
            We specialize in providing cutting-edge logistics solutions for the automotive industry, ensuring efficiency and reliability.
          </p>
        </div>
      </div>
      {/* Overview of the Industry Section */}
      <div className="industry-overview">
        {/* First Block with Image Left, Text Right */}
        <div className="overview-item left-image">
          <img src= {electronics1} alt="Food logistics 1" className="overview-image" />
          <div className="overview-text">
            <h2>Overview of the Industry</h2>
            <p>
            In the fast-paced world of electronics logistics, precision, reliability, and speed are paramount. At Nagarkot Forwarders, we provide cutting-edge 3PL logistics solutions designed to address the unique challenges of transporting sensitive electronics, from consumer gadgets to industrial equipment. Our services ensure your products are handled with the utmost care, reaching their destinations safely and on time.
            </p>
          </div>
        </div>

        {/* Second Block with Image Right, Text Left */}
        <div className="overview-item right-image">
          <div className="overview-text">
          <p>
          Leveraging our robust logistics network and state-of-the-art warehousing facilities, we optimize your supply chain, minimizing delays and maximizing efficiency. This strategic approach empowers your business to thrive in the competitive electronics marketplace.</p>
          </div>
          <img src= {electronics2} alt="Food logistics 2" className="overview-image" />
        </div>
      </div>
      <div className="electronics-logistics-section">
      <h2>Key Offerings for Electronics Logistics</h2>

      <h3>1. Specialized Handling for Sensitive Electronics</h3>
      <p>We offer expert handling for fragile and high-value electronics such as semiconductors, circuit boards, and consumer electronics, ensuring safe and damage-free delivery.</p>

      <h3>2. FIFO (First In, First Out) Inventory Management</h3>
      <p>Our inventory management employs FIFO principles to ensure that time-sensitive electronics are shipped in the correct order, reducing the risk of product obsolescence.</p>

      <h3>3. Just-in-Time (JIT) Delivery</h3>
      <p>We provide JIT delivery services, allowing manufacturers to receive electronics exactly when needed, reducing storage costs and improving efficiency.</p>

      <h3>4. Real-Time Tracking & Visibility</h3>
      <p>Our advanced technology allows full visibility into the logistics process, enabling real-time tracking of electronic goods from start to finish.</p>

      <h3>5. Customs Clearance & Compliance</h3>
      <p>We manage the complexities of international shipping with comprehensive customs clearance and compliance services, ensuring smooth transport across borders.</p>

      <h3>6. Warehouse Kitting Services</h3>
      <p>Our kitting services streamline the shipping process by assembling related electronic components into kits, speeding up delivery and reducing errors.</p>

      <h3>7. Value-Added Services</h3>
      <p>We offer assembly, testing, packaging, and other value-added services to enhance the quality and speed of delivery for electronics products.</p>

      <h3>8. Security & Safety Measures</h3>
      <p>With advanced security systems, anti-theft measures, and 24/7 surveillance, we ensure the safety and security of high-value electronic shipments.</p>

      <h3>9. Scalable Solutions</h3>
      <p>Our logistics solutions are scalable to meet the changing demands of your business, ensuring flexibility and efficiency as your needs grow.</p>

      <h3>10. White Goods Logistics</h3>
      <p>We specialize in logistics for white goods like refrigerators and washing machines, ensuring safe and timely delivery of these large items.</p>

      <h3>Why Choose Nagarkot Forwarders for Electronics Logistics?</h3>
      <p>Nagarkot Forwarders offers the perfect blend of expertise, technology, and security for managing your electronics logistics needs. Our solutions are designed to keep your supply chain efficient and reliable.</p>

      <ul>
        <li>Specialized handling for delicate and high-value electronics</li>
        <li>Real-time tracking and inventory management systems</li>
        <li>Compliance with international shipping regulations</li>
        <li>Scalable logistics solutions to meet your business growth</li>
        <li>Commitment to safety, security, and operational excellence</li>
      </ul>

      <p>Let Nagarkot Forwarders transform your electronics logistics with precision, security, and efficiency. Contact us today to learn more about our tailored 3PL solutions for the electronics industry.</p>
    </div> 
      <Clients />
      <Footer/>
    </div>
  )
}

export default Electronics