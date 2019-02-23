import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export default function Nav() {
  return (
    <nav className="nav">
      <Link to="/" className="nes-btn">
        Home
      </Link>
      <Link to="/about" className="nes-btn">
        About
      </Link>
    </nav>
  );
}
