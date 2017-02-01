import React, { Component } from 'react';
import '../styles/Projects.css';
import npmLogo from '../images/npm-logo.png'
import amptron from '../images/amptron.png'
import shootTheBreeze from '../images/shoot-the-breeze.png'



class Projects extends Component {
  render() {
    return (
      <div className="Projects">
        <span><h1>Projects</h1></span>
        <div className='project-container'>
          <div className='project-card'>
            <img src={npmLogo} alt='NPM logo' />
            <h3 className='project-title'>Electron Audio Conversion</h3>
          </div>
          <div className='project-info'>
            <ul className='project-technologies'>
              <li>ES6</li>
              <li>Node.js</li>
              <li>Babel</li>
            </ul>
            <p className='project-purpose'>Something something something</p>
          </div>
        </div>

        <div className='project-container'>
          <div className='project-card'>
            <p>img</p>
            <h2 className='project-title'>Data Hunt</h2>
          </div>
          <div className='project-info'>
            <ul className='project-technologies'>
              <li>Auth0</li>
              <li>React Natve</li>
              <li>Redux</li>
              <li>Immutable.js</li>
            </ul>
            <p className='project-purpose'>Something something something</p>
          </div>
        </div>

        <div className='project-container'>
          <div className='project-card amptron'>
            <img src={amptron} alt='Amptron music player' />
            <h2 className='project-title'>Amptron</h2>
          </div>
          <div className='project-info'>
            <ul className='project-technologies'>
              <li>HTML5</li>
              <li>Vue</li>
              <li>Electron</li>
              <li>Node.js</li>
            </ul>
            <p className='project-purpose'>Something something something</p>
          </div>
        </div>

        <div className='project-container'>
          <div className='project-card stb'>
            <img src={shootTheBreeze} alt='Shoot The Breeze chatroom' />
            <h2 className='project-title'>Shoot The Breeze</h2>
          </div>
          <div className='project-info'>
            <ul className='project-technologies'>
              <li>React</li>
              <li>Firebase</li>
            </ul>
            <p className='project-purpose'>Something something something</p>
          </div>
        </div>

        <div className='project-container'>
          <div className='project-card'>
            <p>img</p>
            <h2 className='project-title'>Lights Out</h2>
          </div>
          <div className='project-info'>
            <ul className='project-technologies'>
              <li>jQuery</li>
            </ul>
            <p className='project-purpose'>Something something something</p>
          </div>
        </div>

      </div>
    );
  }
}

export default Projects;
