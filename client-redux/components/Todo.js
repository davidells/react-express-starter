import React, { PropTypes } from 'react'

const Todo = ({ onClick, onCbClick, status, text }) => (
  <li>
    <span
      onClick={onClick}
      style={{
        color: status === 'priority' ? 'red' : null,
        textDecoration: status === 'complete' ? 'line-through' : 'none'
      }}>
        {text}
    </span>
    <input type="checkbox" checked={status === 'complete'} onClick={onCbClick} />
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  onCbClick: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
