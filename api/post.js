const express = require("express");
const router = express.Router();
const query = require("../config/database");
const moment = require("moment");

router.get("/", (req, res) => {
  try {
    const qry = `SELECT * FROM post;`;
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

router.get("/posts/:cpf", (req, res) => {
  const { cpf } = req.params;
  const qry = `SELECT p.*, c.* FROM post p INNER JOIN comentario c ON c.post_dta_post = p.dta_post where p.mulher_CPF='${cpf}';`;
  query(qry, (err, result) => {
    if (err) res.status(400).send({ error: "Something went wrong" });

    // let posts = [];

    // result.forEach(post => {
    //   let newPost = {
    //     ...post,
    //     dta_post: moment(post.dta_post)
    //       .parseZone()
    //       .format("YYYY-MM-DD HH:mm:ss")
    //   };
    //   posts.push(newPost);
    // });

    result
      ? res.status(200).send(result)
      : res.status(400).send({ error: "Something went wrong" });
  });
});

router.post("/add", (req, res) => {
  const { mulher_CPF, descricao, anonimo, dta_post } = req.body;
  const qry = `INSERT INTO post VALUES('${dta_post}', '${mulher_CPF}', '${descricao}', ${anonimo})`;
  query(qry, err => {
    if (err) res.status(400).send({ error: "Something went wrong" });
    return res.status(200).send({ msg: "Post adicionado" });
  });
});

module.exports = router;
