import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from '../components/HomePage';
import DetailsPage from '../components/DetailsPage';

const Navbar = () => (
  <>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/details">Details</Link>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/details" element={<DetailsPage />} />
    </Routes>
  </>
);

export default Navbar;
