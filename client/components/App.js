import React, { Component } from 'react';
import { Todo } from '../models/todo';
import todoService from '../services/todos';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.addTodo = this.addTodo.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);

    this.todoList = todoService.getList();
  }

  componentDidMount() {
    this.todoList.on(
      'update change', this.forceUpdate.bind(this, null), this);
  }

  componentWillUnmount() {
    this.todoList.off(
      'update change', null, this);
  }

  addTodo() {
    const todoLabel = this.refs.todoLabel.value;
    if (!todoLabel || !todoLabel.length) {
      alert('Enter value for todo');
      return;
    }

    const newTodo = new Todo();
    newTodo.set('label', todoLabel);
    this.todoList.create(newTodo);

    this.refs.todoLabel.value = '';
  }

  toggleTodo(todo) {
    todo.set({
      complete: !todo.get('complete')
    });
    todo.save();
  }

  deleteTodo(todo) {
    todo.destroy();
  }

  render() {
    return (
      <div>
        <div>Todo list size: {this.todoList.length}</div>
        <button onClick={() => this.addTodo()}>Add Todo</button>
        <input ref="todoLabel" type="text"></input>
        <ul>
          {this.todoList.map((todo, index) =>
            <li key={index}>
                <span
                  onClick={() => this.toggleTodo(todo)}
                  style={{
                    textDecoration: todo.get('complete') ? 'line-through' : 'none'
                  }}
                >
                  {todo.get('label')}
                </span>
                <a className={'todo-delete-link'}
                  href="#"
                  onClick={() => this.deleteTodo(todo)}>
                    (delete)
                </a>
            </li>
          )}
        </ul>
      </div>
    );
  }
}
