// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Landing.css'
import Navbar from '../../Components/Navbar/Navbar'
import Services from '../../Components/Services/Services'
import Hero from '../../Components/Hero/Hero'
import FAquestions from '../../Components/FAquestions/FAquestions'
import Clients from '../../Components/Clients/Clients'
import Industry from '../../Components/Industry/Industry'
import Footer from '../../Components/Footer/Footer'

const Landing = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Services/>
      <Clients/>
      <Industry />
      <FAquestions/>
      <Footer />
    </div>
  )
}

export default Landing