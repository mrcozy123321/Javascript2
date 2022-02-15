const express = require('express');
const router = express.Router()




router.get('/', (req, res) => {
  res.send({todo: 'todooo'})
})

router.post('/', (req, res) => {
  res.send({todo: 'skapa en ny todo'})
})

router.delete('/:id', (req, res) => {
  res.send({todo: 'ta bort en todo' + req.params.id})
})

module.exports = router;