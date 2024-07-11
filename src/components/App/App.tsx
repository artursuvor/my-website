import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../Layout/Layout.tsx';
import Main from '../../pages/Main/Main.tsx';
import About from '../../pages/About/About.tsx';
import Portfolio from '../../pages/Portfolio/Portfolio.tsx';
import { ThemeProvider } from '../../ThemeContext.tsx'; 

const App: React.FC = () => {
    return (
        <ThemeProvider> 
            <Router>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Main />} />
                        <Route path="about" element={<About />} />
                        <Route path="portfolio" element={<Portfolio />} />
                    </Route>
                </Routes>
            </Router>
        </ThemeProvider>
    );
};

export default App;
