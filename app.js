/* imports */
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const app = express()

//COnfigurando JSON response
app.use(express.json())


//Models
const User = require('./models/User')

//Criando uma Rota Publica
app.get('/', (req, res) => {
    res.status(200).json({msg: "Bem vindo a nossa API"})
})


//Registrar Usuario
app.post('/auth/register', async(req, res) => {
    const {name, email, password, confirmpassword} = req.body

    //Validacoes
    if (!name) {
        return res.status(422).json({ msg: 'O nome e Obrigatorio!' })
    }

    if (!email) {
        return res.status(422).json({ msg: 'O email e Obrigatorio!' })
    }

    if (!password) {
        return res.status(422).json({ msg: 'A senha e Obrigatorio!' })
    }

    if(password !== confirmpassword) {
        return res.status(422).json({ msg: 'As senhas nao conferem' })
    }

    //Verificar se o Usuario Existe
    const userExists = await User.findOne({ email: email })
        if(userExists) {
            return res.status(422).json({ msg: 'Por favor Utilize Outro email!' })
        }

    //Criando Senha
    const salt = await bcrypt.genSalt(12)
    const passwordHash = await bcrypt.hash(password, salt)

    //Criando User
    const user = new User({
        name, 
        email,
        password: passwordHash,
    })

    try {
        await user.save()
        res.status(201).json({msg: 'Usuario Criado com sucesso'})

    }catch (error){

        console.log(error)

        res
        .status(500)
        .json({ msg: 'Error no Servidor'})
    } 
})

//Credenciais
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS

//sniped
mongoose
    .connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.qnilb9g.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => {
        app.listen(3000)
        console.log('Conectou ao Banco!')
})
    .catch((err) => console.log(err))

