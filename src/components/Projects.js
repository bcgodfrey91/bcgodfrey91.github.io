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
              <h3 className='project-title'>{project.name}</h3>
              <h3 className='project-technologies'
              >
              {project.technologies}
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
        <span><h1>Projects</h1></span>
        {this.renderProjects()}
      </div>
    );
  }
}

export default Projects;
