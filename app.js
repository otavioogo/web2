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

//Criando rota Privada
app.get("/user/:id", checkToken, async (req, res) => {
    const id = req.params.id

    //Checando se usuario existe
    const user = await User.findById(id, '-password')

    if(!user) {
        return res.status(404).json({ msg: 'Usuario Nao encontrado!' })
    }

    res.status(200).json({ user })
})


function checkToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(" ") [1]

    if(!token) {
        return res.status(401).json({msg: 'ACESSO NEGADO'})
    }

    try {
        const secret = process.env.SECRET

        jwt.verify(token, secret)

        next()

    }catch(error){
        res.status(400).json({msg: "TOKEN INVALIDO!"})
    }
}


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

//Login Usuario
app.post("/auth/login", async (req, res) => {
    const { email, password } = req.body

    //Validacao 
    if (!email) {
        return res.status(422).json({ msg: 'O email e Obrigatorio!' })
    }

    if (!password) {
        return res.status(422).json({ msg: 'A senha e Obrigatorio!' })
    }

    //checando se User Existe
    const user = await User.findOne({ email: email })
    if(!user) {
        return res.status(404).json({ msg: 'Usuario nao Encontrado!' })
    }

    //checando se password combina
    const checkPassword = await bcrypt.compare(password, user.password)

    if(!checkPassword) {
        return res.status(422).json({ msg: 'Senha Invalida!' })
    }

    try {

        const secret = process.env.SECRET 

        const token = jwt.sign({
            id: user._id,
        },
        secret,
        )

        res.status(200).json({msg: "Autenticacao realizada com sucesso", token})

    } catch(err) {
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

