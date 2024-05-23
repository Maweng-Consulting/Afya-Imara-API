const express = require("express");
const { WorkExperienceValidationSchema } = require("../schema_validators/ExperienceValidationSchema")
const { IDValidationSchema } = require("../schema_validators/IDValidationSchema");

const {
  getAllWorkExperiences,
  getDoctorExperiences,
  getDoctorExperienceRecord,
  createExperienceRecord,
  deleteExperienceRecord,
  updateExperienceRecord
} = require("../controllers/work_experience");


const router = express.Router()

router.get("/", getAllWorkExperiences);
router.get("/:id", IDValidationSchema, getDoctorExperienceRecord);
router.get("/doctor-experiences", getDoctorExperiences);
router.post("/", WorkExperienceValidationSchema, createExperienceRecord);
router.put("/:id", updateExperienceRecord);
router.delete("/:id", deleteExperienceRecord);

module.exports = router