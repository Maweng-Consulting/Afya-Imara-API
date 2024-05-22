const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator")

const { Doctor } = require("../models/doctors");
const User = require("../models/users");


const getDoctors = async(req, res) => {
    const doctors = await Doctor.find({}).populate("user")
    res.send({ count: doctors.length, doctors: doctors }).status(200)
}

const getDoctorProfile = async(req, res) => {
    const { id } = req.params 

    try {
        const doctor = await Doctor.findOne({"_id": id}).populate("user")
        if(!doctor) return res.status(404).send({ error: `Doctor with id: ${id} not found!!` })
        res.send(doctor).status(200)
    } catch (error) {
        console.log({ error: error.message });
        return res.status(400).send({ error: error.message })
    }
}

/*
    Notes:
        - A doctor is just a user with the role of a doctor.
        *** Then, why have a Doctor schema if a doctor is a user? ***
        - Even though a doctor is a user, there are attributes which are totally specific to doctors but not other users.
        - So logically, we will create a user, the proceed to create a doctor instance for that user.
        - Basically, a doctor cannot exist without a corresponding User profile/instance.
*/

const onboardDoctor = async(req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const data = req.body
    try {
        const existingUser = await User.findOne({ "email": data.email });
        if(existingUser) return res.status(400).send({ error: `User with email: ${data.email} already exists!!` })

        const hashedPassword = await bcrypt.hash(data.password, 10);
        const user = new User({
            first_name: data.first_name,
            last_name: data.last_name,
            id_number: data.id_number,
            phone_number: data.phone_number,
            username: data.username,
            email: data.email,
            gender: data.gender,
            role: data.role,
            password: hashedPassword
        });
        await user.save();
        if(!user) return res.status(400).send({ error: "Something went wrong, the user could not be created!!" })
        /* After creating the user, proceed and create the doctor profile */
        const doctor = new Doctor({
            user: user._id,
            category: data.category
        });
        await doctor.save()
        if(!doctor) return res.status(400).send({ error: "Something went wrong, the doctor profile could not be created!!" })
        res.send({ message: "Doctor profile successfully created!!" }).status(201)
    } catch (error) {
        console.log({ error: error.message });
        return res.status(400).send({ error: error.message })
    }
};

const uploadProfilePhoto = async(req, res) => {
    const profile_photo = req.file.path 

    console.log(id, profile_photo)

    try {
       
       res.send({ message: "Hello World" })
    } catch (error) {
        console.log({ error: error.message });
        return res.status(400).send({ error: error.message })
    }

}

module.exports = {
    onboardDoctor,
    getDoctors,
    uploadProfilePhoto,
    getDoctorProfile
}