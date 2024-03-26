import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about-page-container">
      <button>About me</button>
      <button>Experience</button>
      <button>Skills</button>
      <button>Contacts</button>
    </div>
  );
};

export default About;