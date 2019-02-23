import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './AddTodo.css';

export default class AddTodo extends Component {
  state = {
    title: ''
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: '' });
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div className="nes-container is-rounded">
        <form onSubmit={this.onSubmit} className="nes-field add-todo">
          <input
            type="text"
            name="title"
            className="nes-input"
            placeholder="Add Todo..."
            value={this.state.title}
            onChange={this.onChange}
          />
          <button type="submit" className="nes-btn is-primary">
            Add
          </button>
        </form>
      </div>
    );
  }
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
};
