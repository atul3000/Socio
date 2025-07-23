import React from 'react';
import './Navbar.css';

const GetStarted = () => {
  return (
    <button className="getstarted-btn">
      GET STARTED
      <svg className="getstarted-arrow" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="16" fill="#6B5CA5"/>
        <path d="M12 16H20" stroke="#FEFEFE" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M17 13L20 16L17 19" stroke="#FEFEFE" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
};

export default GetStarted; 