// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Landing.css'
import Navbar from '../../Components/Navbar/Navbar'
import Services from '../../Components/Services/Services'
import Hero from '../../Components/Hero/Hero'

const Landing = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Services/>
    </div>
  )
}

export default Landing