var models = require('../models');
var Todo = models.Todo;

function errorHandler(res, err) {
  
  var status = 500;
  if (err.status) {
    status = err.status;
  } else if (err.name === 'SequelizeValidationError') {
    status = 400;
  }

  res.status(status).json({
    status: status,
    message: err.message
  });
}

function findTodo(req) {
  const { todoId } = req.params;
  return Todo.findById(todoId).then(todo => {
    if (todo === null) {
      throw Object.assign(new Error(), {
        status: 404,
        message: `Todo with id ${todoId} not found`
      });
    }
    return todo;
  });
}

export function listTodos(req, res, next) {
  return Todo.findAll().then(todos => {
    res.json(todos);
  })
  .catch(err => errorHandler(res, err));
};

export function getTodo(req, res, next) {
  return findTodo(req).then(todo => {
    res.json(todo);
  })
  .catch(err => errorHandler(res, err));
};

export function createTodo(req, res, next) {
  return Todo.create(req.body).then(todo => {
    res.json(todo);
  })
  .catch(err => errorHandler(res, err));
};

export function updateTodo(req, res, next) {
  return findTodo(req).then(todo => {
    Object.assign(todo, req.body);
    return todo.save();
  })
  .then(todo => {
    res.json(todo);
  })
  .catch(err => errorHandler(res, err));
};

export function deleteTodo(req, res, next) {
  return findTodo(req).then(todo => {
    return todo.destroy().then(() => {
      res.json(todo);
    });
  })
  .catch(err => errorHandler(res, err));
};
