const express = require("express");
const router = express.Router();
const query = require("../config/database");

router.get("/", (req, res) => {
  const qry = `SELECT * FROM post;`;
  query(qry, (err, posts) => {
    if (err) throw err;
    res.send(posts);
  });
});

module.exports = router;
