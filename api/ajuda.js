const express = require("express");
const router = express.Router();
const query = require("../config/database");

router.get("/", (req, res) => {
  const qry = `SELECT * FROM ajuda;`;
  query(qry, (err, ajudas) => {
    if (err) throw err;
    res.send(ajudas);
  });
});

module.exports = router;
