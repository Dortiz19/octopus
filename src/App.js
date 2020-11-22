import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import TodoList from './TodoList';
import SubmitForm from './SubmitForm';
import './App.css';


class App extends Component {
  state = { tasks: ['task 1', 'task 2', 'task 3'] };


  handleDelete = (index) => {
    const newArr = [...this.state.tasks];
    newArr.splice(index, 1);
    this.setState({ tasks: newArr });
  }

  handleSubmit = task => {
    this.setState({ tasks: [...this.state.tasks, task] });
  }



  render() {
    return (
      <div className="wrapper">
        <Header numTodos={this.state.tasks.length} />
        <TodoList tasks={this.state.tasks} onDelete={this.handleDelete} />
        <SubmitForm onFormSubmit={this.handleSubmit} />
      </div>
    )
  }
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

export default App;
