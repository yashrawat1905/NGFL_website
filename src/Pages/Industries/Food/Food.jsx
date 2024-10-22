// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Food.css';
import Navbar from '../../../Components/Navbar/Navbar';
import Footer from '../../../Components/Footer/Footer';
import truck from '../../../assets/industry_logo/truck1.webp'

const Food = () => {
  return ( 
    <div> 
      <Navbar />
      <div className="food-section">
        <div className="food-content-wrapper">
          <h1 className="food-section-title">Food & Beverages Logistics Solutions</h1>
          <p className="food-section-description">
            We provide tailored logistics solutions for the food and beverages industry, ensuring freshness, safety, and regulatory compliance.          </p>
        </div>
      </div>
      
     {/* Industry Overview Section */}
     <section className="food-industry-overview">
        <h2>Industry Overview</h2>
        <p>
          The food and beverages industry demands precision and care throughout the supply chain due to the perishable nature of its products, stringent regulations, and the need for time-sensitive deliveries. Ensuring product freshness, adhering to food safety standards, and managing inventory efficiently are critical for maintaining quality and meeting consumer expectations. Partnering with a reliable 3PL provider like Nagarkot Forwarders ensures smooth handling of perishable inventory, timely deliveries, and full compliance with the highest industry standards.
        </p>
        <p>
          At Nagarkot Forwarders, we recognize the complexities of food and beverage logistics, from managing fluctuating commodity prices to addressing the increasing demand for organic and hygienic products. Our specialized storage and packaging solutions are designed to extend shelf life and maintain product freshness. Our supply chain services cover end-to-end strategic planning and management tailored specifically for the food and beverage industry. This includes warehousing, order fulfillment, distribution, repacking, kitting, reverse logistics, and transportation. With our extensive range of services, we empower companies to overcome market challenges while enhancing their operational efficiency.
        </p>
        <hr className="gray-line" />
      </section>

      {/* Offerings Section */}
      <section className="food-offerings-section">
        <h2 className="food-offerings-title">Our Food & Beverages Logistics Offerings</h2>
        <div className="food-offerings-grid">
          <div className="food-offering-card">
            <h3>Cold Chain Logistics:</h3>
            <p>
              Temperature-controlled storage for perishable, frozen and dry goods, ensuring that products retain their freshness from warehouse to customer delivery.
            </p>
          </div>
          
          <div className="food-offering-card">
            <h3>Compliance with Food Safety Standards:</h3>
            <p>
              Adherence to food safety regulations such as ISO and FSSAI standards, ensuring that all products meet stringent quality and safety requirements.
            </p>
          </div>

          <div className="food-offering-card">
            <h3>Advanced Inventory Management:</h3>
            <p>
              Leveraging systems like FIFO (First In, First Out), FEFO (First Expired, First Out), and batch or lot management for efficient inventory rotation and management, minimizing waste and maximizing freshness.
            </p>
          </div>

          <div className="food-offering-card">
            <h3>Temperature-Controlled Deliveries:</h3>
            <p>
             Reliable, multimodal transportation, including chartering and expedited delivery services in temperature-controlled settings, ensuring products arrive fresh at destinations such as hotels, restaurants, hospitals, and retail stores.
            </p>
          </div>

          <div className="food-offering-card">
            <h3>Value-Added Services:</h3>
            <p>
              Offering specialized services like MRP labeling, bottle/can case management, repacking, Expiry Management, labeling, and visual inspections to guarantee product quality before distribution.
            </p>
          </div>

          <div className="food-offering-card">
            <h3>Efficient Distribution:</h3>
            <p>
              Fast and reliable delivery networks ensuring products reach their destination on time, helping maintain consumer satisfaction and keeping operations running smoothly.
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
            <li><strong>Proven Expertise:</strong> Decades of experience working with top global manufacturers.</li>
            <li><strong>Scalability:</strong> From small-scale production runs to global distribution, our solutions scale to meet the needs of any project.</li>
            <li><strong>Innovation:</strong> We leverage the latest technology to offer real-time tracking, predictive inventory management, and cost-saving solutions.</li>
          </ul>
          <p className="why-nagarkot-summary">
           Nagarkot Forwarders offers tailored logistics solutions and a commitment to food safety, regulatory compliance, and operational excellence, Nagarkot Forwarders help businesses thrive in a competitive and ever-evolving market.
          </p>
        </div>
      </div>


      <Footer />
    </div>
  );
}

export default Food;
