import React from 'react';

const heroStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '60vh',
  color: '#fff',
  textAlign: 'center',
  paddingTop: '40px',
};

const mainHeading = {
  fontSize: '3.2rem',
  fontWeight: 'bold',
  margin: '32px 0 16px 0',
  letterSpacing: '1px',
  lineHeight: 1.1,
};

const subHeading = {
  fontSize: '1.5rem',
  color: '#b97ebf',
  margin: '24px 0 0 0',
  fontWeight: '400',
  letterSpacing: '0.5px',
};

const plansText = {
  fontSize: '1.2rem',
  color: '#222',
  margin: '32px 0 0 0',
  fontWeight: '400',
  letterSpacing: '0.5px',
};

const Home = () => {
  return (
    <section style={heroStyle}>
      <h1 style={mainHeading}>Not Sure Where to Advertise?<br/>We've Got You Covered!</h1>
      <div style={subHeading}>
        If you're a startup or simply unsure where to promote your product, and you're working<br />
        with a limited budget
      </div>
      <div style={plansText}>
        — our Plans are built just for you :)
      </div>
    </section>
  );
};

export default Home; 