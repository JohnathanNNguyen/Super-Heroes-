import React from 'react';
import './Header.scss';
import logo from '../images/superhero.svg';

const Header = () => {
  return (
    <div className="header-container">
      <img className="logo" src={logo} alt="" />
      <nav className="nav-links">
        <a href="/">Home</a>
        <a href="/">Characters</a>
        <a href="/">Comics</a>
        <a href="/"> Series</a>
      </nav>
    </div>
  );
};

export default Header;
