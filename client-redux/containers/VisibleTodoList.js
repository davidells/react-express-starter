import { connect } from 'react-redux'
import { toggleTodo, toggleTodoComplete } from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_PRIORITY':
      return todos.filter(t => t.status === 'priority')
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.status === 'complete')
    case 'SHOW_ACTIVE':
      return todos.filter(t => t.status !== 'complete')
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = (dispatch) => ({
  onTodoClick: (id) => {
    dispatch(toggleTodo(id))
  },
  onTodoCbClick: (id) => {
    dispatch(toggleTodoComplete(id))
  }
})

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
