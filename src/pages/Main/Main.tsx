import React from 'react';
import './Main.css'; 

const Main: React.FC = () => {
  return (
    <div className="home-page-container">
      <div className='home-page-photo'>
        <img src='/img/me.png' alt='me'/>
      </div>
      <div className='home-page-text-about-me'>
        <p>Hi, I'm <span className='home-page-text-name'>Artur</span></p>
        <p>Web developer</p>
        <p className='home-text-tg'>Mail: <a href="mailto:artursuvor@gmail.com">artursuvor@gmail.com</a></p>
        <div className='home-text-link-img-container'>
          <a href="https://github.com/artursuvor">
            <img src="/img/gh.png" alt="github" className='github'/>
          </a>
          <a href="https://t.me/krakozyabrra">
            <img src="/img/tg.png" alt="telegram" className='telegram'/>
          </a>
          <a href="https://www.linkedin.com/in/artursuvor">
            <img src="/img/ln.png" alt="linkedin" className='linkedin'/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Main;
