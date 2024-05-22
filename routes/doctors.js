const express = require("express");
const multer = require("multer");
const { DoctorValidationSchema } = require("../schema_validators/DoctorValidationSchema");

const { getDoctors, onboardDoctor, uploadProfilePhoto, getDoctorProfile } = require("../controllers/doctors");

/**
 * This logic is responsible of handling file uploads
 */
const { storage } = require("../utils/file_handler");
const upload = multer({ storage: storage });

const router = express.Router();

router.get("/", getDoctors);
router.get("/:id", getDoctorProfile);
router.post("/onboard-doctor", DoctorValidationSchema, onboardDoctor);
router.post("/upload-profile-photo/", upload.single("profile_photo"), uploadProfilePhoto)

module.exports = router;