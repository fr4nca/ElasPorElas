const express = require("express");
const router = express.Router();
const query = require("../config/database");

router.post("/add", (req, res) => {
  try {
    const {
      post_dta,
      mulher_CPF,
      post_mulher_CPF,
      texto_comentario,
      dta_comentario
    } = req.body;
    const qry = `INSERT INTO comentario VALUES('${dta_comentario}', '${post_mulher_CPF}', '${mulher_CPF}', '${texto_comentario}','${post_dta}')`;
    query(qry, err => {
      if (err) res.status(400).send({ error: "Something went wrong" });
      return res.status(200).send({ msg: "Comentário adicionado" });
    });
  } catch (e) {
    return res.status(400).send({ error: "Something went wrong" });
  }
});

router.post("/getComentarios", (req, res) => {
  try {
    const { post_dta, post_mulher_CPF } = req.body;
    const qry = `SELECT * FROM comentarios WHERE post_dta_post = '${post_dta}' and post_mulher_CPF = '${post_mulher_CPF} '`;
    query(qry, (err, result) => {
      if (err) return res.status(400).send({ error: "Something went wrong" });
      result
        ? res.status(200).send(result)
        : res.status(400).send({ error: "Something went wrong" });
    });
  } catch (e) {
    return res.status(400).send({ error: "Something went wrong" });
  }
});

module.exports = router;
