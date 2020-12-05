const express = require('express')

const TodoController = require('./controllers/TodoController')

const routes = express.Router()

routes.post('/todo', TodoController.create)
routes.get('/todos', TodoController.getAll)
routes.get('/todo/:id', TodoController.getId)
routes.put('/todo/:id', TodoController.update)
routes.delete('/todo/:id', TodoController.destroy)

module.exports = routes