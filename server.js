const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "client/build")));

//Middlewares
process.env.NODE_ENV === "development" ? app.use(require("cors")()) : null;
app.use(bodyParser.json());

//Routes
app.use("/auth", require("./api/auth"));
app.use("/mulher", require("./api/mulher"));
app.use("/comentario", require("./api/comentario"));
app.use("/ajuda", require("./api/ajuda"));
app.use("/post", require("./api/post"));
app.use("/catalogo", require("./api/catalogo"));
app.use("/historico", require("./api/historico"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

const port = 5000 || process.env.PORT;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
