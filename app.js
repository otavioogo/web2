/* imports */
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const app = express()

//Criando uma Rota Publica
app.get('/', (req, res) => {
    res.status(200).json({msg: "Bem vindo a nossa API"})
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

