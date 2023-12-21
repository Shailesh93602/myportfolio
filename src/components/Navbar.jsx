import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`header ${menuOpen ? 'active' : ''}`}>
      <NavLink to="/" className="logo">Portfolio</NavLink>
      <ul className={`navbar ${menuOpen ? 'active' : ''}`}>
        <li><NavLink to="/" className="links" onClick={closeMenu}>Home</NavLink></li>
        <li><NavLink to="/about" className="links" onClick={closeMenu}>About</NavLink></li>
        <li><NavLink to="/blogs" className="links" onClick={closeMenu}>Blogs</NavLink></li>
        <li><NavLink to="/portfolio" className="links" onClick={closeMenu}>Portfolio</NavLink></li>
        <li><NavLink to="/contact" className="links" onClick={closeMenu}>Contact</NavLink></li>
      </ul>
      <i className={`bx ${menuOpen ? 'bx-x' : 'bx-menu'}`} id="menu-icon" onClick={toggleMenu}></i>
    </nav>
  );
};

export default Navbar;