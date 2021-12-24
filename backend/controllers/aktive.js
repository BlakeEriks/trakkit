const express = require('express')
const Aktive = require('../models/aktive')
const AktiveRouter = express.Router()

AktiveRouter.get('/', async (req,res) => {
    const user_id = req.query.userId

    if (!user_id) {
        res.status(400).json("User ID required")
        return
    }

    let aktive = await Aktive.findOne({user_id}).exec()
    if (!aktive) {
        aktive = await Aktive.create({user_id})
    }

    res.json(aktive)
})

AktiveRouter.put('/:id', async (req,res) => {
    const aktive = await Aktive.findByIdAndUpdate(req.params.id, req.body, {new: true})
    console.log(req.body)
    res.json(aktive)
})

module.exports = AktiveRouter