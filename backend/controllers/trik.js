const { Router } = require('express')
const moment = require('moment')
const Trik = require('../models/trik')
const DATE_FORMAT = 'MM-DD-YYYY'

const TrikRouter = Router()

TrikRouter.get('/:date', async (req,res) => {
    const {date} = req.params
    const user_id = req.query.userId

    if (!user_id) {
        res.status(400).json("User id required to get triks")
    }

    if (!date || !moment(date, DATE_FORMAT, true).isValid()) {
        res.json('Invalid date format')
        return
    }

    let trik = await Trik.findOne({user_id, date}).exec()
    if (!trik) {
        trik = await Trik.create({user_id, date})
    }
    res.json(trik)
})

TrikRouter.put('/:id', async (req,res) => {
    const trik = await Trik.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.json(trik)
})

TrikRouter.delete('/', (req,res) => {
    Trak.deleteMany({}, err => {
        if (err) console.log(err)
        else res.json('Cleared Trak collection.')
    })
})

module.exports = TrikRouter