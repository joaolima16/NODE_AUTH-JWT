const express = require('express')
const routes = express.Router();
const Controllers = require('../Controllers/UserController')

routes.get('/table',Controllers.CreateTable)
routes.post('/newUser',Controllers.CreateUser)
routes.get('/VerifyUser',Controllers.VerifyUser)

module.exports = routes;