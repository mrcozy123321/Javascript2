const router = require('express').Router();
const todosModel = require('../models/todosModel');

router.get('/', todosModel.getAllTodos);

router.post('/', todosModel.createNewTodo);

router.patch('/:id', todosModel.updateTodo);

module.exports = router;

