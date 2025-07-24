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
        left: tabCenter - 75, // 150px heart width / 2 = 75px
        opacity: 1
      });
    }
  }, [activeIdx]);

  useLayoutEffect(() => {
    // Small delay to ensure DOM is ready
    const timer = setTimeout(updateHeartPosition, 10);
    return () => clearTimeout(timer);
  }, [updateHeartPosition]);

  // Handle window resize
  useLayoutEffect(() => {
    const handleResize = () => updateHeartPosition();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [updateHeartPosition]);

  const handleTabClick = useCallback((idx) => {
    if (idx === activeIdx || isTransitioning) return;
    
    setIsTransitioning(true);
    setActiveIdx(idx);
    
    // Reset transition lock after animation
    setTimeout(() => setIsTransitioning(false), 400);
  }, [activeIdx, isTransitioning]);

  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'space-between', 
      width: '100%', 
      maxWidth: '1400px',
      margin: '32px auto 0',
      padding: '0 40px',
              minHeight: '160px' // Ensure space for larger heart overflow
    }}>
      {/* Logo Block */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'flex-start', 
        minWidth: '208px',
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
            minWidth: '520px',
            padding: '0 32px',
            gap: '56px',
            overflow: 'visible'
          }}
          role="navigation"
          aria-label="Main navigation"
        >
          {/* Animated Heart */}
          <div
            style={{
              position: 'absolute',
              left: `${heartStyle.left}px`,
              top: '-20px',
              width: '128px',
              height: '96px',
              zIndex: 10,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              pointerEvents: 'none',
              opacity: heartStyle.opacity,
              transform: 'translateZ(0)', // Force hardware acceleration
              transition: 'left 0.4s cubic-bezier(0.77, 0, 0.18, 1), opacity 0.3s ease',
            }}
            aria-hidden="true"
          >
            <svg 
              style={{ 
                position: 'absolute',
                left: 0,
                top: 0,
                width: '128px',
                height: '96px',
                filter: 'drop-shadow(0px 4px 8px rgba(0,0,0,0.18))'
              }}
              xmlns="http://www.w3.org/2000/svg" 
              width="128" 
              height="96" 
              viewBox="0 0 176 160" 
              fill="none"
              role="img"
              aria-label="Active tab indicator"
            >
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
            <span 
              style={{
                position: 'relative',
                fontFamily: "'Irish Grover', cursive",
                fontWeight: 400,
                fontSize: '24px',
                letterSpacing: '4.8px',
                color: 'transparent',
                background: 'linear-gradient(90deg, #6B5CA5 0%, #3B3347 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                textShadow: '0px 4px 8px rgba(0,0,0,0.18), 0px 8px 12px #b7a6e3',
                padding: '16px 24px 12px 24px',
                zIndex: 11,
                textAlign: 'center',
                userSelect: 'none',
                whiteSpace: 'nowrap'
              }}
            >
              {TABS[activeIdx].label}
            </span>
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
                minWidth: '120px',
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
        minWidth: '200px', 
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
            transform: 'translateZ(0)' // Hardware acceleration
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
              transition: 'transform 0.2s ease'
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
  );
};

export default Navbar;