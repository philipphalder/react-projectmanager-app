import React, { Component } from 'react';
import TodoItem from './TodoItem';

class Todos extends Component {
  render() {
    let todoItems;
    if(this.props.todos){
        todoItems = this.props.todos.map(todo => {
            return(
                <TodoItem key={todo.title} todo={todo} />
            )
        })
    }
    return ( //return needs one single element
      <div className="Todos">
        <h3>Todo List:</h3>
        {todoItems}
      </div>
    );
  }
}
export default Todos;
