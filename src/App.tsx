import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import "./assets/styles/global.css";
import Work from './pages/Work';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <About />
            <Work />
            <Contact />
            </>
        } />
        {/* ... other routes */}
      </Routes>
    </Router>
  );
}
