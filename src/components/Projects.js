import React, { Component } from 'react';
import '../styles/Projects.css';
import helpers from './projectHelper'

class Projects extends Component {

  renderProjects() {
    return helpers.projects.map(project => {
      return (
        <a
          key={project.id}
          className='project-link'
          href={project.url}
        >
          <div
            className={`project-container ${project.class}`}
          >
            <div className='project-info'>
              <h3 className='project-name'>{project.name}</h3>
              <h3 className='project-description'
              >
              {project.description}
              </h3>
            </div>
          </div>
        </a>
      )
    })
  }


  render() {
    return (
      <div id='projects'>
      <div className='project-header'>
        <h1>Vision Board</h1>
      </div>
      <div className='project-list'>
        {this.renderProjects()}
      </div>
      </div>
    );
  }
}

export default Projects;
