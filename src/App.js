import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './components/nav/Nav';
import Todos from './components/Todos';
import AddTodo from './components/addtodo/AddTodo';
import About from './components/pages/About';
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
        completed: true
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
      <Router>
        <main className="nes-container with-title main">
          <h1 className="title">ToDo List</h1>
          <div className="container">
            <section className="sidebar">
              <Nav />
            </section>
            <section className="content">
              <Route
                exact
                path="/"
                render={props => (
                  <Fragment>
                    <AddTodo addTodo={this.addTodo} />
                    <Todos
                      todos={this.state.todos}
                      markComplete={this.markComplete}
                      delTodoItem={this.delTodoItem}
                    />
                  </Fragment>
                )}
              />
              <Route path="/about" component={About} />
            </section>
          </div>
        </main>
      </Router>
    );
  }
}

export default App;
