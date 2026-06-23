import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PageTemplate from './components/PageTemplate';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />

        {/* DYNAMIC CONTENT (Fetched from WordPress depending on the URL) */}
        <main>
          <Routes>
            {/* Default landing route redirects to description */}
            <Route path="/" element={<PageTemplate pageSlug="description" />} />
            
            {/* Passing the exact WordPress slug for each page */}
            <Route path="/description" element={<PageTemplate pageSlug="description" />} />
            <Route path="/mockup" element={<PageTemplate pageSlug="mockup" />} />
            <Route path="/maquettes" element={<PageTemplate pageSlug="maquettes" />} />
            <Route path="/flux" element={<PageTemplate pageSlug="flux" />} />
            <Route path="/result" element={<PageTemplate pageSlug="result" />} />
            <Route path="/detailed-game-description" element={<PageTemplate pageSlug="detailed-game-description" />} />
            <Route path="/journal-de-bord" element={<PageTemplate pageSlug="journal-de-bord" />} />
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