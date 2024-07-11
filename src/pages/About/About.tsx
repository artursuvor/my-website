import React, { useState } from 'react';
import { useTheme } from '../../ThemeContext.tsx';
import './About.css';

const About: React.FC = () => {
  const { darkMode } = useTheme();
  const [sections, setSections] = useState({
    aboutMe: false,
    experience: false,
    skills: false,
    contacts: false,
  });

  const toggleSection = (section: keyof typeof sections) => {
    setSections(prevSections => ({
      ...prevSections,
      [section]: !prevSections[section],
    }));
  };

  return (
    <div className={`about-page-container ${darkMode ? 'dark-mode' : ''}`}>
      <button onClick={() => toggleSection('aboutMe')} className="about-section-button">
        About me
      </button>
      {sections.aboutMe && (
        <p className="about-description">
  At the age of 20, I discovered a passion for web development, and it has been my main focus
  ever since. I specialize in creating responsive and cross-browser interfaces, ensuring that
  users have a seamless experience no matter what device or browser they use. I'm always striving
  for personal growth, taking various courses and engaging in self-learning to stay up-to-date
  with the latest trends and technologies. This dedication has helped me hone my skills in HTML,
  CSS, JavaScript, and various front-end frameworks.
  <br /><br />
  Beyond technical skills, I bring a creative approach and a problem-solving mindset to every project.
  I enjoy coming up with new ideas and bringing them to life, making web applications not only functional
  but also visually appealing.
  <br /><br />
  In my free time, I love playing video games, which helps me develop strategic thinking and find creative
  solutions. I also enjoy exploring new places, which broadens my horizons and provides inspiration for new projects.
  I'm ready for new challenges and excited about the opportunity to join a dynamic team where I can grow and make
  meaningful contributions.
</p>
      )}

      <button onClick={() => toggleSection('experience')} className="about-section-button">
        Experience
      </button>
      {sections.experience && (
        <>
          <div className="about-experience">
            <p className="experience-date">2023 Sep. - 2024 Apr.</p>
            <p className="experience-company">Softocean</p>
            <p className="experience-role">Front-end developer</p>
            <p>
              I performed front-end development in accordance with the designs provided through
              Figma. Most frequently, I utilized React with TypeScript for my projects. However,
              occasionally, I had to resort to pure JavaScript due to outdated libraries for React.
              Additionally, I engaged in crafting animations to enhance the user interface of web
              applications.
            </p>
          </div>
          <div className="about-experience">
            <p className="experience-date">2022 Aug. - 2023 Feb.</p>
            <p className="experience-company">Freelance</p>
            <p className="experience-role">Full-stack developer</p>
            <p>
              I performed layout for websites based on designs or customer inspirations, created
              animations, and occasionally had to integrate admin panels or databases. I also had
              to make additions or corrections to existing websites from time to time, striving to
              complete orders as quickly as possible.
            </p>
          </div>
        </>
      )}

      <button onClick={() => toggleSection('skills')} className="about-section-button">
        Skills
      </button>
      {sections.skills && (
        <div className="about-skills">
          <div className="skills-icons">
            <div>
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original-wordmark.svg" title="Git" alt="Git" width="40" height="40" />&nbsp;
              <p>GIT</p>
            </div>
            <div>
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/jira/jira-original-wordmark.svg" title="Jira" alt="Jira" width="40" height="40" />&nbsp;
              <p>Jira</p>
            </div>
            <div>
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg" title="Figma" alt="Figma" width="40" height="40" />&nbsp;
              <p>Figma</p>
            </div>
            <div>
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/slack/slack-original.svg" title="Slack" alt="Slack" width="40" height="40" />&nbsp;
              <p>Slack</p>
            </div>
            <div>
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" title="CSS3" alt="CSS" width="40" height="40" />&nbsp;
              <p>CSS</p>
            </div>
            <div>
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" title="HTML5" alt="HTML" width="40" height="40" />&nbsp;
              <p>HTML</p>
            </div>
            <div>
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" title="MySQL" alt="MySQL" width="40" height="40" />&nbsp;
              <p>MySQL</p>
            </div>
            <div>
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" title="PostgreSQL" alt="PostgreSQL" width="40" height="40" />&nbsp;
              <p>PostgreSQL</p>
            </div>
            <div>
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" title="Node.js" alt="Node.js" width="40" height="40" />&nbsp;
              <p>Node.js</p>
            </div>
            <div>
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/jquery/jquery-original-wordmark.svg" title="jQuery" alt="jQuery" width="40" height="40" />&nbsp;
              <p>jQuery</p>
            </div>
            <div>
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/npm/npm-original-wordmark.svg" title="NPM" alt="NPM" width="40" height="40" />&nbsp;
              <p>NPM</p>
            </div>
            <div>
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" title="TypeScript" alt="TypeScript" width="40" height="40" />&nbsp;
              <p>TypeScript</p>
            </div>
            <div>
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" title="JavaScript" alt="JavaScript" width="40" height="40" />&nbsp;
              <p>JavaScript</p>
            </div>
            <div>
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/symfony/symfony-original.svg" title="Symfony" alt="Symfony" width="40" height="40" />&nbsp;
              <p>Symfony</p>
            </div>
            <div>
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" title="React" alt="React" width="40" height="40" />&nbsp;
              <p>React</p>
            </div>
        </div>

    </div>
  )}


      <button onClick={() => toggleSection('contacts')} className="about-section-button">
        Contacts
      </button>
      {sections.contacts && (
        <p className="about-contacts">
          Phone: +420 732 482 069
          <br />
          Email: artursuvor@gmail.com
        </p>
      )}
    </div>
  );
};

export default About;
