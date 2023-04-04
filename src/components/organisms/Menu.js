import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Menu.css';

function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  const user = useSelector((state) => state.user);

  return (
    <nav className="menu">
      <div className="menu-logo">My App</div>
      <div className={`menu-items ${menuOpen ? 'menu-open' : ''}`}>
        <Link to="/" onClick={toggleMenu}>Home</Link>
        <Link to="/about" onClick={toggleMenu}>About</Link>
        <Link to="/contact" onClick={toggleMenu}>Contact</Link>
        {user.isLoggedIn ? (
          <>
            <Link to="/profile" onClick={toggleMenu}>
              Profile
            </Link>
            <div className="menu-profile">
              <img
                src={user.profile.imageUrl}
                alt={`${user.profile.name}'s profile`}
                width="30"
                height="30"
              />
              <span>{user.profile.name}</span>
            </div>
          </>
        ) : (
          <>
           <Link to="/login" onClick={toggleMenu}>Login</Link>
           <Link to="/register" onClick={toggleMenu}>Register</Link>
           </>
        )}
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        {menuOpen ? 'Close' : 'Menu'}
      </button>
    </nav>
  );
}

export default Menu;