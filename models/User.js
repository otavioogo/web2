const mongoose = require('mongoose')

const User = mongoose.model('User', {
    name: String,
    email: String,
    password: String,
    conta_ativa: {
        type: Boolean,
        default: true
    }
})

module.exports = User