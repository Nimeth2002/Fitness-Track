import React from 'react';
import styled from 'styled-components';

function About() {
  const containerStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
  };

  const headingStyle = {
    fontSize: '32px',
    color: '#333',
    marginBottom: '20px',
    textAlign: 'center'
  };

  const paragraphStyle = {
    fontSize: '18px',
    color: '#666',
    lineHeight: '1.5',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle }>About Us</h1>
      <p style={paragraphStyle}>Welcome to Fitness Revolution 💪.</p>
      <p style={paragraphStyle}>At Fitness Revolution, we're rewriting the fitness rulebook. Tired of outdated tracking methods, we created a groundbreaking Fitness Tracking app. It's not just about hitting goals; it's about empowering you to control your health journey like never before. Our mission? Inspire and empower healthier lives through innovation and personalized solutions. Everyone deserves access to enjoyable, effective fitness tools. With cutting-edge tracking and analytics, we're changing how people view their wellness journey.Join us at Fitness Revolution and let's redefine fitness together.</p>
      <br></br>
      <p style={paragraphStyle}>Explore our website and take charge of your fitness journey with our intuitive tracking tools!! 🏋️‍♂️                    </p>
    </div>
  );
}

export default About;

