import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {
  render() {
    return (
      <div className='Header'>
        <h1>Ben Godfrey</h1>
        <div className='button-container'>
          <Link to={'/projects'}><button className='projects-button'>Projects</button></Link>
          <Link to={'/about'}><button className='about-button'>About</button></Link>
          <Link to={'/contact'}><button className='contact-button'>Contact</button></Link>
        </div>
      </div>
    );
  }
}

export default Header;
