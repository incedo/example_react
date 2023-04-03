// src/components/Menu.js
import React, { useState } from 'react';
import './Menu.css';

function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="menu">
      <div className="menu-logo">My App</div>
      <div className={`menu-items ${menuOpen ? 'menu-open' : ''}`}>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        {menuOpen ? 'Close' : 'Menu'}
      </button>
    </nav>
  );
}

export default Menu;
