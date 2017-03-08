import React, { Component } from 'react';
import '../styles/Footer.css';
import github from '../images/github.svg'
import linkedIn from '../images/linkedIn.svg'
import twitter from '../images/twitter.svg'
import instagram from '../images/instagram.svg'

class Footer extends Component {
  render() {
    return (
      <footer className='footer'>
        <a href="https://www.linkedin.com/in/benjamin-godfrey-21423791?trk">
          <img src={linkedIn} alt="Ben on LinkedIn" />
        </a>
        <a href="https://github.com/bcgodfrey91">
          <img src={github} alt="Ben on Github" />
        </a>
        <a href="https://twitter.com/BenTheHuman">
          <img src={twitter} alt="Ben on Twitter" />
        </a>
        <a href="https://www.instagram.com/based_godfrey">
          <img src={instagram} alt="Ben on Instagram" />
        </a>
      </footer>
    );
  }
}

export default Footer
