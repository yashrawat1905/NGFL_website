// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Msme.css'
import Navbar from '../../../Components/Navbar/Navbar'
import Hero from '../../../Components/Solutions/Hero'
import image from '../../../assets/solutions/msmebg.png'
import Value from '../../../Components/Solutions/Value'
import Service from '../../../Components/Solutions/Sevice'
import Footer from '../../../Components/Footer/Footer'
import msme from '../../../assets/solutions/msme.png'

const Msme = () => {
    // Value section ---
    const values = [
      { title: 'Boost Your Efficiency', description: 'We streamline your logistics operations, helping you reduce lead times and deliver better service to your customers. We optimize your transportation routes to reduce shipping costs while ensuring timely deliveries to your customers.' },
      { title: 'Flexible Solutions', description: 'Our adaptable logistics services can grow alongside your business, allowing you to respond quickly to changes in the market and customer needs.' },
      { title: 'Valuable Insights', description: 'We provide you with insights into your supply chain, helping you make informed decisions that improve performance and profitability.' },
    ];
    
    // Service section cards
    const pageData = [
      { title: "Multi-Channel Fulfillment", description: "Our fulfillment services ensure you can meet the demands of your customers across various channels, making it easier for you to grow.", image: msme },
      { title: "Expert Operational Consulting", description: "Our consultants work with you to improve your processes, cut costs, and streamline your supply chain to enhance your overall operations.", image: msme },
      { title: "Lead generation", description: "Take advantage of our proprietary database to find potential buyers for your finished goods, as well as alternate suppliers for your supplies. We are more than just a logistics company – we are your growth partner.", image: msme },
      { title: "Award-winning legacy", description: "You will be able to leverage our inhouse Customs Brokerage, Freight Forwarding and Trucking Brokerage teams to obtain an all under-one-roof solution – so you don’t have to waste time managing multiple vendors.", image: msme}
    ];

  return (
    <div>
        <Navbar/>
        <Hero
         title={
          <>
           Flexible<br/>
           Solutions for<br/>
           Expanding Businesses
          </>
        }
        description={
         <> Streamlining your operations for greater success. With our flexible logistics services, we help you respond to market changes and deliver exceptional value to your customers.

         </>
        }
        backgroundImage={image}
        buttonText="GET STARTED"
      />
       <Value header="Our Value Proposition for MSMEs" values={values} />
       <Service cardData={pageData} />
       <Footer/>
    </div>
  )
}

export default Msme
