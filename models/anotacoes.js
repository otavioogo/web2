const mongoose = require("../database");

const AnotacoesSchema = new mongoose.Schema({
 titulo: {
    type: String,
    require: true,
  }, 
 descricao: {
    type: String,
    require: true,
  },
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
  data: {
    type: Date,
    default: Date.now,
  },
});

const Anotacoes = mongoose.model("Anotacoes", AnotacoesSchema );

module.exports = Anotacoes;