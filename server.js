const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 5000 || process.env.PORT;

//Middlewares
if (process.env.NODE_ENV !== "production") app.use(cors());
app.use(bodyParser.json());

//Routes
app.use("/auth", require("./api/auth"));
app.use("/mulher", require("./api/mulher"));
app.use("/comentario", require("./api/comentario"));
app.use("/ajuda", require("./api/ajuda"));
app.use("/post", require("./api/post"));
app.use("/catalogo", require("./api/catalogo"));
app.use("/historico", require("./api/historico"));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
