import React from "react";
import { Link } from "react-router-dom";
import './Header.css';

const Header: React.FC = () => {
    // const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
    // const [isDark, setIsDark] = useLocalStorage("isDark", preference);

    return (
        <header>
            <div className="header-container">
                <Link to={`/`}>Home</Link>
                <Link to={`/about`}>About me</Link>
                <Link to={`/portfolio`}>Portfolio</Link>
            </div> 
            <div className="header-switcher">
                <p>1</p>
                <p>2</p>
            </div> 
        </header>
    );  
};

export default Header;
