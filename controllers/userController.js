const fs = require('fs');



const users = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/users.json`));


// GET ALL THE DATA

exports.getAllUsers = (req, res) => {
    res.status(200).json({
        status: "success",
        requestedAt: req.requestTime,
        result: users.length,
        data: {
            users
        }
    })
}
exports.getUser = (req, res) => {

    res.status(500).json({
        status: "success",
        message:"net yet implemented"
    })
}
exports.updateUser = (req, res) => {

    res.status(500).json({
        status: "success",
        message:"net yet implemented"
    })
}
exports.createUser = (req, res) => {

    res.status(500).json({
        status: "success",
        message:"net yet implemented"
    })
}
exports.deleteUser = (req, res) => {

    res.status(500).json({
        status: "success",
        message:"net yet implemented"
    })
}