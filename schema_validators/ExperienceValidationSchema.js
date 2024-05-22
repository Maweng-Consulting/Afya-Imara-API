const { body } = require("express-validator");

const WorkExperienceValidationSchema = [
    body("doctor").notEmpty().withMessage("doctor id cannot be blank"),
    body("employer").notEmpty().withMessage("employer name cannot blank"),
    body("position").notEmpty().withMessage("position cannot be blank"),
    body("start_date").notEmpty().withMessage("start date cannot be blank")
]

module.exports = {
    WorkExperienceValidationSchema
}