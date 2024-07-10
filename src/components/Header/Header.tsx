import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../ThemeContext.tsx';
import './Header.css';

const Header: React.FC = () => {
    const { darkMode, toggleDarkMode } = useTheme();

    return (
        <header>
            <div className={`header-container ${darkMode ? "dark-mode" : ""}`}>
                <Link to={`/`}>Home</Link>
                <Link to={`/about`}>About me</Link>
                <Link to={`/portfolio`}>Portfolio</Link>
                <div className="header-switcher">
                    <p onClick={toggleDarkMode}>{darkMode ? '🌜' : '🌞'}</p>
                </div>
            </div>
            
        </header>
    );
};

export default Header;
