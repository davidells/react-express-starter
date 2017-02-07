var express = require('express');
var router = express.Router();

import * as todosCtrl from '../controllers/todos';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/todos', todosCtrl.listTodos);
router.get('/api/todos/:todoId', todosCtrl.getTodo);
router.post('/api/todos', todosCtrl.createTodo);
router.put('/api/todos/:todoId', todosCtrl.updateTodo);
router.delete('/api/todos/:todoId', todosCtrl.deleteTodo);

module.exports = router;
