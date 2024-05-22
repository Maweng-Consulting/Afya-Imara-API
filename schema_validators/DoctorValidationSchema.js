const { body } = require('express-validator');

const DoctorValidationSchema = [
    body("first_name")
        .notEmpty().withMessage("first name cannot be empty")
        .isString().withMessage("first name must be a string!"),
    body("last_name")
        .notEmpty().withMessage("last name cannot be empty")
        .isString().withMessage("last name must be a string"),
    body("email")
        .notEmpty().withMessage("email cannot be blank")
        .isEmail().withMessage("email must be a valid email address")
        .isString().withMessage("email must be a string"),
    body("username").notEmpty().withMessage("username cannot be blank"),
    body("id_number").notEmpty().withMessage("ID number cannot be blank"),
    body("phone_number").notEmpty().withMessage("phone number cannot be blank"),
    body("password").notEmpty().withMessage("password cannot be blank"),
    body("role").notEmpty().withMessage("role cannot be blank")
]

module.exports = {
    DoctorValidationSchema
}