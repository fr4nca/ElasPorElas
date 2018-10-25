const express = require("express");
const router = express.Router();
const query = require("../config/database");

router.get("/", (req, res) => {
  const qry = `SELECT * FROM catalogo;`;
  query(qry, (err, catalogo) => {
    if (err) throw err;
    res.send(catalogo);
  });
});

router.post("/ajuda", (req, res) => {
  try {
    const { id_ajuda } = req.body;
    const qry = `SELECT * FROM catalogo WHERE ajuda_ID_ajuda1 = '${id_ajuda}'`;
    query(qry, (err, result) => {
      if (err) res.status(400).send({ error: "Something went wrong" });
      result
        ? res.status(200).send(result)
        : res.status(400).send({ error: "Something went wrong" });
    });
  } catch (e) {
    res.status(400).send({ error: "Something went wrong" });
  }
});

router.get("/:cpf", (req, res) => {
  try {
    const { cpf } = req.params;
    const qry = `SELECT * FROM catalogo WHERE mulher_CPF = '${cpf}'`;
    query(qry, (err, result) => {
      if (err) res.status(400).send({ error: "Something went wrong" });
      result
        ? res.status(200).send(result)
        : res.status(400).send({ error: "Something went wrong" });
    });
  } catch (e) {
    res.status(400).send({ error: "Something went wrong" });
  }
});

module.exports = router;
