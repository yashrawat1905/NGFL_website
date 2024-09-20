// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Healthcare.css'
import Navbar from '../../../Components/Navbar/Navbar'
import Value from '../../../Components/Solutions/Value';

const Healthcare = () => {
  const valuesData = [
    { title: 'Innovation', description: 'We thrive on creative problem-solving.' },
    { title: 'Integrity', description: 'Honesty and transparency guide our actions.' },
    { title: 'Collaboration', description: 'We achieve more together.' }
  ];
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
      <Value header="Key Offering" values={valuesData} />
    </div>
  )
}

export default Healthcare