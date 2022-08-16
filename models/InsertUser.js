const table = require('../models/User')
const jwt = require('jsonwebtoken')
const Verify ="11956159619616951695"
async function NewUser(values){
    const token = jwt.sign({user:values.username,password:values.password},Verify,{algorithm:'HS256'})

    await table.create({
        user: values.username,
        password: values.password,
        token: token

    })
}


module.exports = NewUser;