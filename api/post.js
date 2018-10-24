const express = require("express");
const router = express.Router();
const query = require("../config/database");

router.get("/", (req, res) => {
  try {
    const qry = `SELECT * FROM post;`;
    query(qry, (err, posts) => {
      if (err) res.status(400).send({ error: "Something went wrong" });
      posts
        ? res.status(200).send(posts)
        : res.status(400).send({ error: "Something went wrong" });
    });
  } catch (e) {
    res.status(400).send({ error: "Something went wrong" });
  }
});

router.post("/add", (req, res) => {
  try {
    const { mulher_CPF, descricao } = req.body;
    const qry = `INSERT INTO post VALUES(now(), '${mulher_CPF}', '${descricao}')`;
    query(qry, err => {
      if (err) res.status(400).send({ error: "Something went wrong" });
      return res.status(200).send({ msg: "Post adicionado" });
    });
  } catch (e) {
    return res.status(400).send({ error: "Something went wrong" });
  }
});

module.exports = router;
