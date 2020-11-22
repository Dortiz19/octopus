import './App.css'; 
import React, { Component } from 'react';
import Header from './Header';
import TodoList from './TodoList';
import SubmitForm from './Submit';


class App extends Component {
  state = { tasks: ['Task 1 ', 'Task 2 ', 'Task 3 '] };

  handleSubmit = task => {
    this.setState({tasks: [...this.state.tasks, task]});
}

  handleDelete = (index) => {
    const newArr = [...this.state.tasks];
    newArr.splice(index, 1);
    this.setState({tasks: newArr});
}

  render () {
    return (
      <div className='wrapper'>
        <div>
          <Header numTodos={this.state.tasks.length} />
          <TodoList tasks={this.state.tasks} onDelete={this.handleDelete} />
          <SubmitForm onFormSubmit={this.handleSubmit} />
        </div>
      </div>
    )
  }
}


export default App;
