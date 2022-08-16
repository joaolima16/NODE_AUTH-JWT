const { response } = require('express');
const express = require('express')
const app = express();
const jwt = require('jsonwebtoken')
const routes = require('./routes/routes')
app.use(express.json())
app.use(routes)
// const token =  jwt.sign({nome:"joao"},"teste",{algorithm:'HS256'})
// console.log(token)
// jwt.verify(token,"teste",(err,response)=>{
//     if(err) console.log("assinatura incorreta");

//     console.log(response.)
// })
app.listen(3000,()=>{
    console.log("servidor em operação ")
})
