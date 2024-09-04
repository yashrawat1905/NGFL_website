// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-text'>
            <p>
              <span className='highlight'>GET</span><br />
              <span className='highlight'>EXPERIENCED</span><br />
              <span className='highlight'>LOGISTICS SERVICES</span><br />
              <span className='sub'>Your 3PL Logistics Partner for supply chain management whether</span><br/>
              <span className='sub'>you are a START UP, an SME, or a big ENTERPRISE </span><br/>
            </p>
            <button className='btn'>GET A QUOTE</button>
        </div>
    </div>
  )
}

export default Hero;
