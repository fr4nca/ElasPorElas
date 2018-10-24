const express = require("express");
const router = express.Router();
const query = require("../config/database");

router.get("/", (req, res) => {
  try {
    const qry = `SELECT * FROM mulher`;
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
    const qry = `SELECT * FROM mulher WHERE CPF = '${cpf}'`;
    query(qry, (err, result) => {
      try {
        if (err) res.status(400).send({ error: "Something went wrong" });
        result[0]
          ? res.status(200).send(result[0])
          : res.status(400).send({ error: "Mulher não cadastrada" });
      } catch (e) {
        res.status(400).send({ error: "Something went wrong" });
      }
    });
  } catch (e) {
    res.status(400).send({ error: "Something went wrong" });
  }
});

module.exports = router;
