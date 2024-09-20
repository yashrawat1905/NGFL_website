// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useParams } from 'react-router-dom';
import HeroSection from '../../../Components/Locations/HeroSection';
import Navbar from '../../../Components/Navbar/Navbar';
import Benefits from '../../../Components/Locations/Benefits';
import Library from '../../../Components/Locations/Library'; // Import the Library component
import bgGurgaon from '../../../assets/locations/gurgaon.jpg';
import bgGujarat from '../../../assets/locations/gujarat.jpg';
import Custom from '../../../Components/Locations/Custom';
import Clients from '../../../Components/Clients/Clients'
import CaseStudy from '../../../Components/Locations/CaseStudy';
import Warehousingsols from '../../../Components/Locations/Warehousingsols';

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
    image: bgGurgaon,
    description: 'Warehousing services in Gurgaon.',
  },
  bangaluru: {
    location: 'Bangaluru',
    image: bgGurgaon,
    description: 'Warehousing services in Gurgaon.',
  },
  hyderabad: {
    location: 'Hyderabad',
    image: bgGurgaon,
    description: 'Warehousing services in Gurgaon.',
  },
  mumbai: {
    location: 'Mumbai',
    image: bgGurgaon,
    description: 'Warehousing services in Gurgaon.',
  },
  kolkata: {
    location: 'Kolkata',
    image: bgGurgaon,
    description: 'Warehousing services in Gurgaon.',
  },
  delhi: {
    location: 'Delhi',
    image: bgGurgaon,
    description: 'Warehousing services in Gurgaon.',
  },
  pune: {
    location: 'Pune',
    image: '/images/mumbai-warehouse.jpg',
    description: 'Warehousing services in Mumbai.',
  },
  lucknow: {
    location: 'Lucknow',
    image: '/images/mumbai-warehouse.jpg',
    description: 'Warehousing services in Mumbai.',
  },
  bhiwandi: {
    location: 'Bhiwandi',
    image: '/images/mumbai-warehouse.jpg',
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
      <Warehousingsols />
    </div>
  );
};

export default WarehousePage;
