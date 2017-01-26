import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className='Header'>
        <h1>Ben Godfrey</h1>
        <h3>Front End Developer</h3>
        <div className='button-container'>
          <button className='projects-button'>Projects</button>
          <button className='about-button'>About</button>
          <button className='contact-button'>Contact</button>
        </div>
      </div>
    );
  }
}

export default Header;
