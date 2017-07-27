import React, { Component } from 'react';
import uuid from 'uuid';

class AddProject extends Component {
    constructor(){
        super();
        this.state = {
            newProject:{}
        }
    }
    static defaultProps = {
        categories: ['WebDesign', 'Web Development', 'Mobile Development']
    }
        
    handleSubmit(e){
        if(this.refs.title.value === ''){
            console.log("Input required")
        } else {
            this.setState({newProject: {
                title: this.refs.title.value,
                category: this.refs.category.value,
                id: uuid.v4()
            }}, function(){
                this.props.addProject(this.state.newProject);
            })
        }
          
        e.preventDefault();
    }
    render() {
      let categoryOptions = this.props.categories.map(category => {
          return <option key={category} value={category}>{category}</option>
      })
    return (
      <div>
        <h3>Add Project</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
            <div>
                <lable>Title</lable><br />
                <input type="text" ref="title" />
            </div>
            <div>
                <lable>Category</lable><br />
                <select ref="category">
                    {categoryOptions}
                </select>
            </div>
            <br />
            <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default AddProject;
