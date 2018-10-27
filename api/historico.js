const express = require("express");
const router = express.Router();
const query = require("../config/database");
const moment = require("moment");

router.get("/adm", (req, res) => {
  const qry = "SELECT * FROM ajudas";
  query(qry, (err, result) => {
    if (err) res.status(400).send({ error: "Something went wrong" });
    result
      ? res.status(200).send(result)
      : res.status(400).send({ error: "Something went wrong" });
  });
});

router.post("/add", (req, res) => {
  const {
    dta_solicitacao,
    mulher_CPF,
    catalogo_mulher_CPF,
    catalogo_ajuda_ID_ajuda1
  } = req.body;
  const qry = `INSERT INTO historico(dta_solicitacao, mulher_CPF, catalogo_mulher_CPF, catalogo_ajuda_ID_ajuda1) VALUES('${dta_solicitacao}', '${mulher_CPF}', '${catalogo_mulher_CPF}', '${catalogo_ajuda_ID_ajuda1}')`;
  query(qry, (err, result) => {
    if (err) console.log(err);
    result
      ? res.status(200).send(result)
      : res.status(400).send({ error: "Something went wrong" });
  });
});

router.get("/solicitacoes/:cpf", (req, res) => {
  const { cpf } = req.params;
  const qry = `select * from ajudas where dta_aceite is null and cancelada = 0 and catalogo_mulher_CPF = '${cpf}' order by dta_solicitacao DESC;`;
  query(qry, (err, result) => {
    if (err) return res.status(400).send({ error: "Something went wrong" });
    let historicos = [];

    result.forEach(historico => {
      let newHistorico = {
        ...historico,
        dta_solicitacao: moment(historico.dta_solicitacao)
          .parseZone()
          .format("YYYY-MM-DD HH:mm:ss")
      };
      historicos.push(newHistorico);
    });

    result
      ? res.status(200).send(historicos)
      : res.status(400).send({ error: "Something went wrong" });
  });
});

router.get("/:cpf", (req, res) => {
  const { cpf } = req.params;
  const qry = `select * from ajudas where mulher_CPF = '${cpf}' or catalogo_mulher_CPF = '${cpf}' order by dta_solicitacao DESC`;
  query(qry, (err, result) => {
    if (err) return res.status(400).send({ error: "Something went wrong" });
    let historicos = [];

    result.forEach(historico => {
      let newHistorico = {
        ...historico,
        dta_solicitacao: moment(historico.dta_solicitacao)
          .parseZone()
          .format("YYYY-MM-DD HH:mm:ss")
      };
      historicos.push(newHistorico);
    });

    result
      ? res.status(200).send(historicos)
      : res.status(400).send({ error: "Something went wrong" });
  });
});

router.post("/finalizar", (req, res) => {
  const {
    cancelada,
    mulher_CPF,
    catalogo_mulher_CPF,
    dta_solicitacao
  } = req.body;
  const qry = `UPDATE historico SET cancelada = '${cancelada}' where mulher_CPF = '${mulher_CPF}' and catalogo_mulher_CPF = '${catalogo_mulher_CPF}' and dta_solicitacao = '${dta_solicitacao}'`;

  query(qry, (err, result) => {
    if (err) return res.status(400).send({ error: "Something went wrong" });
    result
      ? res.status(200).send(result)
      : res.status(400).send({ error: "Something went wrong" });
  });
});

router.post("/aceitar", (req, res) => {
  const {
    dta_aceite,
    mulher_CPF,
    catalogo_mulher_CPF,
    dta_solicitacao
  } = req.body;

  const qry = `UPDATE historico SET dta_aceite = '${dta_aceite}' where mulher_CPF = '${mulher_CPF}' and catalogo_mulher_CPF = '${catalogo_mulher_CPF}' and dta_solicitacao = '${dta_solicitacao}'`;

  query(qry, (err, result) => {
    if (err) return res.status(400).send({ error: "Something went wrong" });
    result
      ? res.status(200).send(result)
      : res.status(400).send({ error: "Something went wrong" });
  });
});

module.exports = router;
