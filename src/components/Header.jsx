import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
    const location = useLocation();

    return (
        <header>
            {/* HEADER & NAVIGATION */}
            <img src="/ressources/images/devil-duck_icon_cropped.jpg" alt="Duck icon" />
            <nav>
                <ul>
                    <li className={location.pathname === '/description' ? 'active' : ''}><Link to="/description">Description</Link></li>
                    <li className={location.pathname === '/mockup' ? 'active' : ''}><Link to="/mockup">Game Mockup</Link></li>
                    <li className={location.pathname === '/maquettes' ? 'active' : ''}><Link to="/maquettes">Duck Mockup</Link></li>
                    <li className={location.pathname === '/flux' ? 'active' : ''}><Link to="/flux">Flux</Link></li>
                    <li className={location.pathname === '/result' ? 'active' : ''}><Link to="/result">Results</Link></li>
                    <li className={location.pathname === '/detailed-game-description' ? 'active' : ''}><Link to="/detailed-game-description">Skills Overview</Link></li>
                    <li className={location.pathname === '/journal-de-bord' ? 'active' : ''}><Link to="/journal-de-bord">Logbook</Link></li>
                    <li className={location.pathname === '/links' ? 'active' : ''}><Link to="/links">Links</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;