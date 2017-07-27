import React, { Component } from 'react';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import Todos from './Components/Todos';
import uuid from 'uuid';
import $ from 'jquery';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = { 
        projects: []
    }
  }

  getToDos(){
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/todos',
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({todos: data}, function(){
        })
      }.bind(this),
        error: function(xhr, status, err){
          console.log(err);
        }
    })
  }

  getProjects(){
    this.setState({projects: [
        {
          id: uuid.v4(),
          title: 'New website',
          category: 'Web Design'
        },
        {
          id: uuid.v4(),
          title: 'Update the old iphone app',
          category: 'Mobile Development'
        },
        {
          id: uuid.v4(),
          title: 'Update the old android app',
          category: 'Mobile Development'
        },
        {
          id: uuid.v4(),
          title: 'Delete the old blackberry app',
          category: 'Mobile Development'
        }
      ]})
  }
  componentWillMount(){
      this.getProjects();
      this.getToDos();
  }

  componentDidMount(){
    this.getProjects();
    this.getToDos();
  }

  handleAddProject(project){
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects});
  }
  handleDeleteProject(id){
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({projects:projects});    
  }

  render() {
    return ( //return needs one single element
      <div className="App">
        <h2>Project Manager App</h2>
        <AddProject addProject={this.handleAddProject.bind(this)} />
        <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/>
        <hr />
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
