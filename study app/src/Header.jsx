import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>

    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
      <h1>NoteConvert</h1>
    </Link>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/convert">Convert</Link>
    </nav>
  </header>
);

export default Header;
