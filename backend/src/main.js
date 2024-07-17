const express = require("express");
const api = express();
const env = require("./env");
const routes = require("./routes");

api.use(express.json());

api.use(routes);

api.listen(env.PORT, () => {
  console.log(`Servidor rodando na porta: ${env.PORT}`);
});
