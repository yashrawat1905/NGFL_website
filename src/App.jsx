// App.js
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Landing from './Pages/Landing/Landing';
import Startups from './Pages/Solutions/Startups/Startups';
import Msme from './Pages/Solutions/Msme/Msme';
import Enterprise from './Pages/Solutions/Enterprise/Enterprise';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/start-ups" element={<Startups />} />
        <Route path="/msme" element={<Msme />} />
        <Route path="/enterprise" element={<Enterprise />} />
      </Routes>
    </div>
  );
};

export default App;
