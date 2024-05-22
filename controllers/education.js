const { validationResult } = require("express-validator")
const { Education } = require("../models/doctors")

const getAllEducationRecords = async(req, res) => {
    const educations = await Education.find({})
    res.send({ count: educations.length, records: educations })
}

const getDoctorEducationRecords = async(req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { id } = req.params
    const doctor_educations = await Education.find({ "doctor": id })
    res.send({ count: doctor_educations.length, records: doctor_educations }).status(200)
};


const createDoctorEducationRecord = async(req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const data = req.body

    try {
        const education = await Education.create(data)
        if(!education) return res.status(400).send({ erorr: "record could not be created!!" })
        res.send(education).status(201)
    } catch (error) {
        console.log({ error: error.message });
        return res.status(400).send({ error: error.message })
    }
};

const getDoctorEducationRecord = async(req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { id } = req.params
    try {
        const education = await Education.findById({ "_id": id })
        if(!education) return res.status(404).send({ error: `Education record with id: ${id} not found!!` })
        res.send(education).status(200);
    } catch (error) {
        console.log({ error: error.message });
        return res.status(500).send({ error: error.message })
    }
}

const updateDoctorEducationRecord = async(req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { body, params: { id } } = req.body

    try {
        const education = await Education.findByIdAndUpdate(id, {...body}, { new: true })
        if(!education) return res.status(404).send({ error: `Education record with id: ${d} not found!!` })
        res.send({ message: "Education record updated successfully" }).status(200)
    } catch (error) {
        console.log({ error: error.message });
        return res.status(400).send({ error: error.message })
    }
};

const deleteDoctorEducationRecord = async(req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { id } = req.params
    try {
        const education = await Education.findByIdAndDelete({ "_id": id })
        if(!education) return res.status(404).send({ error: `Education record with id: ${id} not found!!` })
        res.send({ message: "Education record deleted successfully" }).status(204)
    } catch (error) {
        console.log({ error: error.message });
        return res.status(500).send({ error: error.message })
    }
}

module.exports = {
    getAllEducationRecords,
    getDoctorEducationRecords,
    getDoctorEducationRecord,
    createDoctorEducationRecord,
    updateDoctorEducationRecord,
    deleteDoctorEducationRecord

}