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
              <div className='divider'></div>
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
      <div id="projects">
        <span><h1>Vision Board</h1></span>
        {this.renderProjects()}
      </div>
    );
  }
}

export default Projects;
