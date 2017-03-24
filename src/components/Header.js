import React, { Component } from 'react';
import { Link } from 'react-router';
import '../styles/Header.css';

class Header extends Component {
  render() {
    return (
      <div className='Header'>
        <h1 className='header-name'>Ben Godfrey</h1>
        <div className='button-container'>
          <Link to={'/about'}><button className='about-button button'>About</button></Link>
          <Link to={'/projects'}><button className='projects-button button'>Projects</button></Link>
          <Link to={'/contact'}><button className='contact-button button'>Contact</button></Link>
        </div>
      </div>
    );
  }
}

export default Header
