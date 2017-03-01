import React, { Component } from 'react';
import '../styles/Projects.css';
import npmLogo from '../images/npm-logo.png'
import amptron from '../images/amptron.png'
import shootTheBreeze from '../images/shoot-the-breeze.png'
import helpers from './projectHelper'

class Projects extends Component {

  renderProjects() {
    return helpers.projects.map(project => {
      return (
          <div key={project.id} className={`project-container-${project.id}`}>
            <div className='project-card'>
              <img src={project.img} alt={project.alt} />
              <h3 className='project-title'>{project.name}</h3>
            </div>
            <div className='project-info'>
              <div className='project-technologies'>
                <p>{project.technologies}</p>
              </div>
            </div>
          </div>
      )
    })
  }


  render() {
    return (
      <div className="Projects">
        <span><h1>Projects</h1></span>
        {this.renderProjects()}
      </div>
    );
  }
}

export default Projects;
