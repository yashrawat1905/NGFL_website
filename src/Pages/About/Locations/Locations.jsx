// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useParams } from 'react-router-dom';
import HeroSection from '../../../Components/Locations/HeroSection';
import Navbar from '../../../Components/Navbar/Navbar';
import Benefits from '../../../Components/Locations/Benefits';
import Library from '../../../Components/Locations/Library'; // Import the Library component
import bgGurgaon from '../../../assets/locations/gurgaon.jpg';
import bgGujarat from '../../../assets/locations/gujarat.jpg';
import other from '../../../assets/locations/other.jpg';
import other1 from '../../../assets/locations/other1.jpg';
import other2 from '../../../assets/locations/other2.jpg';
import other3 from '../../../assets/locations/other3.jpg';
import other4 from '../../../assets/locations/other4.jpg';
import other5 from '../../../assets/locations/other5.jpg';
import other6 from '../../../assets/locations/other6.jpg';
import other7 from '../../../assets/locations/other7.jpg';
import other8 from '../../../assets/locations/other8.jpg';
import Custom from '../../../Components/Locations/Custom';
import Clients from '../../../Components/Clients/Clients'
import CaseStudy from '../../../Components/Locations/CaseStudy';
import Footer from '../../../Components/Footer/Footer';

// Example warehouse data
const warehouseData = {
  gurgaon: {
    location: 'Gurgaon',
    image: bgGurgaon,
    description: 'Warehousing services in Gurgaon.',
  },
  gujarat: {
    location: 'Gujarat',
    image: bgGujarat,
    description: 'Warehousing services in Gurgaon.',
  },
  chennai: {
    location: 'Chennai',
    image: other,
    description: 'Warehousing services in Gurgaon.',
  },
  bengaluru: {
    location: 'Bengaluru',
    image: other1,
    description: 'Warehousing services in Gurgaon.',
  },
  hyderabad: {
    location: 'Hyderabad',
    image: other2,
    description: 'Warehousing services in Gurgaon.',
  },
  mumbai: {
    location: 'Mumbai',
    image: other3,
    description: 'Warehousing services in Gurgaon.',
  },
  kolkata: {
    location: 'Kolkata',
    image: other4,
    description: 'Warehousing services in Gurgaon.',
  },
  delhi: {
    location: 'Delhi',
    image: other5,
    description: 'Warehousing services in Gurgaon.',
  },
  pune: {
    location: 'Pune',
    image: other6,
    description: 'Warehousing services in Mumbai.',
  },
  lucknow: {
    location: 'Lucknow',
    image: other7,
    description: 'Warehousing services in Mumbai.',
  },
  bhiwandi: {
    location: 'Bhiwandi',
    image: other8,
    description: 'Warehousing services in Mumbai.',
  },

};

const WarehousePage = () => {
  const { location } = useParams(); // Use useParams to get route parameters
  const warehouse = warehouseData[location.toLowerCase()];

  if (!warehouse) {
    return <div>Location not found</div>;
  }

  return (
    <div>
      <Navbar />
      <HeroSection
        location={warehouse.location}
        description={warehouse.description}
        image={warehouse.image}
      />
      <Benefits location={warehouse.location} /> {/* Pass the location to Benefits */}
      
      {/* Render Library component only if location is Gurgaon */}
      {warehouse.location.toLowerCase() === 'gurgaon' && (
        <Library location={warehouse.location} />
      )}
      {warehouse.location.toLowerCase() === 'gurgaon' && (
        <CaseStudy location={warehouse.location} />
      )}
      <Custom />
      <Clients />
      <Footer/>
    </div>
  );
};

export default WarehousePage;
