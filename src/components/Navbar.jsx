import React, { useRef, useState, useLayoutEffect, useCallback } from 'react';

const TABS = [
  { label: 'SERVICES' },
  { label: 'PLANS' },
  { label: 'ABOUT US' },
];

const Navbar = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const tabRefs = useRef([]);
  const navContainerRef = useRef(null);
  const [heartStyle, setHeartStyle] = useState({ left: 0, opacity: 0 });

  const updateHeartPosition = useCallback(() => {
    const activeTab = tabRefs.current[activeIdx];
    const container = navContainerRef.current;
    
    if (activeTab && container) {
      const tabRect = activeTab.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      const relativeLeft = tabRect.left - containerRect.left;
      const tabCenter = relativeLeft + (tabRect.width / 2);
      
      setHeartStyle({
        left: tabCenter - 90, // 180px heart width / 2 = 90px
        opacity: 1
      });
    }
  }, [activeIdx]);

  useLayoutEffect(() => {
    const timer = setTimeout(updateHeartPosition, 10);
    return () => clearTimeout(timer);
  }, [updateHeartPosition]);

  useLayoutEffect(() => {
    const handleResize = () => updateHeartPosition();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [updateHeartPosition]);

  const handleTabClick = useCallback((idx) => {
    if (idx === activeIdx || isTransitioning) return;
    
    setIsTransitioning(true);
    setActiveIdx(idx);
    
    setTimeout(() => setIsTransitioning(false), 400);
  }, [activeIdx, isTransitioning]);

  return (
    <>
      {/* Full page background */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        background:'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
        zIndex: -1
      }} />
      
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        width: '100%', 
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '',
        minHeight: '200px'
      }}>
        {/* Logo Block */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'flex-start', 
          minWidth: '250px',
          flexShrink: 0
        }}>
          <span 
            style={{ 
              fontFamily: "'Irish Grover', cursive",
              fontWeight: 400,
              fontSize: '80px',
              letterSpacing: '19.2px',
              color: '#FEFEFE',
              textShadow: '0px 10px 4px rgba(0, 0, 0, 0.25)',
              lineHeight: '1',
              margin: 0,
              userSelect: 'none'
            }}
          >
            PROMO
          </span>
          <span 
            style={{ 
              color: '#e0e0ff',
              fontSize: '16px',
              letterSpacing: '0.1em',
              marginTop: '4px',
              fontFamily: "'Poppins', Arial, sans-serif",
              userSelect: 'none'
            }}
          >
            By BRO'S Studio
          </span>
        </div>

        {/* Center Navigation */}
        <div style={{ 
          flex: 1, 
          display: 'flex', 
          justifyContent: 'center',
          position: 'relative'
        }}>
          <nav 
            ref={navContainerRef}
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(92deg, #3B3347 24.19%, #907DAD 120.96%)',
              borderRadius: '1000px',
              boxShadow: '0px 5px 8px 0px rgba(0,0,0,0.18)',
              height: '72px',
              minWidth: '560px',
              padding: '0 32px',
              gap: '56px',
              overflow: 'visible'
            }}
            role="navigation"
            aria-label="Main navigation"
          >
            {/* Animated Heart - Much Bigger */}
            <div
              style={{
                position: 'absolute',
                left: `${heartStyle.left}px`,
                top: '-50px',
                width: '180px',
                height: '140px',
                zIndex: 10,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                pointerEvents: 'none',
                opacity: heartStyle.opacity,
                transform: 'translateZ(0)',
                transition: 'left 0.4s cubic-bezier(0.77, 0, 0.18, 1), opacity 0.3s ease',
              }}
              aria-hidden="true"
            >
              <svg 
                style={{ 
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  width: '180px',
                  height: '140px',
                  filter: 'drop-shadow(0px 6px 12px rgba(0,0,0,0.25))'
                }}
                xmlns="http://www.w3.org/2000/svg" 
                width="180" 
                height="140" 
                viewBox="0 0 220 180" 
                fill="none"
                role="img"
                aria-label="Active tab indicator"
              >
                <g filter="url(#filter0_dd_483_354)">
                  <path d="M12 45C9.5 22 35 8 52 23L80 48C89 56 103 56 113 49L152 18C170 4 195 18 194 38L188 115C187.5 124 182 132 174 137L110 175C101 181 89 180 81 174L30 140C23 135 18 127 17 118L12 45Z" fill="#D9D9D9"/>
                </g>
                <defs>
                  <filter id="filter0_dd_483_354" x="0" y="0" width="220" height="180" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dx="6" dy="3"/>
                    <feGaussianBlur stdDeviation="8"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_483_354"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dx="-6" dy="5"/>
                    <feGaussianBlur stdDeviation="3"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"/>
                    <feBlend mode="normal" in2="effect1_dropShadow_483_354" result="effect2_dropShadow_483_354"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_483_354" result="shape"/>
                  </filter>
                </defs>
              </svg>
              
              {/* Text inside heart - properly sized and positioned */}
              <div 
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '140px',
                  textAlign: 'center',
                  zIndex: 11,
                }}
              >
                <span 
                  style={{
                    fontFamily: "'Irish Grover', cursive",
                    fontWeight: 400,
                    fontSize: '18px',
                    letterSpacing: '2.5px',
                    color: 'transparent',
                    background: 'linear-gradient(90deg, #6B5CA5 0%, #3B3347 100%)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    textShadow: '0px 4px 8px rgba(0,0,0,0.18), 0px 8px 12px #b7a6e3',
                    userSelect: 'none',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: 'block',
                    maxWidth: '100%'
                  }}
                >
                  {TABS[activeIdx].label}
                </span>
              </div>
            </div>

            {/* Tabs */}
            {TABS.map((tab, idx) => (
              <button
                key={tab.label}
                ref={el => (tabRefs.current[idx] = el)}
                onClick={() => handleTabClick(idx)}
                disabled={isTransitioning}
                style={{
                  fontFamily: "'Irish Grover', cursive",
                  fontWeight: 400,
                  fontSize: '20px',
                  letterSpacing: '4px',
                  color: activeIdx === idx ? 'transparent' : '#FEFEFE',
                  background: 'none',
                  border: 'none',
                  outline: 'none',
                  cursor: activeIdx === idx ? 'default' : (isTransitioning ? 'wait' : 'pointer'),
                  textShadow: '0px 4px 8px rgba(0,0,0,0.18)',
                  padding: '20px 12px',
                  minWidth: '130px',
                  textAlign: 'center',
                  transition: 'color 0.2s ease',
                  position: 'relative',
                  zIndex: 5,
                  userSelect: 'none',
                  whiteSpace: 'nowrap',
                  WebkitTapHighlightColor: 'transparent'
                }}
                onMouseEnter={(e) => {
                  if (activeIdx !== idx && !isTransitioning) {
                    e.target.style.color = '#b7a6e3';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeIdx !== idx) {
                    e.target.style.color = '#FEFEFE';
                  }
                }}
                onFocus={(e) => {
                  if (activeIdx !== idx && !isTransitioning) {
                    e.target.style.color = '#b7a6e3';
                  }
                }}
                onBlur={(e) => {
                  if (activeIdx !== idx) {
                    e.target.style.color = '#FEFEFE';
                  }
                }}
                aria-label={`Navigate to ${tab.label}`}
                aria-current={activeIdx === idx ? 'page' : undefined}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Get Started Button */}
        <div style={{ 
          minWidth: '220px', 
          display: 'flex', 
          justifyContent: 'flex-end', 
          alignItems: 'center',
          flexShrink: 0
        }}>
          <button 
            style={{
              background: 'linear-gradient(92deg, #3B3347 24.19%, #907DAD 120.96%)',
              color: '#FEFEFE',
              border: 'none',
              borderRadius: '1000px',
              padding: '0 38px',
              height: '72px',
              fontSize: '20px',
              fontWeight: 400,
              fontFamily: "'Irish Grover', cursive",
              letterSpacing: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0px 5px 8px 0px rgba(0,0,0,0.18)',
              cursor: 'pointer',
              gap: '18px',
              textShadow: '0px 4px 8px rgba(0,0,0,0.18)',
              transition: 'all 0.2s ease',
              userSelect: 'none',
              whiteSpace: 'nowrap',
              WebkitTapHighlightColor: 'transparent',
              transform: 'translateZ(0)'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'linear-gradient(92deg, #6B5CA5 24.19%, #3B3347 120.96%)';
              e.target.style.transform = 'translateY(-2px) translateZ(0)';
              e.target.style.boxShadow = '0px 8px 16px 0px rgba(0,0,0,0.25)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'linear-gradient(92deg, #3B3347 24.19%, #907DAD 120.96%)';
              e.target.style.transform = 'translateY(0) translateZ(0)';
              e.target.style.boxShadow = '0px 5px 8px 0px rgba(0,0,0,0.18)';
            }}
            onMouseDown={(e) => {
              e.target.style.transform = 'translateY(1px) translateZ(0)';
            }}
            onMouseUp={(e) => {
              e.target.style.transform = 'translateY(-2px) translateZ(0)';
            }}
            onFocus={(e) => {
              e.target.style.background = 'linear-gradient(92deg, #6B5CA5 24.19%, #3B3347 120.96%)';
              e.target.style.transform = 'translateY(-2px) translateZ(0)';
              e.target.style.boxShadow = '0px 8px 16px 0px rgba(0,0,0,0.25)';
            }}
            onBlur={(e) => {
              e.target.style.background = 'linear-gradient(92deg, #3B3347 24.19%, #907DAD 120.96%)';
              e.target.style.transform = 'translateY(0) translateZ(0)';
              e.target.style.boxShadow = '0px 5px 8px 0px rgba(0,0,0,0.18)';
            }}
            aria-label="Get started with our services"
          >
            GET STARTED
            <svg 
              style={{ 
                width: '32px', 
                height: '32px',
                flexShrink: 0,
                transition: 'transform 0.2s ease',

              }} 
              viewBox="0 0 32 32" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <circle cx="16" cy="16" r="16" fill="#6B5CA5"/>
              <path d="M12 16H20" stroke="#FEFEFE" strokeWidth="2.5" strokeLinecap="round"/>
              <path d="M17 13L20 16L17 19" stroke="#FEFEFE" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;