const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();
const query = require("../config/database");

router.post("/register", async (req, res) => {
  try {
    const { nome, email, CPF, DDD, telefone, senha } = req.body;
    const hash = await bcrypt.hash(senha, 10);
    query(`SELECT email FROM mulher WHERE email='${email}'`, (err, result) => {
      if (result[0] === undefined) {
        if (req.body.link) {
          const { link } = req.body;
          const qry = `INSERT INTO mulher VALUES ('${CPF}', '${nome}', ${DDD}, ${telefone}, '${email}', '${link}', '${hash}')`;
          query(qry, err => {
            if (err) {
              return res.status(400).send({ error: "Registration failed" });
            }
            return res.status(200).send({ msg: "Registration successfull" });
          });
        } else if (!req.body.link) {
          const qry = `INSERT INTO mulher(CPF, nome, DDD_telefone, num_telefone, email,  senha) VALUES ('${CPF}', '${nome}', ${DDD}, ${telefone}, '${email}', '${hash}')`;
          query(qry, err => {
            if (err) {
              return res.status(400).send({ error: "Registration failed" });
            }
            return res.status(200).send({ msg: "Registration successfull" });
          });
        }
      } else {
        return res.status(400).send({ error: "User already exists" });
      }
    });
  } catch (e) {
    return res.status(400).send({ error: "Registration failed" });
  }
});

router.post("/authenticate", async (req, res) => {
  const { email, senha } = req.body;
  const qry = `SELECT * FROM mulher WHERE email = '${email}'`;
  query(qry, async (err, result, fields) => {
    if (result[0]) {
      let user = result[0];
      if (!(await bcrypt.compare(senha, user.senha))) {
        return res.status(200).send({ error: "Senha inválida" });
      } else {
        user.senha = "";
        return res.status(200).send(user);
      }
    } else {
      return res.status(200).send({ error: "Usuário não encontrado" });
    }
  });
});

module.exports = router;
