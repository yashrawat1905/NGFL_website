// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Startups.css'
import Navbar from '../../../Components/Navbar/Navbar'
import Hero from '../../../Components/Solutions_Hero/Hero'
import bgimage from '../../../assets/solutions/bg.webp'

const Startups = () => {
  return (
    <div>
       <Navbar/> 
       <Hero
       mainTitle=''
       backgroundImage= {bgimage}
      />
    </div>
  )
}

export default Startups