const express = require('express')
const routes = express.Router()
const userControllers = require('../controllers/user/UserController')

routes.get('/findUserById/:id', userControllers.findUserById)
routes.post('/saveNewUser', userControllers.saveNewUser)
routes.delete('/findUserByIdAndDelete/:id', userControllers.deleteUserById)
routes.get('/allUsers', userControllers.getAllUsersAndSortByPoints)

module.exports = routes
