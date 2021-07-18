const express = require("express");

const router = express.Router();

const userController = require("../controllers/Users");

router.post("/signup", userController.signup);

router.post("/login", userController.login);

module.exports = router;

// https://www.freecodecamp.org/news/learn-how-to-handle-authentication-with-node-using-passport-js-4a56ed18e81e/