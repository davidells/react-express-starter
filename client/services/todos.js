import { TodoList } from '../models/todo';

class TodoService {
  constructor() {
    this.fetched = false;
    this.todos = new TodoList();
  }

  getList() {
    if (!this.fetched) {
      this.todos.fetch();
    }
    return this.todos;
  }
}

export default new TodoService();
