import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';

function App() {
  return (
    <div
      className="App"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
        fontFamily: 'Poppins, Arial, sans-serif',
      }}
    >
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
