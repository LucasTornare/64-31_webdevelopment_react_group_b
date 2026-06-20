import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PageTemplate from './components/PageTemplate';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        
        {/* HEADER & NAVIGATION (Hardcoded in React) */}
        <header>
          <h1 className="header1">HES-SO Vs - 64-31 - Web Development</h1>
          <nav>
            <ul>
              <li className="hamburger">
                <img src="/ressources/images/devil-duck_icon_cropped.jpg" alt="Duck icon" />
              </li>
              <li><Link to="/description">Description</Link></li>
              <li><Link to="/maquettes">Maquettes</Link></li>
              <li><Link to="/mockup">Mockup</Link></li>
              <li><Link to="/flux">Flux</Link></li>
              <li><Link to="/journal-de-bord">Journal de bord</Link></li>
              <li><Link to="/detailed-game-description">Detailed Game Description</Link></li>
              <li><Link to="/result">Result</Link></li>
              <li><Link to="/links">Links</Link></li>
            </ul>
          </nav>
        </header>

        {/* DYNAMIC CONTENT (Fetched from WordPress depending on the URL) */}
        <main>
          <Routes>
            {/* Default landing route redirects to description */}
            <Route path="/" element={<PageTemplate pageSlug="description" />} />
            
            {/* Passing the exact WordPress slug for each page */}
            <Route path="/description" element={<PageTemplate pageSlug="description" />} />
            <Route path="/maquettes" element={<PageTemplate pageSlug="maquettes" />} />
            <Route path="/mockup" element={<PageTemplate pageSlug="mockup" />} />
            <Route path="/flux" element={<PageTemplate pageSlug="flux" />} />
            <Route path="/journal-de-bord" element={<PageTemplate pageSlug="journal-de-bord" />} />
            <Route path="/detailed-game-description" element={<PageTemplate pageSlug="detailed-game-description" />} />
            <Route path="/result" element={<PageTemplate pageSlug="result" />} />
            <Route path="/links" element={<PageTemplate pageSlug="links" />} />
            
            {/* Fallback route if the URL does not exist */}
            <Route path="*" element={<div>Page 404 - Not Found</div>} />
          </Routes>
        </main>

        {/* FOOTER (Hardcoded in React) */}
        <footer>
          <img id="logo" src="/ressources/images/logo.svg" alt="HES Logo" />
        </footer>

      </div>
    </Router>
  );
}

export default App;