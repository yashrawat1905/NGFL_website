// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Whitegoods.css';
import Navbar from '../../../Components/Navbar/Navbar';
import Footer from '../../../Components/Footer/Footer';
import whitegoods1 from '../../../assets/industry_logo/whitegoods1.webp'
import truck from '../../../assets/industry_logo/truck1.webp'

const Automotive = () => {

  return (
    <div> 
      <Navbar />
      <div className="whitegoods-section"> 
        <div className="whitegoods-content-wrapper">
          <h1 className="whitegoods-section-title">White Goods Industry</h1>
          <p className="whitegoods-section-description">
            We provide competitive logistics solutions for 3PL and warehousing of white goods.
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
            <li><strong>• Rising raw material costs:</strong> Rising raw material prices significantly impact the cost of white goods, increasing production expenses.</li>
            <li><strong>• Complex SKU mix:</strong> White goods manufacturers source parts globally, which requires efficient international freight management, customs clearance, and multimodal transportation solutions.</li>
            <li><strong>• Constantly evolving product mix:</strong> Constant innovation results in shorter product life cycles, requiring companies to consistently introduce new features to stay competitive and inculcate changing SOPs.</li>
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
            <h3>Specialized Warehousing</h3>
            <p>
              Our facilities are equipped with racking and handling systems, ensuring large appliances are stored safely and efficiently.
            </p>
          </div>
          
          <div className="whitegoods-offering-card">
            <h3>Inventory Management</h3>
            <p>
              We utilize appropriate WMS to monitor inventory in real-time, enabling accurate supply planning and inventory control.
            </p>
          </div>

          <div className="whitegoods-offering-card">
            <h3>Secure Handling & Transport</h3>
            <p>
              Our trained staff and state-of-the-art equipment ensure safe handling and transportation of heavy goods, minimizing damage risk.
            </p>
          </div>

          <div className="whitegoods-offering-card">
            <h3>Timely Dispatches</h3>
            <p>
              With appropriate planning, trained drivers and vehicle arrangement, we ensure your products reach customers as per schedule.
            </p>
          </div>

          <div className="whitegoods-offering-card">
            <h3>Packaging Service</h3>
            <p>
             Tailored packaging options from us ensure your appliances are protected during transit and storage.
            </p>
          </div>

          <div className="whitegoods-offering-card">
            <h3>Value-Added Services</h3>
            <p>
             We offer additional services such as product inspections, assembly, and retail-ready packaging to reduce multiple movement and costs.
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
            <li><strong>Consumer Durables Warehousing:</strong> Our advanced warehouses use cutting-edge technology for secure, efficient storage and traceability of high-value goods.</li>
            <li><strong>Consumer Durables Export/Import:</strong> We offer comprehensive international freight solutions, covering customs, air, and sea freight for raw materials to finished goods.</li>
            <li><strong>In-Plant Logistics for White Goods:</strong> We streamline in-plant logistics, reducing costs and improving efficiency in handling raw and finished goods within production facilities.</li>
          </ul>
          <p className="why-nagarkot-summary">
            Partnering with Nagarkot Forwarders means working with a 3PL provider that understands the intricacies of the whitegoods industry. <br /><br />Let us optimize your supply chain, so you can focus on developing and selling high-value goods.
          </p>
        </div>
      </div>


      <Footer />
    </div>
  );
}

export default Automotive;
