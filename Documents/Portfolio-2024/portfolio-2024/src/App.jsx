import React from 'react';
import './styles/App.css'; // Importera din globala CSS
//import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import Footer from './components/Footer';
import { FaReact, FaGithub, FaGitlab, FaDocker, FaMicrosoft, FaNetworkWired } from 'react-icons/fa'; // Import från FontAwesome
import { SiC, SiCplusplus, SiSqlite, SiOracle } from 'react-icons/si';  // Import från Simple Icons
import { SiPython } from 'react-icons/si';

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Me</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

       {/* Home-sektionen */}
       <section id="home">
        <h1>Hello, welcome to my portfolio! 
          <span role="img" aria-label="wave">👋</span>
        </h1>
        <p>I am Mohamad Al-oreibi, a Junior IoT/Embedded Developer. Explore my skills and projects below.</p>
      </section>

      {/* About-sektionen */}
      <section id="about">
        <img src="/e9127e2c-ece6-4819-8204-7dfc88afe678.jpg" alt="Mohamad Al-oreibi" className="profilePic" />
        <h2>About Me</h2>
        <p className="about-description">
          I graduated in the summer from KYH Yrkeshögskola in Göteborg as an IoT developer. 
          I specialize in IoT and embedded systems and i am passionate about creating technology 
          that benefits society. Currently looking for opportunities to apply my skills in 
          real-world projects and further develop my expertise as a junior developer.
        </p>

        {/* Skills under About */}
        <div className="skills-section">
          <h2>My Skills</h2>
          <div className="skills-icons">
            <div className="skill">
              <FaReact className="skill-icon" />
              <p>React</p>
            </div>
            <div className="skill">
              <SiC className="skill-icon" />
              <p>C</p>
            </div>
            <div className="skill">
              <SiCplusplus className="skill-icon" />
              <p>C++</p>
            </div>
            <div className="skill">
              <FaGithub className="skill-icon" />
              <p>GitHub</p>
            </div>
            <div className="skill">
              <FaGitlab className="skill-icon" />
              <p>GitLab</p>
            </div>
            <div className="skill">
              <SiPython className="skill-icon" />
              <p>Python</p>
            </div>
            <div className="skill">
              <FaDocker className="skill-icon" />
              <p>Docker</p>
            </div>
            <div className="skill">
              <SiSqlite className="skill-icon" />
              <p>SQLite</p>
            </div>
            <div className="skill">
              <FaMicrosoft className="skill-icon" />
              <p>Azure</p>
            </div>
            <div className="skill">
              <FaNetworkWired className="skill-icon" />
              <p>Wireshark</p>
            </div>
            <div className="skill">
              <SiOracle className="skill-icon" />
              <p>Oracle VM VirtualBox</p>
            </div>
          </div>
        </div>
      </section>


      {/* Projects-sektionen */}
      <section id="projects">
      <span role="img" aria-label="construction">🚧</span> Coming Soon
      </section>

      {/* Contact-sektionen */}
      <section id="contact">
        <h2>Contact Me</h2>
        <p>You can reach me at:</p>
        <ul className="contact-info">
          <li>Email: <a href="mailto:Moh2567@outlook.com">Moh2567@outlook.com</a></li>
          <li>LinkedIn: <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">Mohamad Al-oreibi</a></li>
        </ul>
      </section>

      {/* Footer längst ner på sidan */}
      <Footer />
    </div>
  );
};

export default App;