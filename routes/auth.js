const express = require("express");
const { login } = require("../auth/login");

const { LoginSchema } = require("../schema_validators/LoginSchema");

const router = express.Router();

router.post("/login", LoginSchema, login)

module.exports = router