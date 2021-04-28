import React from 'react';
import './Header.scss';
import logo from '../images/superhero.svg';

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header-container">
      <img className="logo" src={logo} alt="" />
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/hero/details">Characters</Link>
        <Link to="/">Comics</Link>
        <Link to="/">Series</Link>
      </nav>
    </div>
  );
};

export default Header;
