import React, { Component } from 'react';

class Projects extends Component {
    deleteProject(id){
        this.props.onDelete(id);
    }
  render() {
    return ( //return needs one single element
      <li className="Project">
        <strong> {this.props.project.title}</strong> /  {this.props.project.category} <button onClick={this.deleteProject.bind(this, this.props.project.id)}>X</button>
      </li>
    );
  }
}

export default Projects;
