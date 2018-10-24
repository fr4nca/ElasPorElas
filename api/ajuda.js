const express = require("express");
const router = express.Router();
const query = require("../config/database");

router.post("/register", (req, res) => {
  try {
    const { CPF, ajuda } = req.body;
    const qry = `INSERT INTO catalogo VALUES( '${CPF}', ${ajuda} )`;
    query(qry, err => {
      if (err) {
        return res.status(400).send({ error: "Registration failed" });
      }
      return res.status(200).send({ msg: "Registration successfull" });
    });
  } catch (e) {
    return res.status(400).send({ error: "Registration failed" });
  }
});

module.exports = router;
