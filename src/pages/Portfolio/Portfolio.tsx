import React from 'react';
import { useTheme } from '../../ThemeContext.tsx'; 
import './Portfolio.css';

const Portfolio: React.FC = () => {
  const { darkMode } = useTheme();

  const projects = [
    {
      name: "Codewars Solutions",
      demoUrl: "https://codewars-solutions.vercel.app",
      repoUrl: "https://github.com/artursuvor/codewars-solutions",
      photoUrl: "/img/projects/codewars-solutions.png"
    },
    {
      name: "Reservation Efficiency",
      demoUrl: "https://reservation-efficiency.vercel.app",
      repoUrl: "https://github.com/artursuvor/Aura-ReservationPOE",
      photoUrl: "/img/projects/reservation-efficiency.png"
    },
    {
      name: "Find Digit",
      demoUrl: "https://react-find-digit.vercel.app",
      repoUrl: "https://github.com/artursuvor/REACT-find-digit",
      photoUrl: "/img/projects/find-digit.png"
    },
    {
      name: "Route Project",
      demoUrl: "https://react-route-project-brown.vercel.app",
      repoUrl: "https://github.com/artursuvor/React-Route-project",
      photoUrl: "/img/projects/route-project.png"
    },
    {
      name: "Chel Podshipnik",
      demoUrl: "https://chel-podshipnik.vercel.app",
      repoUrl: "https://github.com/artursuvor/chel-podshipnik",
      photoUrl: "/img/projects/chel-podshipnik.png"
    },
    {
      name: "Fake Eshop",
      demoUrl: "",
      repoUrl: "https://github.com/artursuvor/nextJS.e-shop",
      photoUrl: "/img/projects/fake-eshop.png"
    },
    {
      name: "Maro Project",
      demoUrl: "https://maro-project.vercel.app",
      repoUrl: "https://github.com/artursuvor/maro-project",
      photoUrl: "/img/projects/maro-project.png"
    }
  ];

  return (
    <div className={`portfolio ${darkMode ? 'dark' : 'light'}`}>
      {projects.map((project) => (
        <div className="project" key={project.name}>
          <div className="project-info">
            <p>{project.name}</p>
          </div>
          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
            <img src={project.photoUrl} alt={`${project.name} photo`} className="project-photo" />
          </a>
          <div className="project-links">
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="project-link">Demo</a>
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="project-link">Git</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
