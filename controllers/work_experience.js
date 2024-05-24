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
    const { id } = req.params
    const experiences = await Experience.find({ "doctor": id })
    res.send({ count: experiences.length, records: experiences });
}

const getDoctorExperienceRecord = async(req, res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        return res.status(400).send({ errors: errors.array() })
    }

    const { id } = req.params

    try {
        const experience = await Experience.findById(id)
        if(!experience) return res.status(404).send({ error: `Experiece record with id: ${id} not found!` })
        return res.send(experience).status(200)
    } catch (error) {
        console.log({ error: error.message });
        return res.status(500).send({ error: error.message })
    }
}


const createExperienceRecord = async(req, res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        return res.status(400).send({ errors: errors.array() })
    }

    const data = req.body

    try {
        
        const experience = await Experience.create(data)
        if(!experience) return res.status(400).send({ error: "Something went wrong, the experience record could not be created!!" })
        res.send(experience).status(201)

    } catch (error) {
        console.log({ error: error.message });
        return res.status(500).send({ error: error.message })
    }
}


const updateExperienceRecord = async(req, res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        return res.status(400).send({ errors: errors.array() })
    }

    const { body, params: { id } } = req

    try {
        const experience = await Experience.findByIdAndUpdate(id, { ...body }, { new: true })
        if(!experience) return res.status(404).send({ error: `Experience record with id: ${id} not found!` })
        res.send(experience).status(200)
    } catch (error) {
        console.log({ error: error.message });
        return res.status(500).send({ error: error.message })
    }
}

const deleteExperienceRecord = async(req, res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        return res.status(400).send({ errors: errors.array() })
    }
    const { id } = req.params
    try {
        const experience = await Experience.findByIdAndDelete({ "_id": id })
        if(!experience) return res.status(404).send({ error: `Experience record with id: ${id} not found!!` })
        res.send({ message: 'Experience record updated successfully!!' }).status(201)
    } catch (error) {
        console.log({ error: error.message });
        return res.status(500).send({ error: error.message })
    }
}


module.exports = {
    getAllWorkExperiences,
    getDoctorExperiences,
    getDoctorExperienceRecord,
    createExperienceRecord,
    updateExperienceRecord,
    deleteExperienceRecord
}