import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TodoItem extends Component {
  render() {
    let className = 'TodoItem';
    if (this.props.todo.completed) {
      className += ' TodoItem--completed';
    }

    return <p className={className}>{this.props.todo.title}</p>;
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};
