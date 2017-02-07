import React, { PropTypes } from 'react'
import Todo from './Todo'

const TodoList = ({ todos, onTodoClick, onTodoCbClick }) => (
  <div>
    <p>Current number of TODOs: {todos.length}</p>
    <p>Current done TODOs: {todos.filter(t => t.status === 'complete').length}</p>
    <ul>
      {todos.map(todo =>
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => onTodoClick(todo.id)}
          onCbClick={() => onTodoCbClick(todo.id)}
        />
      )}
    </ul>
  </div>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList
