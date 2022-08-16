const { response } = require('express')
const jwt = require('jsonwebtoken')
const tokenVer =  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiam9hb3UiLCJwYXNzd29yZCI6MTIzNCwiaWF0IjoxNjYwNjEzODQ0fQ.3NSyEVVkfRSr-5nEXA9DpJO6_x7o9-dHS5eMZUaGj2k"


function VerifyToken(token){
    jwt.verify(token,"11956159619616951695",(err,response)=>{
        if(err) throw err;
        console.log(response)
        return response
    })
}

module.exports = VerifyToken;