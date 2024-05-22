const { param } = require("express-validator")

const IDValidationSchema = [
    param("id").notEmpty().withMessage("id parameter cannot be blank")
]

module.exports = {
    IDValidationSchema
}