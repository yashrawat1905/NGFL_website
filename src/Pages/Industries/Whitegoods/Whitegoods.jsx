// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Whitegoods.css';
import Navbar from '../../../Components/Navbar/Navbar';
import whitegoods1 from '../../../assets/industry_logo/whitegoods1.webp';
import whitegoods2 from '../../../assets/industry_logo/whitegoods2.webp'; 
import Clients from '../../../Components/Clients/Clients';
import Footer from '../../../Components/Footer/Footer';

const Automotive = () => {

  return (
    <div>
      <Navbar />
      <div className="whitegoods-section"> 
        <div className="content-wrapper">
          <h1 className="section-title">White Goods Industry</h1>
          <p className="section-description">
            We specialize in providing cutting-edge logistics solutions for the automotive industry, ensuring efficiency and reliability.
          </p>
        </div>
      </div>
      {/* Overview of the Industry Section */}
      <div className="industry-overview">
        {/* First Block with Image Left, Text Right */}
        <div className="overview-item left-image">
          <img src= {whitegoods1} alt="Food logistics 1" className="overview-image" />
          <div className="overview-text">
            <h2>Overview of the Industry</h2>
            <p>
            White goods refer to large electrical appliances such as refrigerators, washing machines, tumble dryers, and freezers. Initially, these items were only available in white, which is how the name originated, though they now come in various colors. <br/>
            <strong>White Goods vs. Brown Goods</strong>:</p>
            <ul>
              <li><strong>White Goods</strong>: Large appliances like fridges, washing machines, and freezers, typically used in homes.</li>
              <li><strong>Brown Goods</strong>:  Smaller electronic items such as TVs, DVD players, and home theatre systems.</li>
            </ul>
          </div>
        </div>

        {/* Second Block with Image Right, Text Left */}
        <div className="overview-item right-image">
          <div className="overview-text">
          <p>
          At Nagarkot Forwarders, we understand the specialized demands of the white goods industry. Large household appliances like refrigerators, washing machines, and air conditioners require tailored logistics solutions to ensure they are safely handled and delivered. Our services are specifically designed to meet the unique needs of white goods manufacturers and retailers. From warehousing to last-mile delivery and even reverse logistics, we provide end-to-end solutions that cover all aspects of the supply chain.</p>
          </div>
          <img src= {whitegoods2} alt="Food logistics 2" className="overview-image" />
        </div>
      </div>
      <div className="white-goods-logistics-section">
      <h2>Our Comprehensive White Goods Logistics Offerings</h2>

      <h3>1. Specialized Warehousing</h3>
      <p>Our facilities are equipped with custom racking and handling systems, ensuring large appliances are stored safely and efficiently.</p>

      <h3>2. Advanced Inventory Management</h3>
      <p>We utilize cutting-edge technology to monitor stock levels in real-time, enabling accurate demand forecasting and inventory control.</p>

      <h3>3. Secure Handling & Transport</h3>
      <p>Our trained staff and state-of-the-art equipment ensure the safe handling and transportation of heavy goods, minimizing the risk of damage.</p>

      <h3>4. Efficient Distribution Network</h3>
      <p>With a 98% on-time delivery rate, we ensure your products reach customers on schedule, keeping your supply chain running smoothly.</p>

      <h3>5. Optimized Reverse Logistics</h3>
      <p>We manage returns and exchanges efficiently to minimize disruptions and maintain customer satisfaction.</p>

      <h3>6. Custom Packaging Solutions</h3>
      <p>Tailored packaging options ensure your appliances are protected during transit and storage.</p>

      <h3>7. Value-Added Services</h3>
      <p>We offer additional services such as product inspections, assembly, and retail-ready packaging to enhance your supply chain operations.</p>

      <h2>Challenges in the Indian Consumer Durable Industry</h2>
      <p>India’s consumer durable market, which includes both rural (35%) and urban (65%) areas, faces several challenges:</p>
      <ul>
        <li><strong>Push (Competition):</strong> Intense rivalry among local and foreign companies, leading to increased spending on marketing to capture more customers.</li>
        <li><strong>Pull (Raw Material Costs):</strong> Rising raw material prices significantly impact the cost of white goods, increasing production expenses.</li>
        <li><strong>Push-Pull (Technological Advancements):</strong> Constant innovation results in shorter product life cycles, requiring companies to consistently introduce new features to stay competitive.</li>
      </ul>

      <h2>Nagarkot Forwarders’ Solutions for White Goods Logistics</h2>

      <h3>1. Consumer Durables Warehousing</h3>
      <p>Our state-of-the-art warehouses ensure the safety of high-value goods with advanced technology for authentication and traceability. Fully or semi-automated material handling equipment enhances efficiency and minimizes the risk of expensive mistakes.</p>

      <h3>2. Consumer Durables Export/Import</h3>
      <p>With expertise in international freight forwarding, we ensure the safe transport of raw materials, semi-finished, and finished products. Our services cover everything from customs clearances to air and sea freight handling.</p>

      <h3>3. In-Plant Logistics for White Goods</h3>
      <p>We optimize the movement of raw and finished goods within production facilities, offering reliable in-plant logistics solutions that reduce costs and improve operational efficiency.</p>
    </div> 
      <Clients />
      <Footer />
    </div>
  );
}

export default Automotive;
