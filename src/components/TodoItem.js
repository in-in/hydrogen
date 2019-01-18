import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TodoItem extends Component {
  render() {
    const { id, title, completed } = this.props.todo;

    let className = 'nes-container is-rounded';
    if (completed) {
      className += ' is-dark';
    }

    return (
      <div className={className}>
        <label>
          <input
            type="checkbox"
            className="nes-checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />
          <span />
        </label>
        <span>{title}</span>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};
