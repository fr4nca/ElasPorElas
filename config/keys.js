module.exports = {
  localDB: {
    host: "localhost",
    user: "fr4nca",
    password: "62013",
    database: "mydb"
  },
  db: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
  }
};
