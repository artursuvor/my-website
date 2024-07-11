import React, { useState, useEffect } from "react";
import { useTheme } from '../../ThemeContext.tsx'; 
import Confetti from 'react-confetti';
import './Footer.css';

const Footer: React.FC = () => {
    const { darkMode } = useTheme();
    const [gameActive, setGameActive] = useState(false);
    const [score, setScore] = useState(0);
    const [targetPosition, setTargetPosition] = useState({ left: '50%', top: '50%' });
    const [isConfettiActive, setIsConfettiActive] = useState(false);

    useEffect(() => {
        if (score === 10) {
            setIsConfettiActive(true);   
        }
    }, [score]);

    const handleStartGame = () => {
        setGameActive(true);
        setScore(0);
        generateTargetPosition();
    };

    const generateTargetPosition = () => {
        const newLeft = Math.floor(Math.random() * 90) + '%';
        const newTop = Math.floor(Math.random() * 90) + '%';
        setTargetPosition({ left: newLeft, top: newTop });
    };

    const handleTargetClick = () => {
        setScore(score + 1);
        generateTargetPosition();
    };

    const handleResetGame = () => {
        setGameActive(false);
        setScore(0);
    };

    return (
        <footer className={darkMode ? "footer-light-mode" : "footer-dark-mode"}>
            <p onClick={gameActive ? handleResetGame : handleStartGame}>Artur Suvorkin © 2024</p>
            {gameActive && (
                <>
                    <div className="mini-game">
                        <div
                            className="target"
                            style={{ left: targetPosition.left, top: targetPosition.top }}
                            onClick={handleTargetClick}
                        >
                            🎯
                        </div>
                        {isConfettiActive ? 
                            <Confetti
                                recycle = {false}
                                numberOfPieces = {1000}
                                drawShape={ctx => {
                                    const size = 10;
                                    const x1 = 0;
                                    const y1 = -size / Math.sqrt(3);
                                    const x2 = size / 2;
                                    const y2 = size / (2 * Math.sqrt(3));
                                    const x3 = -size / 2;
                                    const y3 = size / (2 * Math.sqrt(3));
                                    ctx.beginPath();
                                    ctx.moveTo(x1, y1);
                                    ctx.lineTo(x2, y2);
                                    ctx.lineTo(x3, y3);
                                    ctx.closePath();
                                    ctx.stroke();
                                }}
                                />
                          : ''
                        }
                    </div>
                    <p>Score: {score}</p>
                </>
            )}
        </footer>
    );
};

export default Footer;
