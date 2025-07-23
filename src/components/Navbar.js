import React, { useRef, useState, useLayoutEffect } from 'react';
import './Navbar.css';
import GetStarted from './GetStarted';

const TABS = [
  { label: 'SERVICES' },
  { label: 'PLANS' },
  { label: 'ABOUT US' },
];

const Navbar = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const tabRefs = useRef([]);
  const [heartStyle, setHeartStyle] = useState({ left: 0, width: 0 });

  useLayoutEffect(() => {
    if (tabRefs.current[activeIdx]) {
      const node = tabRefs.current[activeIdx];
      const rect = node.getBoundingClientRect();
      const parentRect = node.parentNode.getBoundingClientRect();
      setHeartStyle({
        left: node.offsetLeft + node.offsetWidth / 2 - 64, // center heart
        width: node.offsetWidth,
      });
    }
  }, [activeIdx]);

  return (
    <div className="navbar-container">
      <div className="navbar-logo-block">
        <span className="navbar-logo">PROMO</span>
        <span className="navbar-subtitle">By BRO’S Studio</span>
      </div>
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
        <div className="navbar-center" style={{ position: 'relative' }}>
          {/* Animated Heart */}
          <div
            className="navbar-heart-animated"
            style={{
              left: heartStyle.left,
              transition: 'left 0.4s cubic-bezier(.77,0,.18,1)',
            }}
          >
            <svg className="navbar-heart-svg" xmlns="http://www.w3.org/2000/svg" width="128" height="96" viewBox="0 0 176 160" fill="none">
              <g filter="url(#filter0_dd_483_354)">
                <path d="M9.45354 38.2505C7.49778 20.2295 28.6034 9.11036 42.3603 20.9141L66.2703 41.4294C73.4983 47.6312 84.0968 47.8758 91.6032 42.0141L125.387 15.6326C139.033 4.9765 158.853 15.516 157.648 32.7878L153.227 96.1469C152.757 102.894 148.908 108.945 142.998 112.233L89.3401 142.08C82.8033 145.716 74.7837 145.401 68.5527 141.262L24.7175 112.148C19.771 108.862 16.5402 103.549 15.8995 97.6454L9.45354 38.2505Z" fill="#D9D9D9"/>
              </g>
              <defs>
                <filter id="filter0_dd_483_354" x="0.326721" y="0.248922" width="175.473" height="159.453" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dx="5" dy="2"/>
                  <feGaussianBlur stdDeviation="6.55"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_483_354"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dx="-5" dy="4"/>
                  <feGaussianBlur stdDeviation="2"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                  <feBlend mode="normal" in2="effect1_dropShadow_483_354" result="effect2_dropShadow_483_354"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_483_354" result="shape"/>
                </filter>
              </defs>
            </svg>
            <span className="navbar-services-text">{TABS[activeIdx].label}</span>
          </div>
          {/* Tabs */}
          {TABS.map((tab, idx) => (
            <button
              key={tab.label}
              className={`navbar-link${activeIdx === idx ? ' active' : ''}`}
              ref={el => (tabRefs.current[idx] = el)}
              onClick={() => setActiveIdx(idx)}
              style={{ position: 'relative', zIndex: 3 }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <div className="navbar-getstarted-wrapper">
        <GetStarted />
      </div>
    </div>
  );
};

export default Navbar; 