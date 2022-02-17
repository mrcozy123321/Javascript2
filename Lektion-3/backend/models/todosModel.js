const Todo = require('./todoSchema');

exports.getAllTodos = (req, res) => {

  Todo.find({}, (err, data) => {

    if(err) {
      return res.status(500).json({
        statusCode: 500,
        status: false,
        message: 'Something went wrong when fetching the todos',
        err
      })
    }
    res.status(200).json(data)
  })

}

exports.createNewTodo = (req, res) => {

  // Todo.create({ title: req.body.title }, (err, data) => {
//     if(err) {
//       return res.status(500).json({
//         statusCode: 500,
//         status: false,
//         message: 'Something went wrong when creating the todo',
//         err
//       })
//     }
//     res.status(201).json(data)
//   })

// }

// exports.updateTodo = (req, res) => {

//   Todo.exists({ _id: req.params.id }, (err, result) => {

//     if(err) {
//       // användaren har gjort något fel så det går inte att söka på databasen
//       return res.status(400).json({
//         statusCode: 400,
//         status: false,
//         message: 'You made a bad request',
//         err
//       })
//     }

//     if(result) {
//       // uppdatera todon
//       Todo.findOneAndUpdate({ _id: req.params.id }, req.body, (err, data) => {

//       })
//     }
//     else {
//       //skicka en 404 den finns inte
//       return res.status(404).json({
//         statusCode: 404,
//         status: false,
//         message: 'Not found',
//         err
//       })
//     }

  Todo.findOneAndUpdate({ _id: req.params.id }, req.body, (err, data) => {
    if(err) {
      return res.status(500).json({
        statusCode: 500,
        status: false,
        message: 'Something went wrong when updating the todo',
        err
      })
    }


    res.status(200).json(data)

  })
}