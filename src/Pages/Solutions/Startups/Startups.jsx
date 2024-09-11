// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Startups.css'
import Navbar from '../../../Components/Navbar/Navbar'
import Hero from '../../../Components/Solutions/Hero'
import image from '../../../assets/solutions/hero.png'
import Value from '../../../Components/Solutions/Value'
import Service from '../../../Components/Solutions/Sevice'

const Startups = () => {
  // Value section ---
  const values = [
    { title: 'Get started in a few weeks', description: 'Integrating logistics need not take months nor drain your resources. Simply use our Plug & Play set-up.' },
    { title: 'Run your business digitally', description: 'Our web-based myFIEGE portal lets you access all reports and information in real time. This is how you always stay in the know.' },
    { title: 'Invest in your brand', description: 'With FIEGE NOW, you start off without setting-up fees and maintain complete control of all costs. This leaves you with more of your budget for your brand. Which ultimately means more business for us all.' },
  ];
  
  // Service section card ---
  const pageData = [
    { title: "Logistics Solutions", description: "Expert handling of all your eCommerce shipments." },
    { title: "Warehouse Management", description: "Efficient warehousing to store and manage your products." },
    { title: "Customer Support", description: "Round-the-clock support for your customers." }
  ];

  return (
    <div>
       <Navbar/> 
       <Hero 
         title={
           <>
             From<br />
             starting off<br />
             to taking off
           </>
         }
         description={
          <> You started your online business only recently. <br />
             What you need now is a logistics provider so you may <br />
             dedicate more time to your brand and your products.<br />
             Start off with 1,000+ orders per month
          </>
         }
         backgroundImage={image}
         buttonText="GET STARTED"
       />
       <Value values={values} />
       <Service cardData={pageData} />

    </div>
  )
}

export default Startups
