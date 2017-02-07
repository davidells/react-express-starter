export const initAppFinished = () => ({
  type: 'APP_INIT_FINISHED'
})

let nextTodoId = 0
export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})

export const toggleTodoComplete = (id) => ({
  type: 'TOGGLE_TODO_COMPLETE',
  id
})
