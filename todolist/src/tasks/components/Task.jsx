import React from 'react';
import PropTypes from 'prop-types';

const Task = ({ done, text, onChange, id, onDelete }) => (
  <li className={`list-item ${done ? 'list-item_done' : ''}`}>
    <input
      type="checkbox"
      className="list-item__checkbox"
      defaultChecked={done}
      onChange={() => onChange(id)}
    />
    <span className="list-item__text">{text}</span>
    <button className="list-item__delete-btn" onClick={() => onDelete(id)}></button>
  </li>
);
Task.propTypes = {
  done: PropTypes.bool,
  text: PropTypes.string,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
Task.defaultValue = {
  done: false,
  text: '',
};

export default Task;
