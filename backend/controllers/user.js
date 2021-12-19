const express = require('express')
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require('../models/user')
const {SECRET} = process.env

const UserRouter = express.Router()

// User Routes
UserRouter.post("/authenticate", (req, res) => {
    const { username, password } = req.body

    User.findOne({ username }, async (err, user) => {
        if (!user) {
            res.status(400).json(`User not found`)
            return
        }

        const success = await bcrypt.compare(password, user.password)
        if (!success) {
            res.status(400).json('Wrong password')
            return
        }

        const token = jwt.sign({ username }, SECRET);
        res.json({token, username})
    });
});

// create user
UserRouter.post("/register", async (req, res) => {

    if (!req.body.password || !req.body.username) {
        res.status(400).json('Invalid parameters')
        return
    }

    req.body.password = await bcrypt.hash(req.body.password, await bcrypt.genSalt(10))

    User.create(req.body, async (err, user) => {
      
        if (err) {
            console.log({err})
            res.status(400).json('Username taken')
            return
        }

        const username = user.username
        const token = jwt.sign({username}, SECRET);
        res.json({token, username})
    })
})

module.exports = UserRouter