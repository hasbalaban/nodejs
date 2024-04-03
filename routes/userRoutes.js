const express = require('express')
const routes = express.Router()
const userControllers = require('../controllers/user/UserController')

routes.get('/user/findUserById/:id', userControllers.findUserById)
routes.post('/user/newUser', userControllers.saveNewUser)
routes.delete('/user/findUserByIdAndDelete/:id', userControllers.deleteUserById)
routes.get('/user/allUsers', userControllers.getAllUsersAndSortByPoints)

module.exports = routes
