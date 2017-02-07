const todoStatus = ['todo', 'priority', 'complete']

const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        status: todoStatus[0]
      }
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      }

      // Get next status in cycle
      const nextStatusIndex =
        (todoStatus.indexOf(state.status) + 1) % todoStatus.length

      return {
        ...state,
        status: todoStatus[nextStatusIndex]
      }
    case 'TOGGLE_TODO_COMPLETE':
      console.log(state)
      if (state.id !== action.id) {
        return state
      }

      return {
        ...state,
        status: state.status === 'complete' ? 'todo' : 'complete'
      }
    default:
      return state
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'TOGGLE_TODO':
    case 'TOGGLE_TODO_COMPLETE':
      return state.map(t =>
        todo(t, action)
      )
    default:
      return state
  }
}

export default todos
