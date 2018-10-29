const express = require("express");
const router = express.Router();
const query = require("../config/database");

router.get("/ajudas", (req, res) => {
  let qry = `select * from relatorio_qnt_ajuda;`;
  query(qry, (err, result) => {
    if (err) res.status(400).send({ error: "Something went wrong" });
    res.status(200).send(result);
  });
});

router.get("/mulheres", (req, res) => {
  let qry = `select * from relatorio_mulheres_especialidade;`;
  query(qry, (err, result) => {
    if (err) res.status(400).send({ error: "Something went wrong" });
    res.status(200).send(result);
  });
});

router.get("/mulher_qnt", (req, res) => {
  let qry = `select * from mulheres_qnt_ajudas;`;
  query(qry, (err, result) => {
    if (err) res.status(400).send({ error: "Something went wrong" });
    res.status(200).send(result);
  });
});

module.exports = router;
