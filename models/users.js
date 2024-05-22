const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    id_number: String,
    phone_number: String,
    username: String,
    email: String,
    password: String,
    gender: {
        type: String,
        enum: ["Male", "Female", "Other"]
    },
    active: {
        type: Boolean,
        default: true
    },
    last_login: Date,
    role: {
        type: String,
        enum: ["doctor", "patient", "admin"]
    },
    date_created: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("User", UserSchema);