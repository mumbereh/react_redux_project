import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage'; // Correct import
import DetailsPage from './components/DetailsPage'; // Correct import

const App = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/details/:id" element={<DetailsPage />} />
  </Routes>
);

export default App;
