import React, { useState } from 'react';
import { useTheme } from '../../ThemeContext.tsx'; 
import './Main.css';

const Main: React.FC = () => {
  const { darkMode } = useTheme();
  const initialPosition = { top: '50%', left: '50%' };
  const initialSize = { width: '200px' };

  const [position, setPosition] = useState(initialPosition);
  const [size, setSize] = useState(initialSize);
  const [isClicked, setIsClicked] = useState(false);

  const getRandomPosition = () => {
    const top = Math.random() * (window.innerHeight - 250) + 'px';
    const left = Math.random() * (window.innerWidth - 250) + 'px';
    return { top, left };
  };

  const handleClick = () => {
    setIsClicked(true);
    setPosition(getRandomPosition());
    setSize({ width: Math.random() * 200 + 50 + 'px' });
  };

  const handleRightClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsClicked(false);
    setPosition(initialPosition);
    setSize(initialSize);
  };

  return (
    <div className={`home-page-container-base ${darkMode ? 'home-page-container-dark' : 'home-page-container'}`}>
      <p className='mini-game-text' onClick={handleRightClick}>{isClicked ? 'Click HERE to stop mini-game' : ''}</p>
      <div 
        className='home-page-photo'
        onClick={handleClick}
        onContextMenu={handleRightClick}
        style={{ 
          top: position.top, 
          left: position.left, 
          width: size.width, 
          transition: 'all 0.5s ease',
          cursor: 'pointer',
          position: isClicked ? 'absolute' : 'static'
        }}
      >
        <img src='/img/me.png' alt='me' className='image-of-me' />
      </div>
      <div className='home-page-text-about-me'>
        <p>Hi, I'm <span className='home-page-text-name'>Artur</span></p>
        <p>Web developer</p>
        <p className='home-text-tg'>Mail: <a href="mailto:artursuvor@gmail.com">artursuvor@gmail.com</a></p>
        <div className='home-text-link-img-container'>
          <a href="https://github.com/artursuvor">
          {darkMode ? <img src="/img/gh-dark.png" alt="github" /> : <img src="/img/gh.png" alt="github" />}
          </a>
          <a href="https://t.me/krakozyabrra">
            {darkMode ? <img src="/img/tg-dark.png" alt="telegram" /> : <img src="/img/tg.png" alt="telegram" />}
          </a>
          <a href="https://www.linkedin.com/in/artursuvor">
            {darkMode ? <img src="/img/ln-dark.png" alt="linkedin" /> : <img src="/img/ln.png" alt="linkedin" />}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Main;
