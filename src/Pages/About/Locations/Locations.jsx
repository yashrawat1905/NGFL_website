// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useParams } from 'react-router-dom';
import HeroSection from '../../../Components/Locations/HeroSection';
import Navbar from '../../../Components/Navbar/Navbar';
import Benefits from '../../../Components/Locations/Benefits';
import Library from '../../../Components/Locations/Library'; // Import the Library component
import bgGurgaon from '../../../assets/locations/gurgaon.jpg';
import bgGujarat from '../../../assets/locations/gujarat.jpg';
import other from '../../../assets/locations/other.webp';
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
    image: other,
    description: 'Warehousing services in Gurgaon.',
  },
  hyderabad: {
    location: 'Hyderabad',
    image: other,
    description: 'Warehousing services in Gurgaon.',
  },
  mumbai: {
    location: 'Mumbai',
    image: other,
    description: 'Warehousing services in Gurgaon.',
  },
  kolkata: {
    location: 'Kolkata',
    image: other,
    description: 'Warehousing services in Gurgaon.',
  },
  delhi: {
    location: 'Delhi',
    image: other,
    description: 'Warehousing services in Gurgaon.',
  },
  pune: {
    location: 'Pune',
    image: other,
    description: 'Warehousing services in Mumbai.',
  },
  lucknow: {
    location: 'Lucknow',
    image: other,
    description: 'Warehousing services in Mumbai.',
  },
  bhiwandi: {
    location: 'Bhiwandi',
    image: other,
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
