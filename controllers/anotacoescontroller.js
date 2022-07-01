const express = require("express");
const authMiddleware = require("../middlewares/auth");
const Anotacoes = require("../models/anotacoes");

const Resultados = require("../models/anotacoes");

const router = express.Router();

router.use(authMiddleware);

router.get("/", async (req, res) => {
  try {
    const anotacoes= await anotacoes.find().populate("usuario");

    return res.send({ anotacoes });
  } catch (err) {
    return res.status(400).send({ error: "Erro ao carregar anotacoes" });
  }
});

router.post("/", async (req, res) => { 

  try {

      const anotacoes= await Anotacoes.create({
          usuario: req.userId,
          titulo: req.titulo,
          descricao: req.descricao,
          data: req.data

      });

      await Anotacoes.save();

      return res.send({ Anotacoes });
  } catch (err) {
      return res.status(400).send({ error: "Erro ao gerar questoes" });
  }

});

router.delete("/:anotacaoid", async (req, res) => {
  try {
    await Anotacoes.findByIdAndRemove(req.params.anotacaoid);

    return res.send();
  } catch (err) {
    return res.status(400).send({ error: "Erro ao deletar anotacao" });
  }
});

module.exports = (app) => app.use("/api/resultados", router);