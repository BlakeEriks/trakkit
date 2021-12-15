const express = require('express')
const moment = require('moment')
const Trak = require('../models/trak')
const TrakRouter = express.Router()
const DATE_FORMAT = 'MM-DD-YYYY'

TrakRouter.get('/', (req,res) => {
    Trak.find({}, traks => {
        res.json(traks)
    })
})

TrakRouter.get('/:date', async (req,res) => {
    const {date} = req.params
    if (!date || !moment(date, DATE_FORMAT, true).isValid()) {
        res.json('Invalid date format')
        return
    }
    let trak = await Trak.findOne({date}).exec()
    if (!trak) {
        trak = await Trak.create({date})
    }
    res.json(trak)
})

TrakRouter.post('/:id', (req,res) => {
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