const express = require("express");
const api = express();
const env = require("./env");

const sendMailController = require("./controllers/sendMailController");
const updateNewsletterController = require("./controllers/updateNewsletterController");

api.use(express.json());

api.post("/cadastro", sendMailController);
api.patch("/update-newsletter", updateNewsletterController);

api.listen(env.PORT, () => console.log(`Back-End running at ${env.PORT}`));