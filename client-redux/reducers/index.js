import { combineReducers } from 'redux'
import app from './app'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

const todoApp = combineReducers({
  app,
  todos,
  visibilityFilter
})

export default todoApp
