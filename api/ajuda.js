const express = require("express");
const router = express.Router();
const query = require("../config/database");

router.post("/register", (req, res) => {
  const { CPF, ajuda } = req.body;
  const qry = `INSERT INTO catalogo VALUES( '${CPF}', '${ajuda}' )`;
  query(qry, err => {
    if (err) {
      return res.status(400).send({ error: "Registration failed" });
    }
    return res.status(200).send({ msg: "Registration successfull" });
  });
});

router.get("/", (req, res) => {
  const qry = "SELECT * FROM ajuda";
  query(qry, (err, result) => {
    if (err) res.status(400).send({ error: "Registration failed" });
    result
      ? res.status(200).send(result)
      : res.status(400).send({ error: "Something went wrong" });
  });
});

module.exports = router;
