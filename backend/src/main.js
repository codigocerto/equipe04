const express = require("express");
const api = express();
const env = require("./env");

const sendMailController = require("./controllers/sendMailController");
const resendMailController = require("./controllers/resendMailController");
const updateNewsletterController = require("./controllers/updateNewsletterController");
const deleteUserController = require("./controllers/deleteUserController");

api.use(express.json());

api.post("/cadastro", sendMailController);
api.post("/resend-mail", resendMailController);
api.patch("/update-newsletter", updateNewsletterController);
api.delete("/delete-user", deleteUserController);

api.listen(env.PORT, () => console.log(`Back-End running at ${env.PORT}`));
