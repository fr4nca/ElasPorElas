const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "client/build")));

//Middlewares
app.use(cors());
app.use(bodyParser.json());

//Routes
app.use("/auth", require("./api/auth"));
app.use("/mulher", require("./api/mulher"));
app.use("/comentario", require("./api/comentario"));
app.use("/ajuda", require("./api/ajuda"));
app.use("/post", require("./api/post"));
app.use("/catalogo", require("./api/catalogo"));
app.use("/historico", require("./api/historico"));

const port = 5000 || process.env.PORT;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
