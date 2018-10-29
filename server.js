const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "client/build")));

//Middlewares
process.env.NODE_ENV !== "production" ? app.use(require("cors")()) : null;
app.use(bodyParser.json());

//Routes
app.use("/api/auth", require("./api/auth"));
app.use("/api/mulher", require("./api/mulher"));
app.use("/api/comentario", require("./api/comentario"));
app.use("/api/ajuda", require("./api/ajuda"));
app.use("/api/post", require("./api/post"));
app.use("/api/catalogo", require("./api/catalogo"));
app.use("/api/historico", require("./api/historico"));
app.use("/api/relatorios", require("./api/relatorios"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
