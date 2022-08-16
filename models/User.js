const sequelize = require('sequelize')
const dbConn = require('../config/DB')

const table = dbConn.define('users',{
    id:{
        primaryKey:true,
        type: sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false
    },
    user:{
        type: sequelize.STRING,
        allowNull:false
    },
    password:{
        type: sequelize.STRING,
        allowNull:false
    },
    token:{
        type: sequelize.STRING,
        allowNull:false
    }
})
module.exports = table;