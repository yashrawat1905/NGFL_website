// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Whitegoods.css';
import Navbar from '../../../Components/Navbar/Navbar';
import Value from '../../../Components/Solutions/Value';
import Clients from '../../../Components/Clients/Clients';
import Footer from '../../../Components/Footer/Footer';

const Automotive = () => {
  const valuesData = [
    { title: 'High-Security Warehousing', description: 'For the electronics industry, we offer secure warehousing equipped with CCTV surveillance, controlled access, and anti-theft measures. This ensures that high-value electronic products are stored safely and protected from theft and damage.' },
    { title: 'Kitting & Assembly', description: 'Our kitting and assembly services prepare electronic products for shipment by bundling them with necessary accessories, manuals, and packaging before distribution. This streamlines the final delivery process for our clients.' },
    { title: 'Special Handling for Fragile Items', description: 'Electronics often require careful handling due to their sensitive and fragile nature. Our staff is trained to handle these products with extra care, ensuring their safe transportation and storage.' }
  ];
  
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
      <Value header="Key Offering" values={valuesData} />
      <Clients />
       <Footer />
    </div>
  );
}

export default Automotive;
