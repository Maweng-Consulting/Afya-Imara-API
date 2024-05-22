const { body } = require('express-validator');

const LoginSchema = [
    body('email')
        .isString().withMessage("Email must be a string")
        .isEmail().withMessage('Please provide a valid email address')
        .notEmpty().withMessage('Email is required'),
    body('password')
      .notEmpty().withMessage('Password is required'),
  ];


module.exports = {
    LoginSchema
}