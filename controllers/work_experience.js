const { validationResult } = require("express-validator");
const { Experience } = require("../models/doctors");

const getAllWorkExperiences = async(req, res) => {
    const experiences = await Experience.find({})
    res.send({ count: experiences.length, records: experiences })
}

const getDoctorExperiences = async(req, res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        return res.status(400).send({ errors: errors.array() })
    }

    const experiences = Experience.find({ "doctor": id })
    res.send({ count: experiences.length, records: experiences });
}

const getDoctorExperienceRecord = async(req, res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        return res.status(400).send({ errors: errors.array() })
    }

    try {
        const experience = await Experience.findById({ "_id": id })
        if(!experience) return res.status(404).send({ error: `Experiece record with id: ${id} not found!` })
        return res.send(experience).status(200)
    } catch (error) {
        console.log({ error: error.message });
        return res.status(500).send({ error: error.message })
    }
}