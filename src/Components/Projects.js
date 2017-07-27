import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

class Projects extends Component {
    deleteProject(id){
        this.props.onDelete(id);
    }
  render() {
    let projectItems;
    if(this.props.projects){
        projectItems = this.props.projects.map(project => {
            return(
                <ProjectItem onDelete={this.deleteProject.bind(this)} key={project.id} project={project} />
            )
        })
    }
    return ( //return needs one single element
      <div className="Projects">
        <h3>Projects:</h3>
        {projectItems}
      </div>
    );
  }
}
export default Projects;
