import React from 'react';
import '../styles/HeroStyles.module.css';
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';  // Exempel på ikoner från react-icons

const Hero = () => {
  return (
    <div className="hero">
      <img src="/e9127e2c-ece6-4819-8204-7dfc88afe678.jpg" alt="Mohamad Al-oreibi" className="profilePic" />
      <h1>Mohamad Al-oreibi</h1>
      <p>Junior IoT/Embedded Developer</p>

      {/* Lägg till en beskrivning om dig själv */}
      <p className="about-description">
        I graduated in the summer from KYH Yrkeshögskola in Göteborg as an IoT developer. 
        I specialize in IoT and embedded systems and i am passionate about creating technology 
        that benefits society. Currently looking for opportunities to apply my skills in 
        real-world projects and further develop my expertise as a junior developer.
      </p>

      {/* Skills-sektionen */}
      <div className="skills-section">
        <h2>My Skills</h2>
        <div className="skills-icons">
          <div className="skill">
            <FaReact className="skill-icon" />
            <p>React</p>
          </div>
          <div className="skill">
            <FaNodeJs className="skill-icon" />
            <p>Node.js</p>
          </div>
          <div className="skill">
            <FaDatabase className="skill-icon" />
            <p>Databases</p>
          </div>
          {/* Lägg till fler skills och ikoner här */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
