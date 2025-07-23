import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <div className="App" style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)', fontFamily: 'Poppins, Arial, sans-serif' }}>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
