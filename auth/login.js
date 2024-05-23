const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validationResult } = require('express-validator');


const User = require("../models/users");

const login = async(req, res) => {
    const errors = validationResult(req);
  
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const user = await User.findOne({ "email": req.body.email })
    if(!user) return res.status(404).send({ error: `User with email: ${req.body.email} not found!!` });

    const passwordMatches = await bcrypt.compare(req.body.password, user.password);
    if(!passwordMatches) return res.status(400).send({ error: "Passwords do not match!!" });

    const token = await jwt.sign({ user: { id: user.id, username: user.username, email: user.email, first_name: user.first_name, last_name: user.last_name, role: user.role } }, "1234", { expiresIn: "10h" })
    res.send({ message: "Login Successful", token: token }).status(200)
};

module.exports = {
    login
}