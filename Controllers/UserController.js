const table = require('../models/User')
const GenerateUsers = require('../models/InsertUser')
const VerificationToken = require('../models/TokenVerify')
class User{
    static async CreateTable(req,res){
        await table.sync({force:true})
        res.send('Tabela Criada com sucesso!')
    }
    static async CreateUser(req,res){
        try{
            GenerateUsers(req.body)
            res.send("usuário inserido")
        }
        catch (ex){
                res.send("não foi possível realizar o cadastro")
        }
    }
    static async VerifyUser(req,res){
        const users = await table.findOne({where:{user:'joaou'}})
        
        res.send(VerificationToken(users.token))
    }
}

module.exports = User;