const express = require("express");
const router = express.Router();
const query = require("../config/database");

router.get("/", (req, res) => {
  const qry = `SELECT * FROM comentario;`;
  query(qry, (err, comentarios) => {
    if (err) throw err;
    res.send(comentarios);
  });
});

module.exports = router;
