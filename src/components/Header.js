import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-brand">
          <span className="brand-icon">🧠</span>
          <h2>MindCare</h2>
        </div>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><Link to="/home" className={location.pathname === '/home' ? 'active' : ''}>Home</Link></li>
          <li><Link to="/resources" className={location.pathname === '/resources' ? 'active' : ''}>Resources</Link></li>
          <li><Link to="/therapy" className={location.pathname === '/therapy' ? 'active' : ''}>Therapy</Link></li>
          <li><Link to="/support-groups" className={location.pathname === '/support-groups' ? 'active' : ''}>Support Groups</Link></li>
          <li><Link to="/entertainment" className={location.pathname === '/entertainment' ? 'active' : ''}>Entertainment</Link></li>
          <li><Link to="/games" className={location.pathname === '/games' ? 'active' : ''}>Games</Link></li>
          <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Login</Link></li>
        </ul>
        <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
};

export default Header;