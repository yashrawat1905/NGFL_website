// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Electronics.css'
import Navbar from '../../../Components/Navbar/Navbar'
import Footer from '../../../Components/Footer/Footer';
import truck from '../../../assets/industry_logo/truck1.webp'

const Electronics = () => {
  return (   
    <div>
        <Navbar/>
        <div className="electronics-section">
        <div className="electronics-content-wrapper">
          <h1 className="electronics-section-title">Electronics Logistics Solutions</h1>
          <p className="electronics-section-description">
            Powering Your Supply Chain with Precision.
          </p>
        </div>
      </div>

      {/* Industry Overview Section */}
      <section className="electronics-industry-overview">
        <h2>Industry Overview</h2>
        <p>
          In the fast-paced world of electronics logistics, precision, reliability, and speed are paramount. At Nagarkot Forwarders, we provide cutting-edge 3PL logistics solutions designed to address the unique challenges of transporting sensitive electronics, from consumer gadgets to industrial equipment. Our services ensure your products are handled with the utmost care, reaching their destinations safely and on time.
        </p>
        <p>
          Leveraging our robust logistics network and state-of-the-art warehousing facilities, we optimize your supply chain, minimizing delays and maximizing efficiency. This strategic approach empowers your business to thrive in the competitive electronics marketplace.
        </p>
        <hr className="gray-line" />
      </section>

      {/* Offerings Section */}
      <section className="electronics-offerings-section">
        <h2 className="electronics-offerings-title">Our Electronics Logistics Offerings</h2>
        <div className="electronics-offerings-grid">
          <div className="electronics-offering-card">
            <h3>Specialized Handling for Sensitive Electronics</h3>
            <p>
            Our logistics services include specialized handling for fragile and high-value electronics, minimizing the risk of damage during transit. This includes critical components like: Semiconductors, Circuit boards and Finished consumer electronics 
            </p>
          </div>

          <div className="electronics-offering-card">
            <h3>Just-in-Time (JIT) Delivery</h3>
            <p>
              Our advanced logistics solutions include Just-in-Time (JIT) delivery capabilities, ensuring your electronics reach manufacturing lines or retail locations exactly when needed. This approach minimizes storage costs and enhances supply chain management.
            </p>
          </div>

          <div className="electronics-offering-card">
            <h3>Real-Time Tracking & Visibility</h3>
            <p>
              Benefit from our cutting-edge logistics technology, providing real-time tracking and monitoring of your shipments. Full visibility across the supply chain ensures seamless management and total transparency, allowing you to track your product&#39;s journey at every step.
            </p>
          </div>

          <div className="electronics-offering-card">
            <h3>Customs Clearance & Compliance</h3>
            <p>
              We navigate the complexities of international shipping with our comprehensive customs clearance services. Your electronics can move across borders efficiently while meeting all regulatory compliance requirements.
            </p>
          </div>

          <div className="electronics-offering-card">
            <h3>Value-Added Services</h3>
            <p>
             Our suite of value-added services includes assembly, kitting and quality control, tailored to meet the unique needs of the electronics industry. This helps ensure that your products arrive not only on time but also ready for immediate use or sale.
            </p>
          </div>

          <div className="electronics-offering-card">
            <h3>Security & Safety Measures</h3>
            <p>
             We prioritize the safety and security of your high-value electronics. Our warehousing facilities include fire prevention, anti-theft systems, and 24/7 surveillance. These facilities are optimized to handle a wide range of electronics, including office equipment, mobile devices, computer components, home appliances, and more.
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
            <li>Unparalleled expertise in electronics handling.</li>
            <li>Global reach with local expertise.</li>
            <li>Tailored solutions for your specific business requirements.</li>
            <li>Proven track record of reliability and efficiency.</li>
          </ul>
          <p className="why-nagarkot-summary">
            Elevate your electronics logistics strategy with Nagarkot Forwarders. Contact us today to discover how our tailored 3PL solutions can transform your supply chain and propel your business forward in the ever-evolving world of electronics.
          </p>
        </div>
      </div>

      <Footer/>
    </div>
  )
}

export default Electronics