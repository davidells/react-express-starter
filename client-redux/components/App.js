import React from 'react'
import Footer from './Footer'
import AppInit from '../containers/AppInit'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <AppInit>
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  </AppInit>
)

export default App
