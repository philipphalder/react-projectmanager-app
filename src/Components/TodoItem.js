import React, { Component } from 'react';

class TodoItem extends Component {
  render() {
    return ( //return needs one single element
      <li className="Todo">
        {this.props.todo.title}
      </li>
    );
  }
}

export default TodoItem;
