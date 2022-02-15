const express = require('express');
const router = express.Router()
const todoModel = require('../models/todoModel')



router.post('/', todoModel.saveTodo);

router.get('/', todoModel.getTodos);

router.patch('/:id', todoModel.updateTodo);

router.delete('/:id', todoModel.deleteTodo);




module.exports = router;