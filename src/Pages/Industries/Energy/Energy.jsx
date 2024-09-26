// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Energy.css'
import Navbar from '../../../Components/Navbar/Navbar'
import Value from '../../../Components/Solutions/Value';
import Clients from '../../../Components/Clients/Clients';
import Footer from '../../../Components/Footer/Footer';

const Energy = () => {
  const valuesData = [
    { title: 'Bulk Storage Solutions', description: 'Dedicated facilities for storing heavy-duty equipment, cables, and materials. Safe handling and storage of hazardous materials in compliance with industry standards.' },
    { title: 'Project-Based Logistics', description: 'Tailored logistics services designed to support large energy infrastructure projects, such as wind farms and power stations. Just-in-Time (JIT) delivery of parts and materials ensures smooth project timelines.' },
    { title: 'Secure Asset Protection', description: 'High-security warehousing with controlled access, CCTV surveillance, and theft prevention for valuable energy equipment.' }
  ];
  return (
    <div>
        <Navbar/>
        <div className="energy-section">
        <div className="content-wrapper">
          <h1 className="section-title">Energy Industry</h1>
          <p className="section-description">
            We specialize in providing cutting-edge logistics solutions for the automotive industry, ensuring efficiency and reliability.
          </p>
        </div>
      </div>
      <Value header="Key Offering" values={valuesData} />
      <Clients />
      <Footer/>
    </div>
  )
}

export default Energy