const mongoose = require("mongoose");

const DoctorSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    category: String,
    approved: {
        type: Boolean,
        default: false
    },
    profile_photo: String,
    date_created: {
        type: Date,
        default: Date.now
    }
});

const EducationSchema = new mongoose.Schema({
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor"
    },
    level: {
        type: String,
        enum: ["Primary", "Secondary", "College", "University"]
    },
    school_name: String,
    start_date: Date,
    graduation_date: Date,
    graduated: {
        type: Boolean,
        default: false
    },
    date_created: {
        type: Date,
        default: Date.now
    }
});

const WorkExperienceSchema = new mongoose.Schema({
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor"
    },
    employer: String,
    position: String,
    start_date: Date,
    end_date: Date,
    works_here: {
        type: Boolean,
        default: false
    },
    description: String,
    date_created: {
        type: Date,
        default: Date.now
    }
});

// Create models from the schemas
const Doctor = mongoose.model("Doctor", DoctorSchema);
const Education = mongoose.model("Education", EducationSchema);
const Experience = mongoose.model("Experience", WorkExperienceSchema);

// Export the models as an object
module.exports = {
    Doctor,
    Education,
    Experience
};