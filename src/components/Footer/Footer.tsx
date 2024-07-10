import React from "react";
import { useTheme } from '../../ThemeContext.tsx'; 
import './Footer.css';

const Footer: React.FC = () => {
    const { darkMode } = useTheme();

    return (
        <footer className={darkMode ? "footer-light-mode" : "footer-dark-mode"}>
            <p>Artur Suvorkin © 2024</p>
        </footer>
    );
};

export default Footer;
