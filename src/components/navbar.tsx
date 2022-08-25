import React from 'react';
import { Link } from 'gatsby';
import '../styles/navbar.css';

export default function Navbar() {
  return (
    <nav>
      <Link to="/">DPH</Link>
      <Link to="/about/">About</Link>
      <Link to="/puzzles/">Puzzles</Link>
    </nav>
  );
}
