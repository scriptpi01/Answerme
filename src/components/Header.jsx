import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isMenuOpen ? 'active' : ''}`}>
      <nav>
        {/* Hamburger menu icon */}
        <div className="menu-icon" onClick={toggleMenu}>
          &#9776;
        </div>
        <ul>
          <li><Link to="/main" onClick={toggleMenu}>Answerme</Link></li>
          <li><Link to="/profile" onClick={toggleMenu}>Profile</Link></li>
          <li><Link to="/login" onClick={toggleMenu}>Login</Link></li>
          <li><Link to="/register" onClick={toggleMenu}>Register</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
