const express = require("express");
const router = express.Router();
const query = require("../config/database");

router.get("/", (req, res) => {
  const qry = `SELECT * FROM catalogo;`;
  query(qry, (err, catalogo) => {
    if (err) throw err;
    res.send(catalogo);
  });
});

module.exports = router;
