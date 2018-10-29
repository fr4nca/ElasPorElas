const express = require("express");
const router = express.Router();
const query = require("../config/database");
const moment = require("moment");

router.get("/", (req, res) => {
  try {
    const qry = `SELECT * FROM posts;`;
    query(qry, (err, result) => {
      if (err) res.status(400).send({ error: "Something went wrong" });

      let posts = [];

      result.forEach(post => {
        let newPost = {
          ...post,
          dta_post: moment(post.dta_post)
            .parseZone()
            .format("YYYY-MM-DD HH:mm:ss")
        };
        posts.push(newPost);
      });

      posts
        ? res.status(200).send(posts)
        : res.status(400).send({ error: "Something went wrong" });
    });
  } catch (e) {
    res.status(400).send({ error: "Something went wrong" });
  }
});

router.post("/add", (req, res) => {
  const { mulher_CPF, descricao, anonimo, dta_post } = req.body;
  const qry = `INSERT INTO post VALUES('${dta_post}', '${mulher_CPF}', '${descricao}', ${anonimo})`;
  query(qry, err => {
    if (err) res.status(400).send({ error: "Something went wrong" });
    return res.status(200).send({ msg: "Post adicionado" });
  });
});

router.post("/delete", (req, res) => {
  const { dta_post, mulher_CPF } = req.body;
  let qry = `DELETE FROM comentario WHERE post_dta_post = '${dta_post}' and post_mulher_CPF = '${mulher_CPF}'`;
  query(qry, err => {
    if (err) res.status(400).send({ error: "Something went wrong" });
  });
  qry = `DELETE FROM post WHERE dta_post = '${dta_post}' and mulher_CPF = '${mulher_CPF}'`;
  query(qry, err => {
    if (err) res.status(400).send({ error: "Something went wrong" });
    return res.status(200).send({ msg: "Post deletado" });
  });
});

module.exports = router;
