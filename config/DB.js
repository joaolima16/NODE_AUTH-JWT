const Sequelize = require('sequelize')
const mysql2 = require('mysql2')
const Connection = new Sequelize('usersJWT','root','',{
    dialect: 'mysql'
})

module.exports = Connection;