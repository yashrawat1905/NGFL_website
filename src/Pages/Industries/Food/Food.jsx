// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Food.css';
import Navbar from '../../../Components/Navbar/Navbar';
import Clients from '../../../Components/Clients/Clients';
import Footer from '../../../Components/Footer/Footer';
import food1 from '../../../assets/industry_logo/food1.webp';
import food2 from '../../../assets/industry_logo/food2.jpg';

const Food = () => {
  return (
    <div> 
      <Navbar />
      <div className="food-section">
        <div className="content-wrapper">
          <h1 className="section-title">Food and Beverages Industry</h1>
          <p className="section-description">
            We specialize in providing tailored logistics solutions for the food and beverages industry, ensuring freshness, safety, and compliance with regulations.
          </p>
        </div>
      </div>
      
      {/* Overview of the Industry Section */}
      <div className="industry-overview">
        {/* First Block with Image Left, Text Right */}
        <div className="overview-item left-image">
          <img src={food1} alt="Food logistics 1" className="overview-image" />
          <div className="overview-text">
            <h2>Overview of the Industry</h2>
            <p>
            The food and beverages industry demands precision and care throughout the supply chain due to the perishable nature of its products, stringent regulations, and the need for time-sensitive deliveries. Ensuring product freshness, adhering to food safety standards, and managing inventory efficiently are critical for maintaining quality and meeting consumer expectations. Partnering with a reliable 3PL provider like Nagarkot Forwarders ensures smooth handling of perishable inventory, timely deliveries, and full compliance with the highest industry standards.
            </p>
          </div>
        </div>

        {/* Second Block with Image Right, Text Left */}
        <div className="overview-item right-image">
          <div className="overview-text">
          <p><strong>Comprehensive Food &amp; Beverages Logistics Solutions</strong> : <br/>
          At Nagarkot Forwarders, we recognize the complexities of food and beverage logistics, from managing fluctuating commodity prices to addressing the increasing demand for organic and hygienic products. Our specialized storage and packaging solutions are designed to extend shelf life and maintain product freshness. Our supply chain services cover end-to-end strategic planning and management tailored specifically for the food and beverage industry. This includes warehousing, order fulfillment, distribution, repacking, kitting, reverse logistics, and transportation. With our extensive range of services, we empower companies to overcome market challenges while enhancing their operational efficiency.</p>
          </div>
          <img src={food2} alt="Food logistics 2" className="overview-image" />
        </div>
      </div> 
      <div className="food-beverages-logistics-section">
      <h2>Key Features and Offerings for Food & Beverages</h2>

      <h3>1. Cold Chain Logistics</h3>
      <p>Temperature-controlled storage for perishable, frozen, ambient, and dry goods, ensuring that products retain their freshness from warehouse to customer delivery.</p>

      <h3>2. Advanced Inventory Management</h3>
      <p>Leveraging systems like FIFO (First In, First Out), FEFO (First Expired, First Out), and batch or lot management for efficient inventory rotation and management, minimizing waste and maximizing freshness.</p>

      <h3>3. Compliance with Food Safety Standards</h3>
      <p>Adherence to food safety regulations such as HACCP and ISO standards, ensuring that all products meet stringent quality and safety requirements.</p>

      <h3>4. Specialized Warehousing</h3>
      <p>Optimized storage solutions tailored to bulk goods, raw materials, and finished products, featuring real-time updates through a comprehensive Warehouse Management System (WMS) with lot-enabled equipment and batch tagging.</p>

      <h3>5. Temperature-Controlled Deliveries</h3>
      <p>Reliable, multimodal transportation, including chartering and expedited delivery services in temperature-controlled settings, ensuring products arrive fresh at destinations such as hotels, restaurants, hospitals, and retail stores.</p>

      <h3>6. Value-Added Services</h3>
      <p>Offering specialized services like MRP labeling, bottle/can case management, repacking, labeling, and visual inspections to guarantee product quality before distribution.</p>

      <h3>7. Expiry Management</h3>
      <p>Real-time alerts for products approaching expiration, helping to manage aging inventory and reduce waste.</p>

      <h3>8. Efficient Distribution</h3>
      <p>Fast and reliable delivery networks ensuring products reach their destination on time, helping maintain consumer satisfaction and keeping operations running smoothly.</p>

      <h3>9. Performance Monitoring</h3>
      <p>Continuous examination of performance indicators to optimize warehouse throughput and replenishment at stores, ensuring efficiency in every step of the process.</p>

      <h3>10. Supply Chain Transparency</h3>
      <p>Barcode scanning and RFID solutions offer end-to-end transparency, helping businesses monitor stock levels, improve order fulfillment rates, and maintain better inventory control.</p>

      <h3>Tailored Solutions for the Food & Beverages Industry</h3>
      <p>Nagarkot Forwarders offers tailored logistics solutions that cater to the unique needs of the food and beverages industry. From secure storage solutions to on-time distribution, we provide all the services needed to maintain the highest quality standards throughout the supply chain. With a commitment to food safety, regulatory compliance, and operational excellence, we help businesses thrive in a competitive and ever-evolving market.</p>
    </div>
      <Clients />
      <Footer />
    </div>
  );
}

export default Food;
