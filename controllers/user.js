
const User = require("../models/user");


const handleGetAllUsers = async (req, res) => {
    const allDbUsers = await User.find({});
    return res.json(allDbUsers)
}

const handleGetUserById = async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: "User not found" });
    return res.json(user)
}


const handleUpdateUserById = async (req, res) => {
    await User.findByIdAndUpdate(req.params.id, {
        firstName: req.body.first_name,
        lastName: req.body.last_name,
        email: req.body.email,
        gender: req.body.gender,
        jobTitle: req.body.job_title,
    })
    return res.json({ status: "Success" })
}

const handleDeleteUserById = async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    return res.json({ status: "User successfully deleted" })
}


const handleCreateNewUser = async (req, res) => {
    const body = req.body;

    if (!body ||
        !body.first_name ||
        !body.last_name ||
        !body.email ||
        !body.gender ||
        !body.job_title) {
        return res.status(400).json({ msg: "All fields are required" })
    }

    const result = await User.create({
        firstName: body.first_name,
        lastName: body.last_name,
        email: body.email,
        gender: body.gender,
        jobTitle: body.job_title,
    })
    return res.status(201).json({ msg: "Success", id: result.id })
}

module.exports = {
    handleGetAllUsers,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateNewUser
}