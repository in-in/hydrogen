import React, { Component } from 'react';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import nanoid from 'nanoid';
import 'nes.css/css/nes.css';
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: nanoid(),
        title: 'Take out the trash',
        completed: false
      },
      {
        id: nanoid(),
        title: 'Dinner with wife',
        completed: false
      },
      {
        id: nanoid(),
        title: 'Meeting with boss',
        completed: false
      }
    ]
  };

  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  delTodoItem = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };

  addTodo = title => {
    const newTodo = {
      id: nanoid(),
      title,
      completed: false
    };

    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    return (
      <section className="nes-container with-title">
        <h2 className="title">ToDo List</h2>
        <AddTodo addTodo={this.addTodo} />
        <Todos
          todos={this.state.todos}
          markComplete={this.markComplete}
          delTodoItem={this.delTodoItem}
        />
      </section>
    );
  }
}

export default App;
