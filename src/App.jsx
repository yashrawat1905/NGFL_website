// App.js
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Landing from './Pages/Landing/Landing';
import Startups from './Pages/Solutions/Startups/Startups';
import Msme from './Pages/Solutions/Msme/Msme';
import Enterprise from './Pages/Solutions/Enterprise/Enterprise';
import Blogs from './Pages/Resources/Blogs/Blogs';
import Automotive from './Pages/Industries/Automotive/Automotive';
import Electronics from './Pages/Industries/Electronics/Electronics';
import Energy from './Pages/Industries/Energy/Energy';
import Food from './Pages/Industries/Food/Food';
import Healthcare from './Pages/Industries/Healthcare/Healthcare';
import Apparels from './Pages/Industries/Apparels/Apparels';
import Retail from './Pages/Industries/Retail/Retail';
import Whitegoods from './Pages/Industries/Whitegoods/Whitegoods'; 
import Story from './Pages/About/Story/Story';
import WarehousePage from './Pages/About/Locations/Locations';  // Import the dynamic location page
import BlogDetail from './Components/BlogDetail/BlogDetail'; // Import your BlogDetail component
import PrivacyPolicy from './Pages/About/Privacy-policy/pp';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/start-ups" element={<Startups />} />
        <Route path="/msme" element={<Msme />} />
        <Route path="/enterprise" element={<Enterprise />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:title" element={<BlogDetail />} /> {/* Add the dynamic blog detail route */}
        <Route path="/automotive" element={<Automotive />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/energy" element={<Energy />} />
        <Route path="/food" element={<Food />} />
        <Route path="/healthcare" element={<Healthcare />} />
        <Route path="/apparel-fashion" element={<Apparels />} />
        <Route path="/retail" element={<Retail />} />
        <Route path="/white-goods" element={<Whitegoods />} />
        <Route path="/our-story" element={<Story />} />
        {/* Dynamic warehouse location route */}
        <Route path="/locations/:location" element={<WarehousePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </div>
  );
};

export default App;
