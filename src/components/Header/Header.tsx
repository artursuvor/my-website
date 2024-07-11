import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../../ThemeContext.tsx';
import './Header.css';

const Header: React.FC = () => {
    const { darkMode, toggleDarkMode } = useTheme();

    return (
        <header>
            <div className={`header-container ${darkMode ? "dark-mode" : ""}`}>
                <NavLink to={`/`} className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
                <NavLink to={`/about`} className={({ isActive }) => isActive ? 'active' : ''}>About me</NavLink>
                <NavLink to={`/portfolio`} className={({ isActive }) => isActive ? 'active' : ''}>Portfolio</NavLink>
                <div className="header-switcher">
                    <p onClick={toggleDarkMode}>{darkMode ? '🌜' : '🌞'}</p>
                </div>
            </div>
        </header>
    );
};

export default Header;
