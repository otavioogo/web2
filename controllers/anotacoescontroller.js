const express = require("express");
const authMiddleware = require("../middlewares/auth");

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

router.delete("/:anotacaoid", async (req, res) => {
  try {
    await Anotacoes.findByIdAndRemove(req.params.anotacaoid);

    return res.send();
  } catch (err) {
    return res.status(400).send({ error: "Erro ao deletar anotacao" });
  }
});

module.exports = (app) => app.use("/api/resultados", router);