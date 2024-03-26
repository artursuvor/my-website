import React from 'react';
import './Main.css'; 

const Main: React.FC = () => {
  return (
    <div className="home-page-container">
      <div className='home-page-photo'>
        <img src='/img/me.png' alt='me'/>
      </div>
      <div className='home-page-text-about-me'>
        <p>Hi, I'm <span className='home-page-text -name'>Artur</span></p>
        <p>Front-end developer</p>
        <p className='home-text-tg'>mail: <a href="">artursuvor@gmail.com</a></p>
        <div className='home-text-link-img-container'>
          <img src="/img/gh.png" alt="github" className='github'/>
          <img src="/img/tg.png" alt="telegram" className='telegram'/>
          <img src="/img/ln.png" alt="linkedin" className='linkedin'/>
        </div>
      </div>
    </div>
  );
};

export default Main;
