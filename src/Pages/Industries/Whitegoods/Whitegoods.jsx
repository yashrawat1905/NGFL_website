// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Whitegoods.css';
import Navbar from '../../../Components/Navbar/Navbar';
import Footer from '../../../Components/Footer/Footer';
import whitegoods1 from '../../../assets/industry_logo/whitegoods1.webp'
import truck from '../../../assets/industry_logo/truck1.png'

const Automotive = () => {

  return (
    <div>
      <Navbar />
      <div className="whitegoods-section"> 
        <div className="whitegoods-content-wrapper">
          <h1 className="whitegoods-section-title">White Goods Industry</h1>
          <p className="whitegoods-section-description">
            We specialize in providing cutting-edge logistics solutions for the automotive industry, ensuring efficiency and reliability.
          </p>
        </div>
      </div>

       {/* Industry Overview Section */}
       <section className="whitegoods-industry-overview">
        <h2>Industry Overview</h2>
        <p>
          White goods refer to large electrical appliances such as refrigerators, washing machines, tumble dryers, and freezers. Initially, these items were only available in white, which is how the name originated, though they now come in various colors.
        </p>
        <br/>
        <p>
        <strong>White Goods vs. Brown Goods</strong>
        <ul>
          <li><strong>White Goods</strong>: Large appliances like fridges, washing machines, and freezers, typically used in homes.</li>
          <li><strong>Brown Goods</strong>: Smaller electronic items such as TVs, DVD players, and home theatre systems.</li>
        </ul>
        </p>
        <hr className="gray-line" />
      </section>

       {/* Key Challenges Section */}
       <section className="whitegoods-key-challenges">
        <div className="whitegoods-key-challenges-content">
          <h2 className="whitegoods-key-challenges-heading">Key Challenges</h2>
          <ul className="whitegoods-key-challenges-list">
            <li><strong>• Push (Competition):</strong> ) Intense rivalry among local and foreign companies, leading to increased spending on marketing to capture more customers.</li>
            <li><strong>• Pull (Raw Material Costs):</strong> Rising raw material prices significantly impact the cost of white goods, increasing production expenses.</li>
            <li><strong>• Push-Pull (Technological Advancements):</strong> Automakers source parts globally, which requires efficient international freight management, customs clearance, and multimodal transportation solutions.</li>
            <li><strong>• Quality Assurance:</strong> Constant innovation results in shorter product life cycles, requiring companies to consistently introduce new features to stay competitive.</li>
          </ul>
        </div>
        <div className="whitegoods-key-challenges-image">
          <img src={whitegoods1} alt="whitegoods Logistics Challenges" />
        </div>
      </section>
      
      {/* Offerings Section */}
      <section className="whitegoods-offerings-section">
        <h2 className="whitegoods-offerings-title">Our White Goods Logistics Offerings</h2>
        <div className="whitegoods-offerings-grid">
          <div className="whitegoods-offering-card">
            <h3>Specialized Warehousing:</h3>
            <p>
              Our facilities are equipped with custom racking and handling systems, ensuring large appliances are stored safely and efficiently.
            </p>
          </div>
          
          <div className="whitegoods-offering-card">
            <h3>Advanced Inventory Management:</h3>
            <p>
              We utilize cutting-edge technology to monitor stock levels in real-time, enabling accurate demand forecasting and inventory control.
            </p>
          </div>

          <div className="whitegoods-offering-card">
            <h3>Secure Handling & Transport:</h3>
            <p>
              Our trained staff and state-of-the-art equipment ensure the safe handling and transportation of heavy goods, minimizing the risk of damage.
            </p>
          </div>

          <div className="whitegoods-offering-card">
            <h3>Efficient Distribution Network:</h3>
            <p>
              With a 98% on-time delivery rate, we ensure your products reach customers on schedule, keeping your supply chain running smoothly.
            </p>
          </div>

          <div className="whitegoods-offering-card">
            <h3>Optimized Reverse Logistics:</h3>
            <p>
              We manage returns and exchanges efficiently to minimize disruptions and maintain customer satisfaction.
            </p>
          </div>

          <div className="whitegoods-offering-card">
            <h3>Custom Packaging Solutions:</h3>
            <p>
             Tailored packaging options ensure your appliances are protected during transit and storage.
            </p>
          </div>

          <div className="whitegoods-offering-card">
            <h3>Value-Added Services:</h3>
            <p>
             We offer additional services such as product inspections, assembly, and retail-ready packaging to enhance your supply chain operations.
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
          <h2 className="why-nagarkot-title">Why Partner with Nagarkot Forwarders?</h2>
          <ul className="why-nagarkot-list">
            <li><strong>Consumer Durables Warehousing:</strong> Our advanced warehouses use cutting-edge technology for secure, efficient storage and traceability of high-value goods.</li>
            <li><strong>Consumer Durables Export/Import:</strong> We offer comprehensive international freight solutions, covering customs, air, and sea freight for raw materials to finished goods.</li>
            <li><strong>In-Plant Logistics for White Goods:</strong> We streamline in-plant logistics, reducing costs and improving efficiency in handling raw and finished goods within production facilities.</li>
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
