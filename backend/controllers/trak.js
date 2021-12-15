const express = require('express')
const Trak = require('../models/trak')

const TrakRouter = express.Router()

TrakRouter.get('/', (req,res) => {
    Trak.find({}, (err, traks) => {
        if (err) {
            console.log({err})
        }
        res.json(traks)
    })
})

TrakRouter.post('/', (req,res) => {
    Trak.create(req.body, (err,trak) => {
        if (err) {
            console.log({err})
        }
        res.json(trak)
    })
})

TrakRouter.delete('/', (req,res) => {
    Trak.deleteMany({}, err => {
        if (err) console.log(err)
        else res.json('Cleared Trak collection.')
    })
})

module.exports = TrakRouter