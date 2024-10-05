// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Startups.css'
import Navbar from '../../../Components/Navbar/Navbar';
import Hero from '../../../Components/Solutions/Hero';
import image from '../../../assets/solutions/hero.png';
import Value from '../../../Components/Solutions/Value';
import Service from '../../../Components/Solutions/Sevice';
import card1 from '../../../assets/solutions/startup.jpg';
import card3 from '../../../assets/solutions/startup2.jpg';
import Footer from '../../../Components/Footer/Footer';

const Startups = () => {
  // Value section ---
  const values = [
    { title: 'Flexible Pricing', description: 'We understand that every Rupee counts for you. That’s why we offer flexible and affordable pricing to help you manage your logistics and warehousing costs without requiring long term commitments.' },
    { title: 'Scalable support', description: 'As you scale, our logistics solutions grow with you. We’re here to ensure you have the support you need to meet your customers’ demands, no matter how quickly your business expands.' },
    { title: 'Guided Expertise', description: 'Managing logistics when you are starting out can be overwhelming. Our experienced consultants are here to guide you through the logistics maze, helping you streamline operations and focus on what you do best.' },
  ];
  
  // Service section card ---
  const pageData = [
    { title: "Tailored Logistics Solutions", description: "We create customized warehousing and distribution services that fit your unique business needs and growth plans.", image: card1 },
    { title: "Smart Inventory Management", description: "Our inventory management systems help you keep track of stock, reduce holding costs, and fulfill orders accurately, making your life easier.", image: card3 },
    { title: "Strategic Supply Chain Consultation", description: "Get expert advice on optimizing your supply chain and managing risks, helping you build a strong foundation for your future success.", image: card1 },
    { title: "Paperwork, Registrations and Compliances", description: "Figuring out compliances can be quite a task. We help you fulfil compliance requirements so you can focus on your core job – growing your business.", image: card3},
    { title: "Lead generation", description: "Take advantage of our proprietary database to find potential buyers for your finished goods, as well as alternate suppliers for your supplies. We are more than just a logistics company – we are your growth partner.", image: card1},
    { title: "Quick Setup, No Hassles", description: "We know speed is crucial for startups. That’s why we offer simple and fast onboarding so you can get your operations up and running in no time.", image: card3}
  ];

  return (
    <div>
       <Navbar/> 
       <Hero 
         title={
           <>
             From 
             starting off<br/>
             to taking off
           </>
         }
         description={
          <> Empowering your journey from idea to reality.<br/> Our tailored logistics solutions are designed to support your growth, helping you focus on what you do best.
          </>
         }
         backgroundImage={image}
         buttonText="GET STARTED"
       />
       <Value header="Our Value Proposition for Startups" values={values} />
       <Service cardData={pageData} />
       <Footer/>

    </div>
  )
}

export default Startups
