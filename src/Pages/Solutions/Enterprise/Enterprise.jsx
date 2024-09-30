// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Enterprise.css'
import Navbar from '../../../Components/Navbar/Navbar'
import Hero from '../../../Components/Solutions/Hero'
import image from '../../../assets/solutions/bg.avif'
import Value from '../../../Components/Solutions/Value'
import Service from '../../../Components/Solutions/Sevice'

const Enterprise = () => {
   // Value section ---
   const values = [
    { title: 'Strong Logistics Infrastructure', description: 'We offer the extensive warehousing and logistics capabilities you need to manage complex supply chain operations effortlessly.' },
    { title: 'Global Solutions', description: 'Our international logistics services ensure your supply chain operates smoothly across borders, so you can focus on expanding your global reach.' },
    { title: 'Your Trusted Partner', description: 'We work closely with you, acting as an extension of your team, and providing tailored solutions that align with your long-term goals.' },
  ];
  
  // Service section cards
  const pageData = [
    { title: "Comprehensive Supply Chain Management", description: "We manage your entire supply chain from start to finish, ensuring efficiency and transparency at every step covering all logistics and coordination activities in the order lifecycle, from PO management to final delivery." },
    { title: "Personalized Account Management", description: "You will have a dedicated account manager who understands your unique requirements and keeps the lines of communication open for a smooth partnership." },
    { title: "Award-winning in-house Customs brokerage, Freight forwarding services", description: "You will be able to leverage our inhouse Customs Brokerage, Freight Forwarding and Trucking Brokerage teams to obtain an all under-one-roof solution – so you don’t have to waste time managing multiple vendors. " }
  ];

  return (
    <div>
        <Navbar/>
        <Hero
        title={
          <>
            End-to-End Logistics for Global Enterprises
          </>
        }
        description={
         <> Partnering for seamless supply chain success. Our robust logistics solutions are built to enhance your operations, ensuring you stay ahead in today&#39;s competitive landscape.
         </>
        }
        backgroundImage={image}
        buttonText="GET STARTED"
      />
      <Value header="Our Core Values" values={values} />
      <Service cardData={pageData} />
    </div>
  )
}

export default Enterprise