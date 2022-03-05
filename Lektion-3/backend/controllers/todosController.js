const router = require('express').Router();
const todosModel = require('../models/todosModel');

router.get('/', todosModel.getAllTodos);

router.post('/', todosModel.createNewTodo);

router.patch('/:id', todosModel.updateTodo);

router.delete('/:id', todosModel.deleteTodo);

module.exports = router;

