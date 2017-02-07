import { Model, Collection } from 'backbone';

export const Todo = Model.extend({});
export const TodoList = Collection.extend({
  model: Todo,
  url: '/api/todos'
});
