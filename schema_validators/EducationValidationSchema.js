const { body } = require("express-validator");

const EducationValidationSchema = [
    body("doctor").notEmpty().withMessage("doctor id cannot be blank"),
    body("level").notEmpty().withMessage("level of education cannot be blank"),
    body("school_name").notEmpty().withMessage("school name cannot be blank"),
    body("start_date").notEmpty().withMessage("start date date cannot be blank"),
    body("graduation_date").notEmpty().withMessage("graduation date cannot be blank"),
    body("graduated").notEmpty().withMessage("graduation status cannot be blank")
]

module.exports = {
    EducationValidationSchema
}