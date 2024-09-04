// App.js
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Landing from './Pages/Landing/Landing';
import Startups from './Pages/Solutions/Startups/Startups';
import Msme from './Pages/Solutions/Msme/Msme';
import Enterprise from './Pages/Solutions/Enterprise/Enterprise';
import Blogs from './Pages/Resources/Blogs/Blogs';
import Case from './Pages/Resources/Case/Case';
import Glossary from './Pages/Resources/Glossary/Glossary';
import Automotive from './Pages/Industries/Automotive/Automotive';
import Electronics from './Pages/Industries/Electronics/Electronics';
import Energy from './Pages/Industries/Energy/Energy';
import Food from './Pages/Industries/Food/Food';
import Healthcare from './Pages/Industries/Healthcare/Healthcare';
import Story from './Pages/About/Story/Story'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/start-ups" element={<Startups />} />
        <Route path="/msme" element={<Msme />} />
        <Route path="/enterprise" element={<Enterprise />} />
        <Route path="//blogs" element={<Blogs />} />
        <Route path="/case-studies" element={<Case />} />
        <Route path="/glossary" element={<Glossary />} />
        <Route path="/automotive" element={<Automotive />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/energy" element={<Energy />} />
        <Route path="/food-beverages" element={<Food />} />
        <Route path="/healthcare" element={<Healthcare />} />
        <Route path="/our-story" element={<Story />} />
      </Routes>
    </div>
  );
};

export default App;
