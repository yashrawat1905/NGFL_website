// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Landing.css'
import Navbar from '../../Components/Navbar/Navbar'
import Services from '../../Components/Services/Services'
import Hero from '../../Components/Hero/Hero'
import Faq from '../../Components/Faq/Faq'
import Clients from '../../Components/Clients/Clients'
import Industry from '../../Components/Industry/Industry'

const Landing = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Services/>
      <Clients/>
      <Industry />
      <Faq/>
    </div>
  )
}

export default Landing