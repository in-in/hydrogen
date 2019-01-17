import React, { Component } from 'react';
import Todos from './components/Todos';
import 'nes.css/css/nes.css';
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Dinner with wife',
        completed: true
      },
      {
        id: 3,
        title: 'Meeting with boss',
        completed: false
      }
    ]
  };

  render() {
    console.log(this.state.todos);

    return (
      <section className="nes-container with-title">
        <h2 className="title">ToDo List</h2>
        <Todos todos={this.state.todos} />
      </section>
    );
  }
}

export default App;
