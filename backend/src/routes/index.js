const express = require("express");
const router = express.Router();
const registerUserController = require("../controllers/registerUserController");

router.post("/register-user", registerUserController);

module.exports = router;
