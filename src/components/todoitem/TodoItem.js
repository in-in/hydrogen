import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TodoItem.css';

export default class TodoItem extends Component {
  render() {
    const { id, title, completed } = this.props.todo;

    let className = 'nes-container todo-item is-rounded';
    if (completed) {
      className += ' is-dark';
    }

    return (
      <div className={className}>
        <label>
          <input
            type="checkbox"
            className={completed ? 'nes-checkbox is-dark' : 'nes-checkbox'}
            onChange={this.props.markComplete.bind(this, id)}
            checked={completed}
          />
          <span>{title}</span>
        </label>
        <button
          onClick={this.props.delTodoItem.bind(this, id)}
          type="button"
          className="nes-btn is-error todo-item__btn-close"
        >
          ×
        </button>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};
