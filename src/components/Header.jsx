import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
    const location = useLocation();

    return (
        <header>
            {/* HEADER & NAVIGATION */}
            <img src="/ressources/images/devil-duck_icon_cropped.jpg" alt="Duck icon" />
            <h1>HES-SO Vs - 64-31 - Web Development</h1>
            <nav>
                <ul>
                    <li><Link to="/description">Description</Link></li>
                    <li><Link to="/mockup">Game Mockup</Link></li>
                    <li><Link to="/maquettes">Duck Mockup</Link></li>
                    <li><Link to="/flux">Flux</Link></li>
                    <li><Link to="/result">Results</Link></li>
                    <li><Link to="/detailed-game-description">Skills Overview</Link></li>
                    <li><Link to="/journal-de-bord">Logbook</Link></li>
                    <li><Link to="/links">Links</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;