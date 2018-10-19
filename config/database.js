const mysql = require("mysql");
const dbKeys = require("./keys");

const con = mysql.createConnection(
  process.env.NODE_ENV !== "production" ? dbKeys.localDB : dbKeys.db
);

con.connect(() => {
  console.log("Database connected");
});

const query = (qry, callback) => {
  con.query(qry, (err, res, fields) => {
    if (err) throw err;
    callback(err, res, fields);
  });
};

module.exports = query;
