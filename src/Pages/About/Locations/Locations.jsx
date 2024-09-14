// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useParams } from 'react-router-dom';
import HeroSection from '../../../Components/Locations/HeroSection';
import Navbar from '../../../Components/Navbar/Navbar';
import Benefits from '../../../Components/Locations/Benefits';
import Library from '../../../Components/Locations/Library'; // Import the Library component
import bgGurgaon from '../../../assets/locations/gurgaon.jpg';
import Custom from '../../../Components/Locations/Custom';
import Clients from '../../../Components/Clients/Clients'

// Example warehouse data
const warehouseData = {
  chennai: {
    location: 'Chennai',
    image: '/images/chennai-warehouse.jpg',
    description: 'Warehousing services in Chennai.',
  },
  mumbai: {
    location: 'Mumbai',
    image: '/images/mumbai-warehouse.jpg',
    description: 'Warehousing services in Mumbai.',
  },
  gurgaon: {
    location: 'Gurgaon',
    image: bgGurgaon,
    description: 'Warehousing services in Gurgaon.',
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
      <Custom />
      <Clients />
    </div>
  );
};

export default WarehousePage;
