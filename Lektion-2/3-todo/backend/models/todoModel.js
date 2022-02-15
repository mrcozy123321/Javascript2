const Todo = require('./todoSchema');

exports.getTodos = (req, res) => {
  Todo.find()
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json({
      statusCode: 500,
      status: false,
      message: 'Something went wrong when fetching the todos',
      err
    }))
}

exports.saveTodo = (req, res) => {
  const newTodo = new Todo({
    title: req.body.title
  })

  newTodo.save()
    .then(data => res.status(201).json(data))
    .catch(err => res.status(500).json({
      statusCode: 500,
      status: false,
      message: 'Something went wrong when creating the todo',
      err
    }))
}

exports.deleteTodo = (req, res) => {
  Todo.exists({ _id: req.params.id }, (err, result) => {

    if(err) {
      return res.status(400).json({
        statusCode: 400,
        status: false,
        message: 'You made a bad request'
      })
    }

    if(result) {
      Todo.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({id: req.params.id}))
        .catch(err => res.status(500).json({
          statusCode: 500,
          status: false,
          message: 'Failed to delete the todo',
          err
        }))
    }
    else {
      return res.status(404).json({
        statusCode: 404,
        status: false,
        message: 'Oops, the todo does not exist'
      })
    }


  })
}

exports.updateTodo = (req, res) => {
  Todo.findOne({ _id: req.params.id }, (err, todo) => {

    if(err) {
      return res.status(400).json({
        statusCode: 400,
        status: false,
        message: 'You made a bad request'
      })
    }
    
    if(!todo) {
      return res.status(404).json({
        statusCode: 404,
        status: false,
        message: 'Oops, the todo does not exist'
      })
    }

    Todo.updateOne({ _id: req.params.id }, req.body)
      // .then(() => res.status(200).json({
      //   statusCode: 200,
      //   status: true,
      //   message: 'The todo was updated successfully'
      // }))
      .then(() => {
        Todo.findOne({ _id: req.params.id }, (err, data) => {
          res.status(200).json(data)
        })
      })
      .catch(err => res.status(500).json({
        statusCode: 500,
        status: false,
        message: 'Failed to update todo',
        err
      }))

  })
}